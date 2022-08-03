import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();
    const LOCAL_STORAGE_KEY = 'app.credential';
    const [credential, setCredential] = useState({ username: "", password: "", token: "blabla" });

    const userNameRef = useRef();
    const passwordRef = useRef();

    function signIn(e) {
        setCredential({
            username: credential.username,
            password: credential.password,
            token: credential.password
        });

        navigate('/products');
    }

    useEffect(() => {

        if (localStorage.getItem(LOCAL_STORAGE_KEY)) {

            const storageCredential = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

            if (storageCredential) {
                setCredential(storageCredential);
            }
        }

    }, []);

    useEffect(() => {
        console.log('saving credentials')
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(credential));

    }, [credential]);

    return (
        <div>Login
            <br />
            <label> Username: <input type="text" ref={userNameRef} /></label>
            <br />
            <label> Password: <input type="password" ref={passwordRef} /></label>
            <br />
            <button onClick={signIn}>Sign in</button>
        </div>
    )
}
