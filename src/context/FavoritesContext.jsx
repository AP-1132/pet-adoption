import {
  createContext,
  useContext,
  useReducer,
  useEffect,
} from "react";

const FavoritesContext = createContext(null);

function favoritesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      if (state.includes(action.id)) {
        return state;
      }

      return [...state, action.id];

    case "REMOVE":
      return state.filter((id) => id !== action.id);

    case "TOGGLE":
      if (state.includes(action.id)) {
        return state.filter((id) => id !== action.id);
      }

      return [...state, action.id];

    default:
      return state;
  }
}

function initFavorites() {
  try {
    const saved = JSON.parse(
      localStorage.getItem("favoritePetIds") || "[]"
    );

    return Array.isArray(saved)
      ? [...new Set(saved.filter((id) => Number.isInteger(id)))]
      : [];
  } catch {
    return [];
  }
}

export function FavoritesProvider({ children }) {
  const [favoriteIds, dispatch] = useReducer(
    favoritesReducer,
    [],
    initFavorites
  );

  useEffect(() => {
    try {
      localStorage.setItem(
        "favoritePetIds",
        JSON.stringify(favoriteIds)
      );
    } catch {
      console.warn("Unable to save favorites.");
    }
  }, [favoriteIds]);

  const addFavorite = (id) => {
    dispatch({ type: "ADD", id });
  };

  const removeFavorite = (id) => {
    dispatch({ type: "REMOVE", id });
  };

  const toggleFavorite = (id) => {
    dispatch({ type: "TOGGLE", id });
  };

  const isFavorite = (id) => {
    return favoriteIds.includes(id);
  };

  return (
    <FavoritesContext.Provider
      value={{
        favoriteIds,
        addFavorite,
        removeFavorite,
        toggleFavorite,
        isFavorite,
        favoritesCount: favoriteIds.length,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}


export function useFavorites() {
  const ctx = useContext(FavoritesContext);
  if (ctx === null) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return ctx;
}