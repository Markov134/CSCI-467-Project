import styles from '../../Styles/Styles.module.css';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Cart() {
    const alertClicked = () => {
        alert('You clicked the third ListGroupItem');
    };
    return (
        <div className={styles.background}>
            <header>
                <Card>
                    <Card.Body>Your Shopping Cart</Card.Body>
                </Card>
            </header>

            <main>
                <div>
                    <ListGroup defaultActiveKey="#link1" className="gap-2">
                        <ListGroup.Item action onClick={alertClicked}>
                            <img src="/transmission.png" alt="Transmission" style={{ width: '200px', height: 'auto' }} />
                            <p>Transmission</p>
                            <Button variant="danger">Remove</Button>
                        </ListGroup.Item>
                        <ListGroup.Item action onClick={alertClicked}>
                            <img src="/transmission.png" alt="Transmission" style={{ width: '200px', height: 'auto' }} />
                            <p>Transmission</p>
                            <Button variant="danger">Remove</Button>
                        </ListGroup.Item>
                        <ListGroup.Item action onClick={alertClicked}>
                            <img src="/transmission.png" alt="Transmission" style={{ width: '200px', height: 'auto' }} />
                            <p>Transmission</p>
                            <Button variant="danger">Remove</Button>
                        </ListGroup.Item>
                    </ListGroup>
                </div>
            </main>

            <footer>
                <Card>
                    <Card.Body>Total Items: 3</Card.Body>
                    <Card.Body>Price: 100000$</Card.Body>
                    <Card.Body>
                        <Button variant="primary">Proceed To Checkout</Button>
                    </Card.Body>
                </Card>
            </footer>
        </div>
    )
}

export default Cart