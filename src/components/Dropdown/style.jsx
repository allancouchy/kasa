import styled from 'styled-components'

export const DropdownWrapper = styled.div`
  @media screen and (max-width: 1150px) {
    min-width: 100%;
    margin-top: 20px;
  }
`

export const DropdownTop = styled.button`
  width: 100%;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  background-color: #ff6060;
  border: none;
  border-radius: 10px;
  padding: 0 20px;

  > h2 {
    font-size: 24px;
    font-weight: 500;
    margin: 0;

    @media screen and (max-width: 768px) {
      font-size: 13px;
    }
  }
`

export const DropdownContent = styled.div`
  width: 100%;
  height: 81%;
  color: #ff6060;
  background-color: hsl(0, 0%, 96%);
  border-radius: 10px;
  padding: 20px;

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`
