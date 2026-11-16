import Form from 'react-bootstrap/Form';

function FormFillQuestion({
  question,
  type = 'text',
  id,
  name,
  placeholder,
  value,
  onChange,
  required = false,
  helpText,
}) {
  return (
    <Form.Group className="mb-3" controlId={id}>
      <Form.Label>{question}</Form.Label>
      <Form.Control
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
      {helpText && <Form.Text className="text-muted">{helpText}</Form.Text>}
    </Form.Group>
  );
}

export default FormFillQuestion;