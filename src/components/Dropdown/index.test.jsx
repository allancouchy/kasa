import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Dropdown from '.'

describe('Dropdown', () => {
  it('should render a button', () => {
    render(<Dropdown />)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })

  it('should render the content', () => {
    render(<Dropdown open={false} title={'Test'} content={'This is a test'} />)

    const button = screen.getByRole('button')
    fireEvent.click(button)

    const content = screen.queryByText('This is a test')
    expect(content).toBeInTheDocument()
  })

  it('should not render the content', () => {
    render(<Dropdown open={true} title={'Test'} content={'This is a test'} />)

    const button = screen.getByRole('button')
    fireEvent.click(button)

    const content = screen.queryByText('This is a test')
    expect(content).not.toBeInTheDocument()
  })
})
