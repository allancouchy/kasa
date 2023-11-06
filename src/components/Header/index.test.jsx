import { BrowserRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from '.'

describe('header', () => {
  it('should render logo', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
    const element = screen.getByAltText(/logo/i)
    expect(element).toBeInTheDocument()
  })

  it('should render home navlink', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
    const element = screen.getByRole('link', { name: /accueil/i })
    expect(element).toHaveAttribute('href', '/kasa/')
  })

  it('should render about navlink', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
    const element = screen.getByRole('link', { name: /propos/i })
    expect(element).toHaveAttribute('href', '/kasa/about')
  })
})
