import { Link, useParams } from "react-router";
import { usePets } from "../context/PetsContext.jsx";
import { useFavorites } from "../context/FavoritesContext.jsx";

export default function PetDetailsPage() {
  const { petId } = useParams();

  const { getPet } = usePets();
  const { toggleFavorite, isFavorite } = useFavorites();

  const id = Number(petId);
  const pet = Number.isInteger(id) ? getPet(id) : undefined;

  if (!pet) {
    return <h1>Pets not found</h1>;
  }

  return (
    <div className="pet-details">
      <h1>{pet.name}</h1>

      <p>Species:{pet.species}</p>
      <p>Age:{pet.age} years</p>
      <p>{pet.description}</p>

      <button
        onClick={() => toggleFavorite(pet.id)}
      >
        {isFavorite(pet.id) ? "Unfavorite" : "Favorite"}
      </button>
    </div>
  );
}