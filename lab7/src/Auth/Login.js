import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Login() {


    let navigate = useNavigate();

    const reqBody = {

    }
    const onInputChange = (elm) => {
        reqBody[elm.target.name] = elm.target.value;
    }

    const login = async () => {
        let result = await axios.post('/auth/login', reqBody);
        navigate('/');
    }
    return (<>
        <div>


            <label>Email</label>
            <input name="email" onChange={onInputChange} />
            <br />
            <label>Password</label>
            <input name="password" onChange={onInputChange} />
            <br />
            <button onClick={login}>Log In  </button>

        </div>
    </>)

}