import { render } from '@testing-library/react'
import About from '.'

describe('about', () => {
  it('should render without crash', () => {
    render(<About />)
  })
})
