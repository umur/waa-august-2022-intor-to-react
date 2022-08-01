import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

function SignUp() {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function onSignUp() {
        const body = {password, firstname, lastname, email};
        console.log(body);
        // fetch to server
        navigate('/sign-in');
    }


    return (
        <>
            <div class={"form-item"}>
                <label>Firstname</label>
                <input placeholder={'Firstname'} onChange={event => setFirstname(event.target.value)}/>
            </div>
            <div className={"form-item"}>
                <label>Lastname</label>
                <input placeholder={'Lastname'} onChange={event => setLastname(event.target.value)}/>
            </div>
            <div className={"form-item"}>
                <label>Email</label>
                <input placeholder={'Email'} onChange={event => setEmail(event.target.value)}/>
            </div>
            <div className={"form-item"}>
                <label>Password</label>
                <input placeholder={'Password'} onChange={event => setPassword(event.target.value)}/>
            </div>
            <button onClick={() => onSignUp()}>Sign Up</button>
        </>
    );
}

export default SignUp;