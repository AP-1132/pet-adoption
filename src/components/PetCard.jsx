import { Link } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext.jsx';

export default function PetCard({ pet }) {
    const { toggleFavorite, isFavorite } = useFavorites();

    const favorited = isFavorite(pet.id);

    return (
        <article className="pet-card">
            <div className="pet-card-header">
                <div>
                    <h2>{pet.name}</h2>
                    <span className="pet-species">{pet.species}</span>
                </div>
            </div>
            <div className="pet-meta">
                <span>{pet.age} {pet.age === 1 ? 'year' : 'years'} old</span>
            </div>
            <p className="pet-description">{pet.description}</p>
            <div className="pet-actions">
                <button onClick={() => toggleFavorite(pet.id)}>
                    {favorited ? 'Remove favorite' : 'Add to favorites'}
                </button>
                <Link to={`/pets/${pet.id}`}>View details</Link>
            </div>
        </article>
    );
}