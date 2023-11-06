import styled from 'styled-components'

export const HousingTop = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: #ff6060;
  margin: 20px 0;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const HousingTopLeft = styled.div`
  display: flex;
  flex-direction: column;

  > h1 {
    font-size: 36px;
    margin: 0;

    @media screen and (max-width: 768px) {
      font-size: 18px;
    }
  }

  > p {
    font-size: 18px;

    @media screen and (max-width: 768px) {
      font-size: 14px;
    }
  }
  
  > div {
    display: flex;
    margin-bottom: 0;

    > p {
      font-size: 14px;
      color: white;
      background-color: #ff6060;
      border-radius: 25px;
      padding: 5px 20px;
      margin: 0 10px 0 0;

      @media screen and (max-width: 768px) {
        border-radius: 10px;
      }
    }
  }
`

export const HousingTopRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  @media screen and (max-width: 768px) {
    flex-direction: row-reverse;
    align-items: center;
    margin-top: 20px;
  }

  > div {
    display: flex;
    justify-content: flex-end;

    &:first-child {
      font-size: 18px;
      margin: 0;

      > p {
        width: 50%;
        display: flex;
        align-items: center;
        text-align: end;
        padding-right: 10px;
        margin: 0;

        @media screen and (max-width: 768px) {
          font-size: 12px;
        }
      }

      > img {
        width: 64px;
        height: 64px;
        border-radius: 50%;
      }
    }

    &:last-child {
      width: 200px;
      justify-content: space-between;
    }
  }
`

export const HousingDropdowns = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 20px 0;

  @media screen and (max-width: 1150px) {
    flex-direction: column;
  }

  p {
    display: flex;
    flex-direction: column;
    margin: 0;
  }
`
