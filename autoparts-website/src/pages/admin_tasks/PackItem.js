
import styles from '../../Styles/Styles.module.css'
import FormFillQuestion from '../../components/FormFillQuestion'
import SimpleButton from '../../components/SimpleButton'

function PackItem() {
    return (
        <div className={styles.background}>
            <h1>Let's Pack a Package!</h1>
            <div className={styles.questionList}>
                <FormFillQuestion question ="Package Number? " />
                <FormFillQuestion question ="Package Weight? " />
                <FormFillQuestion question ="Customer Name? " />
                <FormFillQuestion question ="Shipping Address? " />
                <SimpleButton label =" Submit" onClick={() => alert('Submitted!')} />
            </div>
        </div>
        
    )
}

export default PackItem
