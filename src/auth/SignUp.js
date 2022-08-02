import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

function SignUp() {
    const [body, setBody] = useState({password: '', firstname: '', lastname: '', email: ''})
    const navigate = useNavigate();

    function onChange(event) {
        setBody({...body, [event.target.name]: event.target.value});
    }

    function onSignUp() {
        console.log(body);
        // fetch to server
        navigate('/sign-in');
    }


    return (
        <>
            <div className={"form-item"}>
                <label>Firstname</label>
                <input placeholder={'Firstname'} value={body.firstname} name={'firstname'} onChange={onChange}/>
            </div>
            <div className={"form-item"}>
                <label>Lastname</label>
                <input placeholder={'Lastname'} value={body.lastname} name={'lastname'} onChange={onChange}/>
            </div>
            <div className={"form-item"}>
                <label>Email</label>
                <input placeholder={'Email'} value={body.email} name={'email'} onChange={onChange}/>
            </div>
            <div className={"form-item"}>
                <label>Password</label>
                <input placeholder={'Password'} value={body.password} name={'password'} onChange={onChange}/>
            </div>
            <button onClick={() => onSignUp()}>Sign Up</button>
        </>
    );
}

export default SignUp;