import { Routes, Route } from 'react-router-dom'

import Pets from './pages/Pets.jsx'
import PetDetails from './pages/PetDetails.jsx'
import Favorites from './pages/Favorites.jsx'

import { PetsProvider } from './context/PetsContext.jsx'
import { FavoritesProvider } from './context/FavoritesContext.jsx'


function App() {
  return (
    <>
      <PetsProvider>
        <FavoritesProvider>
          <Routes>
            <Route path="/pets" element={<Pets />} />
            <Route path="/pets/:petId" element={<PetDetails />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </FavoritesProvider>
      </PetsProvider>
    </>
  )
}

export default App
