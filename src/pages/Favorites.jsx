import { usePets } from '../context/PetsContext.jsx'
import { useFavorites } from '../context/FavoritesContext.jsx'
import PetCard from '../components/PetCard.jsx'

export default function Favorites() {
    const { pets } = usePets();
    const { favoriteIds } = useFavorites();

    const favoritePets = pets.filter((pet) => favoriteIds.includes(pet.id));

    return (
        <div>
            <div className="page-heading">
                <h1>My favorite pets</h1>
                <p>Keep track of the pets who have captured your heart.</p>
            </div>
            {favoritePets.length === 0 ? (
                <p className="empty-state">No favorites yet. Add a pet to see it here.</p>
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