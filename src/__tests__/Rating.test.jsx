import { render, screen } from '@testing-library/react'
import Rating from '../components/Rating'

describe('rating', () => {
  it('should render four red star', () => {
    render(<Rating score={4} />)
    const redStar = screen.getAllByAltText(/etoile rouge/i)
    expect(redStar.length).toBe(4)
  })

  it('should render one grey star', () => {
    render(<Rating score={4} />)
    const greyStar = screen.getAllByAltText(/etoile grise/i)
    expect(greyStar.length).toBe(1)
  })
})
