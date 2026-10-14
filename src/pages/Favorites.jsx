import { usePets } from '../context/PetsContext.jsx'
import { useFavorites } from '../context/FavoritesContext.jsx'
import PetCard from '../components/PetCard.jsx'

export default function Favorites() {
    const { pets } = usePets();
    const { favorites } = useFavorites();

    const favoritePets = pets.filter((pet) => favorites.includes(pet.id));

    return (
        <div>
            <h1>My Favorite Pets</h1>
            {favoritePets.length === 0 ? (
                <p>No Favorites Yet</p>
            ) : (
                <div className="pet-list">
                    {favoritePets.map((pet) => (
                        <PetCard key={pet.id} pet={pet} />
                    ))}
                </div>
            )}
        </div>
    );
}