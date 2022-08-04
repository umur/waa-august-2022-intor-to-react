import React from 'react';
import  {useState} from "react";
import axios from 'axios'
import './signin.css'
import { useNavigate } from 'react-router';


function Signin() {
    const navigate = useNavigate();

    const [signinState, setSigninState] = useState({
        email: '',
        password: ''
    });

    const onChanged = (event) => {
        setSigninState({...signinState, [event.target.name]: event.target.value})
    };

    const signinBtnAction = async () => {
        const response = await axios.post('http://localhost:8080/api/v1/uaa/login', {
            email: signinState.username,
            password: signinState.password
        });

        const data = response.data;
        if(data.accessToken) {
            sessionStorage.setItem('AccessToken', response.data.accessToken);
            navigate('/');
        } else {
            console.log(data);
        }
        

        
    };

    const cancelBtnAction = () => {
        navigate('/');
    };

    const signupBtnAction = () => {
        navigate('/signup');
    };

    return (
        <div className='form'>
            <p>Sign in</p>
            <div className='form-container'>
                <div className='form-row'>  
                    <div className='form-content'>Username:</div>
                    <div className='form-content'>
                        <input
                            type='text'
                            name='username'
                            value={signinState.username}
                            onChange={(event)=>onChanged(event)}
                        />
                    </div>
                </div>
                <div className='form-row'>  
                    <div className='form-content'>Password:</div>
                    <div className='form-content'>
                        <input
                            type='password'
                            name='password'
                            value={signinState.password}
                            onChange={(event)=>onChanged(event)}
                        />
                    </div>
                </div>
                <div className='form-row'>  
                    <div className='form-content'></div>
                    <div className='form-content'>
                        <input
                            type='button'
                            value='Signup'
                            onClick={signupBtnAction}
                        />
                    </div>
                </div>
                <div className='form-footer'>
                    <button onClick={signinBtnAction}>Signin</button>
                    <button onClick={cancelBtnAction}>Cancel</button>
                </div>
            </div>
        </div>
    );
}

export default Signin;