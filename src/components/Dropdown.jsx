import { useState } from 'react'
import { DropdownContent, DropdownTop, DropdownWrapper } from '../styled-components/Dropdown'

const Dropdown = ({ open = Boolean, title, content, style }) => {
  const [isOpened, setIsOpened] = useState(open)
  const handleClick = () => setIsOpened(o => !o)

  return isOpened ? (
    <DropdownWrapper style={style}>
      <DropdownTop type='button' onClick={handleClick}>
        <h2>{title}</h2>
      </DropdownTop>
      <DropdownContent data-testid="content">{content}</DropdownContent>
    </DropdownWrapper>
  ) : (
    <DropdownWrapper style={style}>
      <DropdownTop type='button' onClick={handleClick}>
        <h2>{title}</h2>
      </DropdownTop>
    </DropdownWrapper>
  )
}

export default Dropdown
