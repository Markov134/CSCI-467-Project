import styles from '../../Styles/Styles.module.css';
import BackButton from '../../components/BackButton.js';
import { NavLink } from 'react-router-dom';

const recievingdeskTasks = [
    { label: 'Add Delivery', to: '/warehouse/receivingdesk/adddelivery' },
]

function ReceivingDeskPage() {
    return (
        <div className={styles.background}>
            <BackButton />
            <h1>Welcome to the Receiving Desk!</h1>

            <div className={styles.NavLinks}>
                {recievingdeskTasks.map((task) => (
                    <NavLink key={task.to} to={task.to} className="navbar-link">
                        {task.label}
                    </NavLink>
                ))}
            </div>
        </div>
    )
}

export default ReceivingDeskPage
