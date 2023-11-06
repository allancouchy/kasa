import { Link } from 'react-router-dom'
import { HousingsWrapper } from './style'

const Gallery = ({ housings }) => {
  return (
    <HousingsWrapper>
      {housings.map(housing => (
        <Link key={housing.id} to={`/kasa/housings/${housing.id}`} data-testid='housing-link'>
          <img src={housing.cover} alt={housing.title} data-testid='housing-cover' />
          <h2 data-testid='housing-title'>{housing.title}</h2>
        </Link>
      ))}
    </HousingsWrapper>
  )
}

export default Gallery
