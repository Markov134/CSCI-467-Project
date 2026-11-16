import styles from '../../Styles/Styles.module.css'
import { NavLink } from 'react-router-dom'

function ReceivingDeskPage() {
    return (
        <div className={styles.background}>
            <h1>Welcome to SEAS AutoParts Website!</h1>
            <h2>Are you a customer or worker?</h2>

            <div>
                <NavLink to="/customer" className="navbar-link">Customer</NavLink> <NavLink to="/admin" className="navbar-link">Admin</NavLink>
            </div>
            
        </div>
    )
}

export default ReceivingDeskPage
