import React, { Component, useState } from 'react';

function Login() {


    const login=[LoginState, setLoginState] = useState({
        'username':'',
        'password':''
    });

    function onChange(event){
        setLoginState({...loginState, [event.target.name]: event.target.value})

    }

    function login(){
        console.log(loginState);
    }


    return (  
        <div>
            <div>   
            <h1>Welcome</h1>
            Username:
            <input
            type= 'text'
            value={loginState.username}
            name='username'
            onChange={onChange}
            />
            </div>

            <div>
                Password:
                <div>
                    <input
                    type='password'
                    value={loginState.password}
                    name= 'password'
                    onChange={onChange}
                    />
                </div>

            </div>

        </div>
        
    );
}

export default Login;