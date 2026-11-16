import SimpleButton from '../../components/SimpleButton';import Form from 'react-bootstrap/Form';
import FormFillQuestion from '../../components/FormFillQuestion';

function SignIn() {
    return (
        <Form>
            <FormFillQuestion
                question="Email address"
                type="email"
                id="formBasicEmail"
                name="email"
                placeholder="Enter email"
                required
                helpText="We'll never share your email with anyone else."
            />
            <FormFillQuestion
                question="Password"
                type="password"
                id="formBasicPassword"
                name="password"
                placeholder="Password"
                required
            />
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <SimpleButton label="Submit" type="submit" />
        </Form>
    )
}

export default SignIn
