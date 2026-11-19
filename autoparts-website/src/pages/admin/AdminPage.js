import styles from '../../Styles/Styles.module.css';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
function AdminPage() {
    return (
        <div className={styles.background}>
            <h1>Welcome to the Admin Page!</h1>

            <div className={styles.InfoBlock}>
                <h2>Admin Information</h2>
                <p>Current shipping rate:</p>
                <p>0-5 lbs: $4.99</p>
                <p>5-10 lbs: $5.99</p>
                <p>10+ lbs: $6.99</p>

                <h2>Set a new shipping rate</h2>
                <Row>

                    <Col xs={12} md={6}>
                    <select name="shippingRate" id="shippingRate">
                        <option value="0-5lbs">0-5 lbs</option>
                        <option value="5-10lbs">5-10 lbs</option>
                        <option value="10+lbs">10+ lbs</option>
                    </select>
                    
                    </Col>
                    <Col xs={12} md={6}>
                    <input type="number" name="newRate" id="newRate" placeholder="Enter new rate" />
                    </Col>
                </Row>
                <Row>
                    <button>Update Shipping Rate</button>
                </Row>
            </div>
            

            <div className={styles.InfoBlock}>
                <h2>Order Management</h2>
                <p>View and manage orders:</p>
                <button>View Orders</button>
            </div>





        </div>

        
        
    )
}

export default AdminPage
