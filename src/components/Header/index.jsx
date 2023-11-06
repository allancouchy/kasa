import { NavLink } from 'react-router-dom'
import { HeaderWrapper } from './style'
import image from '../../assets/logo.svg'

const Header = () => {
  return (
    <HeaderWrapper>
      <img src={image} alt='Logo de Kasa' />
      <nav>
        <NavLink to={'/kasa/'}>Accueil</NavLink>
        <NavLink to={'/kasa/about'}>À propos</NavLink>
      </nav>
    </HeaderWrapper>
  )
}

export default Header
