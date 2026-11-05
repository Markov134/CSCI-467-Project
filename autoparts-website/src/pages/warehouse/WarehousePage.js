import { NavLink } from 'react-router-dom'
import styles from '../../Styles/Styles.module.css'

function WarehousePage() {
    return (
        <div className={styles.background}>
            <h1>Welcome to the Warehouse Page!</h1>

             <div>
                <NavLink to="/warehouse/workstation" className="navbar-link">Workstation</NavLink> <NavLink to="/warehouse/receivingdesk" className="navbar-link">Receiving Desk</NavLink>
            </div>
        </div>
    )
}

export default WarehousePage
