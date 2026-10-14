import { usePets } from '../context/PetsContext.jsx'
import PetCard from '../components/PetCard.jsx'

export default function Pets() {
    const { pets } = usePets();

    return (
        <div>
            <div className="page-heading">
                <h1>Find your new best friend</h1>
                <p>Meet the wonderful pets currently looking for a loving home.</p>
            </div>
            <div className="pet-list">
                {pets.map((pet) => (
                    <PetCard key={pet.id} pet={pet} />
                ))}
            </div>
        </div>
    );
}