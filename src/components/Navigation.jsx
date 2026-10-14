import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useFavorites } from '../context/FavoritesContext.jsx'

export default function Navigation() {
  const { favoritesCount } = useFavorites()

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light'
  })

  useEffect(() => {
    localStorage.setItem('theme', theme)
    document.documentElement.dataset.theme = theme
  }, [theme])

const toggleTheme = () => {
   setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'))
};

 return (
    <nav aria-label="Main navigation">
          <Link to="/pets">Pets</Link>
          <Link to="/favorites">
            Favorites ({favoritesCount})
          </Link>
          <button onClick={toggleTheme}>
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </button>
    </nav>
 )
}