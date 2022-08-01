import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
// import Signup from "./Signup";

function Password(props) {
    // let history = useHistory();
    // const changeAuthMode = () => {
    //     // history.push("/signup");
    // }
    return (
        <div className="Auth-form-container">
            <form className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Forgot Password</h3>
                    <div className="text-center">
                        Enter email address we will mail you change password link
                       
                    </div>
                    <div className="form-group mt-3">
                        <label>Email address</label>
                        <input
                            type="email"
                            required
                            className="form-control mt-1"
                            placeholder="Email Address"
                        />
                    </div>
                   
                    <div className="d-grid gap-2 mt-3">
                        <a href="/products" style={{textAlign:"center"}}>
                            <span className="btn btn-primary">
                                Submit
                            </span>
                        </a>
                    </div>
                   
                </div>
            </form>
        </div>
    )
}

export default Password;