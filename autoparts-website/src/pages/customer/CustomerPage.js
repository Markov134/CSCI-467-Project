import { Link } from 'react-router-dom';
import styles from '../../Styles/Styles.module.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function CustomerPage() {
    return (
        <div className={styles.background}>
            <header>
                <nav>
                    <div className={styles.nav_left}>
                        <div>
                            <img src="/seas_logo.png" width="100px" height="Auto" alt="SEAS logo" />
                        </div>
                        <div>
                            <p>Deliver to</p>
                            <select>
                                <option>Alabama</option>
                                <option>Alaska</option>
                                <option>Arizona</option>
                                <option>Arkansas</option>
                                <option>California</option>
                                <option>Colorado</option>
                                <option>Connecticut</option>
                                <option>Delaware</option>
                                <option>Florida</option>
                                <option>Georgia</option>
                                <option>Hawaii</option>
                                <option>Idaho</option>
                                <option>Illinois</option>
                                <option>Indiana</option>
                                <option>Iowa</option>
                                <option>Kansas</option>
                                <option>Kentucky</option>
                                <option>Louisiana</option>
                                <option>Maine</option>
                                <option>Maryland</option>
                                <option>Massachusetts</option>
                                <option>Michigan</option>
                                <option>Minnesota</option>
                                <option>Mississippi</option>
                                <option>Missouri</option>
                                <option>Montana</option>
                                <option>Nebraska</option>
                                <option>New Hampshire</option>
                                <option>New Jersey</option>
                                <option>New Mexico</option>
                                <option>New York</option>
                                <option>North Carolina</option>
                                <option>North Dakota</option>
                                <option>Ohio</option>
                                <option>Oklahoma</option>
                                <option>Oregon</option>
                                <option>Pennsylvania</option>
                                <option>Rhode Island</option>
                                <option>South Carolina</option>
                                <option>South Dekota</option>
                                <option>Tennessee</option>
                                <option>Texas</option>
                                <option>Utah</option>
                                <option>Vermont</option>
                                <option>Virgina</option>
                                <option>Washington</option>
                                <option>West Virgina</option>
                                <option>Wisconsin</option>
                                <option>Wyoming</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <div className="nav_center">
                            <select>
                                <option>All</option>
                                <option>Replacement Parts</option>
                                <option>Accessories</option>
                                <option>Oil and Chemcials</option>
                                <option>Tools and Equipment</option>
                                <option>Paint and Body</option>
                            </select>
                            <input type="search" placeholder="Search Autoparts" className={styles.search_bar} />
                        </div>
                    </div>

                    <div className={styles.nav_right}>
                        <div>
                            <p>Have an account? <Link to="/signin">Sign in</Link></p>
                        </div>

                        <div>
                            <Link to="/returnorder">Return and orders</Link>
                        </div>
                        <div>
                            <Link to="/cart">Shopping cart image</Link>
                        </div>
                    </div>
                </nav>
            </header>

            <main>
                <h1>Top Sellers</h1>
                <Row xs={1} md={4} className="g-4">
                    {Array.from({ length: 8 }).map((_, idx) => (
                        <Col key={idx}>
                            <Card>
                                <Card.Img variant="top" src="/transmission.png" />

                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit
                                        longer.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

                <h1>Best Sellers</h1>
                <div>
                    <div className="container py-5">
                        <p>Put best sellers here</p>
                        <CardGroup>
                            <div className="d-flex flex-nowrap overflow-x-auto gap-3 pb-3" >
                                <Card className="flex-shrink-0" style={{ width: '200px', height: '200px' }}>
                                    <Card.Img variant="top" src="/transmission.png" />
                                    <Card.Body>
                                        <Card.Title>Transmission</Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card className="flex-shrink-0" style={{ width: '200px', height: '200px' }}>
                                    <Card.Img variant="top" src="/transmission.png" />
                                    <Card.Body>
                                        <Card.Title>Transmission</Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card className="flex-shrink-0" style={{ width: '200px', height: '200px' }} >
                                    <Card.Img variant="top" src="/transmission.png" />
                                    <Card.Body>
                                        <Card.Title>Transmission</Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card className="flex-shrink-0" style={{ width: '200px', height: '200px' }} >
                                    <Card.Img variant="top" src="/transmission.png" />
                                    <Card.Body>
                                        <Card.Title>Transmission</Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card className="flex-shrink-0" style={{ width: '200px', height: '200px' }} >
                                    <Card.Img variant="top" src="/transmission.png" />
                                    <Card.Body>
                                        <Card.Title>Transmission</Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card className="flex-shrink-0" style={{ width: '200px', height: '200px' }} >
                                    <Card.Img variant="top" src="/transmission.png" />
                                    <Card.Body>
                                        <Card.Title>Transmission</Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card className="flex-shrink-0" style={{ width: '200px', height: '200px' }} >
                                    <Card.Img variant="top" src="/transmission.png" />
                                    <Card.Body>
                                        <Card.Title>Transmission</Card.Title>
                                    </Card.Body>
                                </Card>

                            </div>
                        </CardGroup>
                    </div>
                </div>

                <h1>Discounts</h1>
                <div>
                    <div className="container py-5">
                        <p>Put discounts Here</p>
                        <CardGroup>
                            <div className="d-flex flex-nowrap overflow-x-auto gap-3 pb-3" >
                                <Card className="flex-shrink-0" style={{ width: '200px', height: '200px' }}>
                                    <Card.Img variant="top" src="/transmission.png" />
                                    <Card.Body>
                                        <Card.Title>Transmission</Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card className="flex-shrink-0" style={{ width: '200px', height: '200px' }}>
                                    <Card.Img variant="top" src="/transmission.png" />
                                    <Card.Body>
                                        <Card.Title>Transmission</Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card className="flex-shrink-0" style={{ width: '200px', height: '200px' }} >
                                    <Card.Img variant="top" src="/transmission.png" />
                                    <Card.Body>
                                        <Card.Title>Transmission</Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card className="flex-shrink-0" style={{ width: '200px', height: '200px' }} >
                                    <Card.Img variant="top" src="/transmission.png" />
                                    <Card.Body>
                                        <Card.Title>Transmission</Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card className="flex-shrink-0" style={{ width: '200px', height: '200px' }} >
                                    <Card.Img variant="top" src="/transmission.png" />
                                    <Card.Body>
                                        <Card.Title>Transmission</Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card className="flex-shrink-0" style={{ width: '200px', height: '200px' }} >
                                    <Card.Img variant="top" src="/transmission.png" />
                                    <Card.Body>
                                        <Card.Title>Transmission</Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card className="flex-shrink-0" style={{ width: '200px', height: '200px' }} >
                                    <Card.Img variant="top" src="/transmission.png" />
                                    <Card.Body>
                                        <Card.Title>Transmission</Card.Title>
                                    </Card.Body>
                                </Card>

                            </div>
                        </CardGroup>
                    </div>
                </div>
            </main>

            <footer>
                <div>
                    <Card>
                        <Card.Body>Want to learn more. Check out our About us! <Link to="/about">Click Here!</Link></Card.Body>
                    </Card>
                </div>
            </footer>
        </div>
    )
}

export default CustomerPage
