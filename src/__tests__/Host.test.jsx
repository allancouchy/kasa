import { render, screen } from '@testing-library/react'
import Host from '../components/Host'

describe('host', () => {
  const data = { name: 'Alex', picture: 'image1' }

  it('should render host name', () => {
    render(<Host name={data.name} picture={data.picture} />)

    const element = screen.getByTestId('host-name')
    expect(element.textContent).toBe('Alex')
  })

  it('should render host picture', () => {
    render(<Host name={data.name} picture={data.picture} />)

    const picture = screen.getByTestId('host-picture')
    expect(picture.alt).toBe('Alex')
  })
})
