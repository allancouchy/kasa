import styled from 'styled-components'

export const ErrorWrapper = styled.div`
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 80px 0;

  > * {
    color: #ff6060;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;

    > h1 {
      font-size: 288px;
      margin: 0;

      @media screen and (max-width: 768px) {
        font-size: 96px;
      }
    }

    > h2 {
      text-align: center;

      @media screen and (max-width: 768px) {
        font-size: 18px;
      }
    }
  }

  > a {
    text-align: center;
    margin-top: 50px;

    @media screen and (max-width: 768px) {
      font-size: 14px;
    }
  }
`
