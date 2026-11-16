// add invoice and shipping label

import styles from '../../Styles/Styles.module.css'
import FormFillQuestion from '../../components/FormFillQuestion'
import SimpleButton from '../../components/SimpleButton'

function PackItem() {
    return (
        <div className={styles.background}>
            <h1>Let's Pack a Package!</h1>
            <div className={styles.questionList}>
                <FormFillQuestion 
                    question ="Package Number? " 
                    type="number"
                    id="packageNumber"
                    name="packageNumber"
                    placeholder="Enter package number"
                    required
                />
                <FormFillQuestion 
                    question ="Package Weight? " 
                    type="number"
                    id="packageWeight"
                    name="packageWeight"
                    placeholder="Enter package weight"
                    required
                />
                <FormFillQuestion 
                    question ="Customer Name? " 
                    type="text"
                    id="customerName"
                    name="customerName"
                    placeholder="Enter customer name"
                    required
                />
                <FormFillQuestion 
                    question ="Shipping Address? " 
                    type="text"
                    id="shippingAddress"
                    name="shippingAddress"
                    placeholder="Enter shipping address"
                    required
                />
                <SimpleButton label =" Submit" onClick={() => alert('Submitted!')} />
            </div>
        </div>
        
    )
}

export default PackItem
