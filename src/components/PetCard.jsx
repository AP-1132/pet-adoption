import { Link } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext.jsx';

export default function PetCard({ pet }) {
    const { toggleFavorite, isFavorite } = useFavorites();

    const favorited = isFavorite(pet.id);

    return (
        <div className="pet-card">
            <h2>{pet.name}</h2>
            <p>Type: {pet.species}</p>
            <p>Age: {pet.age}</p>
            <p>Description: {pet.description}</p>
            <button onClick={() => toggleFavorite(pet.id)}>
                {favorited ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
            <Link to={`/pets/${pet.id}`}>View Details</Link>
        </div>
    );
}