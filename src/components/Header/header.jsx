import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget'
import './header.css'

export const Header = () => {


    return (
        <header className="bg-header">
            <div className="header-container">

                <Link to="/"><h1 className="header-title">MatoGames</h1></Link>

                <nav className="header-navbar">
                    <Link to='/productos/PlayStation5' className="header-navlink">PlayStation5</Link>
                    <Link to='/productos/Xbox' className="header-navlink">Xbox</Link>
                    <Link to='/productos/Nintendo' className="header-navlink">Nintendo</Link>
                </nav>
                <CartWidget/>
            </div>
        </header>
    )
}