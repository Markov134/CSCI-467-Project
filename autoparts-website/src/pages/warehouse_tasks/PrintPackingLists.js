import styles from '../../Styles/Styles.module.css'
import FormFillQuestion from '../../components/FormFillQuestion'
import SimpleButton from '../../components/SimpleButton'

function PrintPacking() {
    return (
        <div className={styles.background}>
            <h1>Package Printing</h1>

            <div className={styles.questionList}>
                <FormFillQuestion 
                    question ="Order Number?"
                    type="number"
                    id="orderNumber"
                    name="orderNumber"
                    placeholder="Enter order number"
                    required
                />
                <SimpleButton label =" Submit" onClick={() => alert('Submitted!')} />
            </div>

        </div>
        
    )
}

export default PrintPacking
