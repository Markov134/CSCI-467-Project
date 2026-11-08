import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'

function NavBar({ links = [], logoLink = '/home' }) {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to={logoLink}>
                    <img style={{ width: '100px', height: 'auto', borderRadius: '20%' }}
                        src="/seas_logo.png"
                        alt="Auto Parts Logo"
                        className="navbar-logo"
                    />
                </Link>
                <div className="navbar-links">
                    {links.map((link) => (
                        <NavLink key={link.to} to={link.to} end className="navbar-link">
                            {link.label}
                        </NavLink>
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default NavBar
