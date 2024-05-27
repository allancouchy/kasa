import { NavLink } from 'react-router-dom'
import { HeaderWrapper } from '../styled-components/Header'
import logo from '../assets/logo.svg'

const Header = () => {
  return (
    <HeaderWrapper>
      <img src={logo} alt='Logo de Kasa' />
      <nav>
        <NavLink to={'/kasa/'}>Accueil</NavLink>
        <NavLink to={'/kasa/about'}>À propos</NavLink>
      </nav>
    </HeaderWrapper>
  )
}

export default Header
