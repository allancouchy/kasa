import styled from 'styled-components'

export const GalleryWrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: hsl(0, 0%, 96%);
  border-radius: 25px;
  padding: 26px 20px;
  margin: 20px 0px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    background-color: white;
    padding: 0;
  }

  > a {
    width: 27%;
    height: 340px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin: 30px;

    @media screen and (max-width: 1150px) {
      width: 40%;
    }

    @media screen and (max-width: 768px) {
      width: 100%;
      margin: 10px 0;
    }

    &::after {
      content: '';
      opacity: 30%;
      width: 22.6%;
      height: 340px;
      background: linear-gradient(white 0%, black 50%);
      border-radius: 10px;
      position: absolute;

      @media screen and (max-width: 1150px) {
        width: 32.65%;
      }

      @media screen and (max-width: 768px) {
        width: 94%;
      }
    }

    > h2 {
      z-index: 1;
      width: 15%;
      font-size: 24px;
      color: white;
      position: absolute;
      margin: 20px;

      @media screen and (max-width: 768px) {
        width: 45%;
      }
    }

    > img {
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }
  }
`
