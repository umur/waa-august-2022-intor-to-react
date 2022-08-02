import React, {useState} from "react";

function Login() {
    const [loginState, setLoginState] = useState({
        'username': '',
        'password': ''
    });

    function onChange(event) {
        setLoginState({...loginState, [event.target.name]: event.target.value})
    }

    function login() {
        console.log(loginState);
    }

    return (
        <div>
            <h1>Login page</h1>
            <div>
                Username:
                <input
                    type="text"
                    value={loginState.username}
                    name="username"
                    onChange={onChange}
                />
            </div>
            <div>
                Password:
                <input
                    type="password"
                    value={loginState.password}
                    name="password"
                    onChange={onChange}
                />
            </div>
            <div>
                <input
                    type="button"
                    value="Login"
                    onClick={login}
                />
            </div>
        </div>

    )
}

export default Login;