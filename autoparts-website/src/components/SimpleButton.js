import './SimpleButton.css';
import Button from 'react-bootstrap/Button';

function SimpleButton({ label, onClick, type = 'button' }) {
  return (
    <Button className="simple-button" type={type} onClick={onClick}>
      {label}
    </Button>
  );
}

export default SimpleButton;
