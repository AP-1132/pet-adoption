import { usePets } from '../context/PetsContext.jsx'
import PetCard from '../components/PetCard.jsx'

export default function Pets() {
    const { pets } = usePets();

    return (
        <div>
            <h1>Available Pets for Adoption</h1>
            <div className="pet-list">
                {pets.map((pet) => (
                    <PetCard key={pet.id} pet={pet} />
                ))}
            </div>
        </div>
    );
}