import { Link } from 'react-router-dom'
import CartWidget from '../../CartWidget/CartWidget'
import { useLoginContext } from '../../context/LoginContext'
import './header.css'

export const Header = () => {

    const { user, logout } = useLoginContext()

    return (
        <header className="bg-header">
            <div className="header-container">

                <Link to="/"><h1 className="header-title">MatoGames</h1></Link>

                <nav className="header-navbar">
                    <Link to='/productos/PlayStation5' className="header-navlink">PlayStation5</Link>
                    <Link to='/productos/Xbox' className="header-navlink">Xbox</Link>
                    <Link to='/productos/Nintendo' className="header-navlink">Nintendo</Link>
                    <Link to='/nosotros' className="header-navlink">Nosotros</Link>
                    <Link to='/contacto' className="header-navlink">Contacto</Link>
                </nav>
                <CartWidget />
                <div className='header-user'>
                    <small>Bienvenido: {user.user}</small>
                    <button onClick={logout} className='btn btn-outline-danger'>Logout</button>
                </div>
            </div>
        </header>
    )
}