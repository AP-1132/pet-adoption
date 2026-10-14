import {Link} from 'react-router-dom'
import { useFavorites } from '../context/FavoritesContext.jsx'

export default function Navigation() {
  const { favoritesCount } = useFavorites()

 return (
    <nav>
          <Link to="/pets">Pets</Link>
          <Link to="/favorites">
            Favorites ({favoritesCount})
          </Link>
    </nav>
 )
}