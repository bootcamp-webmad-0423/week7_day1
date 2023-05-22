import './Navbar.css'
import logo from './../../assets/adidas-logo.jpeg'

const Navbar = () => {

    return (
        <header className='Header'>
            <nav>
                <img src={logo} alt="Logotipo" />
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Nosotros</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar