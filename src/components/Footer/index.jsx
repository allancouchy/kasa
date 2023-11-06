import { FooterWrapper } from './style'
import image from '../../assets/logo.png'

const Footer = () => (
  <FooterWrapper>
    <img src={image} alt='Logo de Kasa' />
    <p>2020 Kasa. All rights reserved</p>
  </FooterWrapper>
)

export default Footer
