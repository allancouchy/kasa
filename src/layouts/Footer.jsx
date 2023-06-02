import logo from '../assets/logo-footer.png'

const Footer = () => {
    return (
        <footer className="footer">
            <img src={logo} alt="logo de Kasa" className="footer__logo" />
            <p className="footer__text">© 2020 Kaza. All rights reserved</p>
        </footer>
    )
}

export default Footer
