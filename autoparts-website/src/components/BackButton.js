
import styles from './BackButton.module.css';

function BackButton() {
    return (
        <div className={styles.back_button}>
            <button onClick={() => window.history.back()}>&#8592;  <br/>Back</button>
        </div>
    );
}

export default BackButton;