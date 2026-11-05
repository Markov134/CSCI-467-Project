import styles from '../../Styles/Styles.module.css'
import { NavLink } from 'react-router-dom'

function AdminPage() {
    return (
        <div className={styles.background}>
            <h1>Welcome to the Admin Page!</h1>

            <div>
                <NavLink to="/admin/orderpage" className="navbar-link">Orders</NavLink> 
            </div>

        </div>
        
    )
}

export default AdminPage
