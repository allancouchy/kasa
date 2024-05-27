import { BrowserRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Gallery from '../components/Gallery'

describe('gallery', () => {
  const data = [{ id: '1', cover: 'image1', title: 'Appartement' }]

  it('should render housing link', () => {
    render(
      <BrowserRouter>
        <Gallery housings={data} />
      </BrowserRouter>
    )

    const housingLink = screen.getByTestId('housing-link')
    expect(housingLink).toHaveAttribute('href', '/kasa/housings/1')
  })

  it('should render housing cover', () => {
    render(
      <BrowserRouter>
        <Gallery housings={data} />
      </BrowserRouter>
    )

    const housingCover = screen.getByTestId('housing-cover')
    expect(housingCover).toHaveAttribute('src', 'image1')
  })

  it('should render housing title', () => {
    render(
      <BrowserRouter>
        <Gallery housings={data} />
      </BrowserRouter>
    )

    const housingTitle = screen.getByTestId('housing-title')
    expect(housingTitle.textContent).toBe('Appartement')
  })
})
