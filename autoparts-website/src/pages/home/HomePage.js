
import styles from '../../Styles/Styles.module.css';
import Carousel from 'react-bootstrap/Carousel';

function HomePage(){
    return (
            <div className={styles.background}>
                <h1>Welcome to the Auto Parts Website</h1>
                <h2>Line 2 test</h2>
                <p>This is the home page for the Auto Parts Website.</p>
                <Carousel style={{ maxWidth: '800px', margin: '0 auto', justifyContent: 'center' }}>
                    <Carousel.Item>
                        <img
                            className="d-block mx-auto "
                            style={{ height: '400px', width: 'auto', objectFit: 'cover' }}
                            src="/v8_engine.png"   />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block mx-auto"
                            style={{ height: '400px', width: 'auto', objectFit: 'cover' }}
                            src="/transmission.png"
                            alt="Transmission"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block mx-auto"
                            style={{ height: '400px', width: 'auto', objectFit: 'cover' }}
                            src="/muffler.jpg"
                            alt="Muffler"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
    );
}

export default HomePage;