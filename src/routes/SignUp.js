import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form, FormGroup, Input, Label} from "reactstrap";

export default function SignUp() {

    const [signUpState, setSignUpState] = useState({
        username: '',
        password: '',
        firstname:'',
        lastname:''
    })
    const onChanged = (event) => {
        setSignUpState({...signUpState, [event.target.name]: event.target.value})
    }
    const submitForm = (event) => {
        event.preventDefault();
        console.log(signUpState);
    }

    return (
        <div style={{
            display: 'block', width: 550, padding: 30
        }}>
            <h5>SignUp Page</h5>
            <Form onSubmit={submitForm}>
                <FormGroup>
                    <Label for="firstnameField">Firstname:</Label>
                    <Input type="text" name="firstname"
                           placeholder="Enter your firstname"
                           onChange={(event) => {
                               onChanged(event)
                           }}/>
                </FormGroup>
                <FormGroup>
                    <Label for="lastnameField">Lastname:</Label>
                    <Input type="text" name="lastname"
                           placeholder="Enter your lastname"
                           onChange={(event) => {
                               onChanged(event)
                           }}/>
                </FormGroup>
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