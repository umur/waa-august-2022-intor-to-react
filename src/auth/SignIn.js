import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

function SignIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function onSignIn() {
        const body = {username, password};
        console.log(body);
        // fetch to server
        navigate('/p');
    }

    return (
        <>
            <div className={"form-item"}>
                <label>Username</label>
                <input placeholder={'Username'} onChange={event => setUsername(event.target.value)}/>
            </div>
            <div className={"form-item"}>
                <label>Password</label>
                <input placeholder={'Password'} onChange={event => setPassword(event.target.value)}/>
            </div>
            <button onClick={() => onSignIn()}>Sign In</button>
        </>
    );
}

export default SignIn;