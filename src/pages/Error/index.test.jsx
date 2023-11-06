import { BrowserRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Error from '.'

describe('error', () => {
  it('should render without crash', () => {
    render(
      <BrowserRouter>
        <Error />
      </BrowserRouter>
    )
  })

  it('should render heading 1', () => {
    render(
      <BrowserRouter>
        <Error />
      </BrowserRouter>
    )
    const element = screen.getByRole('heading', { level: 1 })
    expect(element).toBeInTheDocument()
  })

  it('should render heading 2', () => {
    render(
      <BrowserRouter>
        <Error />
      </BrowserRouter>
    )
    const element = screen.getByRole('heading', { level: 2 })
    expect(element).toBeInTheDocument()
  })

  it('should render without a home link', () => {
    render(
      <BrowserRouter>
        <Error />
      </BrowserRouter>
    )

    const element = screen.getByRole('link', { name: /accueil/i })
    expect(element).toHaveAttribute('href', '/')
  })
})
