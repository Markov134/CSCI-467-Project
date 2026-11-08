import styles from '../../Styles/Styles.module.css';
import BackButton from '../../components/BackButton.js';
function ReceivingDeskPage() {
    return (
        <div className={styles.background}>
            <BackButton />
            <h1>Welcome to the Receiving Desk!</h1>
        </div>
    )
}

export default ReceivingDeskPage
