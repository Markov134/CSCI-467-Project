import { NavLink } from 'react-router-dom';
import BackButton from '../../components/BackButton';
import styles from '../../Styles/Styles.module.css';

const workstationTasks = [
    { label: 'Orders', to: '/warehouse/workstation/orders' },
    { label: 'Pack Item', to: '/warehouse/workstation/packitem' },
    { label: 'Print Packing Lists', to: '/warehouse/workstation/printpacking' },
    { label: 'Request Items', to: '/warehouse/workstation/requestitems' },
];

function WorkstationPage() {
    return (
        <div className={styles.background}>
            <BackButton />
            <h1>Welcome to the Workstation!</h1>

            <div className={styles.NavLinks}>
                {workstationTasks.map((task) => (
                    <NavLink key={task.to} to={task.to} className="navbar-link">
                        {task.label}
                    </NavLink>
                ))}
            </div>
        </div>
    )
}

export default WorkstationPage
