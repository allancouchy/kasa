import { BrowserRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Footer from '../components/Footer'

describe('footer', () => {
  it('should render logo', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    )

    const logo = screen.getByAltText(/logo/i)
    expect(logo).toBeInTheDocument()
  })

  it('should render copyright', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    )

    const text = screen.getByText(/all rights reserved/i)
    expect(text).toBeInTheDocument()
  })
})
