import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Signup() {


    let navigate=useNavigate();

    const reqBody = {

    }
    const onInputChange = (elm) => {
        reqBody[elm.target.name] = elm.target.value;
    }

    const signUp=async ()=>{
        let result=await axios.post('/auth/signup',reqBody);
        navigate('/login');
    }
    return (<>
        <div>

            <label>First Name</label>
            <input name="firstName" onChange={onInputChange}/>
            <br />
            <label>Last Name</label>
            <input name="lastName" onChange={onInputChange} />
            <br />
            <label>Email</label>
            <input name="email" onChange={onInputChange} />
            <br />
            <label>Password</label>
            <input name="password" onChange={onInputChange} />
            <br />
            <button onClick={signUp}>Sign Up </button>

        </div>
    </>)

}