import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Banner from '../components/Banner'

describe('Banner', () => {
  it('should render heading', () => {
    render(<Banner />)
    const element = screen.getByRole('heading', { level: 1 })
    expect(element).toBeInTheDocument()
  })

  it('should render image', () => {
    render(<Banner />)
    const element = screen.getByAltText(/bannière/i)
    expect(element).toBeInTheDocument()
  })
})
