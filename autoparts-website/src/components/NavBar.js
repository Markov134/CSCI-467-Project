import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'

function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/">
                    <img style={{ width: '100px', height: 'auto', borderRadius: '20%' }}
                        src="/seas_logo.png"
                        alt="Auto Parts Logo"
                        className="navbar-logo"
                    />
                </Link>
                <div className="navbar-links">
                    <NavLink to="/customer" className="navbar-link">Customer</NavLink>
                    <NavLink to="/admin" className="navbar-link">Admin</NavLink>
                    <NavLink to="/warehouse" className="navbar-link">Warehouse</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
