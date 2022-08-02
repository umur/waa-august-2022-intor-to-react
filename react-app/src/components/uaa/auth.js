import React, { useState, useEffect } from "react";
import { signIn } from "../../services/uaa";
import { setAuthTokens } from "../../utils/localStorageUtils";
import { isUserAuthenticated } from "../../utils/authUtils";
import { useNavigate } from "react-router-dom";

export default function (props) {
    const [authMode, setAuthMode] = useState("signin");
    const [formDetails, setFormDetails] = useState({ email: null, password: null });

    const [signingIn, setSigningIn] = useState(false);
    const [signingInError, setSignInError] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        isUserAuthenticated() && navigate('/main');
    })

    const changeAuthMode = () => {
        const currentAuthMode = authMode ? "signup" : "signin";
        setAuthMode(currentAuthMode);
    }

    const login = async () => {
        const { email, password } = formDetails;
        if (email && password) {
            setSigningIn(true);
            const [error, response] = await signIn({ email, password });
            setSigningIn(false);
            if (response && !error) {
                const { accessToken, refreshToken } = response;
                setAuthTokens({ accessToken, refreshToken });
            } else {
                setSignInError(true);
            }
        }
    }

    const updateFormState = (event) => {
        const txtType = event && event.target.type;
        const txtValue = event && event.target.value;
        const newState = formDetails;
        if (txtType === 'email') {
            setFormDetails({
                ...newState,
                email: txtValue
            })
        }
        if (txtType === 'password') {
            setFormDetails({
                ...newState,
                password: txtValue
            })
        }
    }

    if (signingIn) {
        return (
            <div>
                Loading.................
            </div>
        )
    }

    if (authMode === "signin") {
        return (
            <div className="Auth-form-container">
                <form className="Auth-form">
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Sign In</h3>
                        <div className="text-center">
                            Not registered yet?{" "}
                            <span className="link-primary" onClick={changeAuthMode}>
                                Sign Up
                            </span>
                        </div>
                        <div className="form-group mt-3">
                            <label>Email address</label>
                            <input
                                type="email"
                                className="form-control mt-1"
                                placeholder="Enter email"
                                onChange={updateFormState}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control mt-1"
                                placeholder="Enter password"
                                onChange={updateFormState}
                            />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button onClick={login} className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                        {signingInError && <div className="d-grid gap-2 mt-3">
                            <div>Error whiele signing in</div>
                        </div>}
                    </div>
                </form>
            </div>
        )
    }

    return (
        <div className="Auth-form-container">
            <form className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign In</h3>
                    <div className="text-center">
                        Already registered?{" "}
                        <span className="link-primary" onClick={changeAuthMode}>
                            Sign In
                        </span>
                    </div>
                    <div className="form-group mt-3">
                        <label>First Name</label>
                        <input
                            type="text"
                            className="form-control mt-1"
                            placeholder="e.g Jane Doe"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Last Name</label>
                        <input
                            type="text"
                            className="form-control mt-1"
                            placeholder="e.g Jane Doe"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Email address</label>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="Email Address"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Password"
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}