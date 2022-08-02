import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form, FormGroup, Input, Label} from "reactstrap";

export default function Login() {

    const [loginState, setLoginState] = useState({
        username: '',
        password: ''
    })
    const onChanged = (event) => {
        setLoginState({...loginState, [event.target.name]: event.target.value})
    }
    const submitForm = (event) => {
        event.preventDefault();
        console.log(loginState);
    }

    return (
        <div style={{
            display: 'block', width: 550, padding: 30
        }}>
            <h5>Login Page</h5>
            <Form onSubmit={submitForm}>
                <FormGroup>
                    <Label for="usernameField">Username:</Label>
                    <Input type="text" name="username"
                           placeholder="Enter your username"
                           onChange={(event) => {
                               onChanged(event)
                           }}/>
                </FormGroup>
                <FormGroup>
                    <Label for="passwordField">Password:</Label>
                    <Input type="password" name="password"
                           placeholder="Enter your password"
                           onChange={(event) => {
                               onChanged(event)
                           }}/>
                </FormGroup>
                <Button>Login</Button>
            </Form>
        </div>
    );
}