
import styles from '../../Styles/Styles.module.css'
import FormFillQuestion from '../../components/FormFillQuestion'
import SimpleButton from '../../components/SimpleButton'

function RequestItem() {
    return (
        <div className={styles.background}>
            <h1>Request Items from the Warehouse</h1>

            <div className={styles.questionList}>
                <FormFillQuestion question ="Item Number? " />
                <FormFillQuestion question ="Quantity? " />
                <SimpleButton label =" Submit" onClick={() => alert('Submitted!')} />
            </div>
        </div>  
    )
}

export default RequestItem
