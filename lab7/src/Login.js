import axios from "axios";
import { useState } from "react";

function Login() {
  let [state, setter] = useState({ username: "", password: "" });

  function login() {
    axios
      .post("http://localhost:8080/api/v1/uaa/signin", {
        email: state.username,
        password: state.password,
      })
      .then((e) => {
        console.log(e);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  function onValChange(val) {
    let copy = { ...state };
    if (val.target.name == "username") copy.username = val.target.value;
    else copy.password = val.target.value;
    setter(copy);
  }
  return (
    <div>
      Sign In Form
      <br />
      username:
      <input
        type="text"
        name="username"
        onChange={(e) => onValChange(e)}
      ></input>
      <br />
      password:
      <input
        type="password"
        name="password"
        onChange={(e) => onValChange(e)}
      ></input>
      <br />
      <input type="button" value="Login" onClick={login}></input>
    </div>
  );
}

export default Login;
