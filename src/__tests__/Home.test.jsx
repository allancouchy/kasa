import { BrowserRouter } from 'react-router-dom'
import { render } from '@testing-library/react'
import Home from '../pages/Home'

describe('home', () => {
  it('should render without crash', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
  })
})
