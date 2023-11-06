import { render } from '@testing-library/react'
import Housing from '.'

describe('housing', () => {
  it('should render without crash', () => {
    render(<Housing />)
  })
})
