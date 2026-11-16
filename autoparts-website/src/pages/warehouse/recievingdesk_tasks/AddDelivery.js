import styles from '../../../Styles/Styles.module.css'
import BackButton from '../../../components/BackButton'

function AddDelivery() {
    return (
        <div className={styles.background}>
            <BackButton />
            <h1>Add a Delivery</h1>
        </div>
    )
}

export default AddDelivery