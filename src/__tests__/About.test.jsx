import { render } from '@testing-library/react'
import About from '../pages/About'

describe('about', () => {
  it('should render without crash', () => {
    render(<About />)
  })
})
