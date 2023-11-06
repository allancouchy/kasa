import styled from 'styled-components'

export const BannerWrapper = styled.div`
  width: 100%;
  height: 223px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 23px 0px;

  @media screen and (max-width: 768px) {
    height: 111px;
  }

  &::after {
    content: '';
    opacity: 30%;
    width: 86%;
    height: 223px;
    background-color: black;
    border-radius: 25px;
    position: absolute;

    @media screen and (max-width: 768px) {
      width: 94%;
      height: 111px;
    }
  }

  > h1 {
    z-index: 1;
    font-size: 48px;
    font-weight: 500;
    color: white;
    position: absolute;

    @media screen and (max-width: 1150px) {
      font-size: 36px;
    }

    @media screen and (max-width: 768px) {
      font-size: 24px;
    }
  }

  > img {
    width: 100%;
    height: 100%;
    border-radius: 25px;
  }
`
