import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useAuth} from "../App";

function SignIn() {
    const [body, setBody] = useState({password: '', username: ''})
    const navigate = useNavigate();
    const auth = useAuth();

    function onChange(event) {
        setBody({...body, [event.target.name]: event.target.value});
    }

    function onSignIn() {
        console.log(body);
        // fetch to server
        auth.signIn(body, function () {
            localStorage.setItem('access_token', 'token');
            navigate('/p');
        });
    }

    return (
        <>
            <div className={"form-item"}>
                <label>Username</label>
                <input placeholder={'Username'} value={body.username} name={'username'} onChange={onChange}/>
            </div>
            <div className={"form-item"}>
                <label>Password</label>
                <input placeholder={'Password'} value={body.password} name={'password'} onChange={onChange}/>
            </div>
            <button onClick={() => onSignIn()}>Sign In</button>
        </>
    );
}

export default SignIn;