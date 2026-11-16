function FormFillQuestion({ question, type = 'text' }) {
  return (
    <label>
      {question}
      <input type={type} />
    </label>
  )
}

export default FormFillQuestion