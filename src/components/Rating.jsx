import redStar from '../assets/red-star.svg'
import grayStar from '../assets/gray-star.svg'

const Rating = ({ score }) => {
  const rating = []

  // add red stars according to the score 
  for (let i = 0; i < score; i++) {
    rating.push(<img src={redStar} alt='Etoile rouge' key={rating.toString([i])} />)
  }

  // the score is smaller than 5
  if (score < 5) {
    const difference = 5 - score

    // add gray stars according to the difference 
    for (let i = 0; i < difference; i++) {
      rating.push(<img src={grayStar} alt='Etoile grise' key={rating.toString([i])} />)
    }
  }

  return <div>{rating}</div>
}

export default Rating
