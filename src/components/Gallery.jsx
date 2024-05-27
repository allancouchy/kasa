import { Link } from 'react-router-dom'
import { GalleryWrapper } from '../styled-components/Gallery'

const Gallery = ({ housings }) => {
  return (
    <GalleryWrapper>
      {housings.map(housing => (
        <Link key={housing.id} to={`/kasa/housings/${housing.id}`} data-testid='housing-link'>
          <img src={housing.cover} alt={housing.title} data-testid='housing-cover' />
          <h2 data-testid='housing-title'>{housing.title}</h2>
        </Link>
      ))}
    </GalleryWrapper>
  )
}

export default Gallery
