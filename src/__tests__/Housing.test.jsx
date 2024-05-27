import { render } from '@testing-library/react'
import Housing from '../pages/Housing'

describe('housing', () => {
  it('should render without crash', () => {
    render(<Housing />)
  })
})
