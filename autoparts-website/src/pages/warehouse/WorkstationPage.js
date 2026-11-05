import BackButton from '../../components/BackButton';
import styles from '../../Styles/Styles.module.css';
function WorkstationPage() {
    return (
        <div className={styles.background}>
            <BackButton />
            <h1>Welcome to the Workstation!</h1>
        </div>
    )
}

export default WorkstationPage
