import { Routes, Route } from 'react-router-dom'

import Navigation from './components/Navigation.jsx'
import Pets from './pages/Pets.jsx'
import PetDetails from './pages/PetDetails.jsx'
import Favorites from './pages/Favorites.jsx'

import { PetsProvider } from './context/PetsContext.jsx'
import { FavoritesProvider } from './context/FavoritesContext.jsx'
import './App.css'


function App() {
  return (
    <>
      <PetsProvider>
        <FavoritesProvider>
        <Navigation />
          <main>
            <Routes>
              <Route path="/" element={<Pets />} />
              <Route path="/pets" element={<Pets />} />
              <Route path="/pets/:petId" element={<PetDetails />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="*" element={<h1>404 Not Found</h1>} />
            </Routes>
          </main>
        </FavoritesProvider>
      </PetsProvider>
    </>
  )
}

export default App
