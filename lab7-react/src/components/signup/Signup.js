import React from 'react';
import  {useState} from "react";
import { useNavigate } from 'react-router';
import axios from 'axios';

import './signup.css'


function Signup() {
    const navigate = useNavigate();

    const [signupState, setSignupState] = useState({
        email: '',
        password: '',
        fname: '',
        lname: ''
    });

    const onChanged = (event) => {
        setSignupState({...signupState, [event.target.name]: event.target.value})
    };

    const signupBtnAction = async () => {
        const response = await axios.post('http://localhost:8080/api/v1/uaa/signup', {
            email: signupState.username,
            password: signupState.password,
            firstname: signupState.fname,
            lastname: signupState.lname
        });
        const user = response.data;
        if(user.id) {
            console.log(user);
            navigate('/');
        } else {
            console.log(response);
        }
    };

    const cancelBtnAction = () => {
        navigate('/');
    };


    return (
        <div className='form'>
            <p>Sign up</p>
            <div className='form-container'>
                <div className='form-row'>
                    <div className='form-content'>Email:</div>
                    <div className='form-content'>
                        <input
                            type='text'
                            name='email'
                            value={signupState.email}
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
                            value={signupState.password}
                            onChange={(event)=>onChanged(event)}
                        />
                    </div>
                </div>
                <div className='form-row'>
                    <div className='form-content'>First name:</div>
                    <div className='form-content'>
                        <input
                            type='text'
                            name='fname'
                            value={signupState.fname}
                            onChange={(event)=>onChanged(event)}
                        />
                    </div>
                </div>
                
                <div className='form-row'>
                    <div className='form-content'>Last name:</div>
                    <div className='form-content'>
                        <input
                            type='text'
                            name='lname'
                            value={signupState.lname}
                            onChange={(event)=>onChanged(event)}
                        />
                    </div>
                </div>
                <div className='form-footer'>
                    <button onClick={signupBtnAction}>Signup</button>
                    <button onClick={cancelBtnAction}>Cancel</button>
                </div>
            </div>
        </div>
    );
}

export default Signup;