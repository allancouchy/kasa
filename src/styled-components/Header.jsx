import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  width: 86%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 40px 0px;

  @media screen and (max-width: 768px) {
    width: 94%;
    margin: 20px 0;
  }

  > nav {
    width: 309px;
    display: flex;

    @media screen and (max-width: 768px) {
      width: 40%;
    }

    > a {
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      font-weight: 500;
      color: #ff6060;
      text-decoration: none;

      @media screen and (max-width: 768px) {
        text-transform: uppercase;
        font-size: 12px;
      }

      &:hover {
        text-decoration: underline;
      }
    }
  }
`
