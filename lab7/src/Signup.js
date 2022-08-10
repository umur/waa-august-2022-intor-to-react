import axios from "axios";
import { useState } from "react";

function Signup() {
  let [state, setter] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
  });
  function onValChange(val) {
    let copy = { ...state };
    switch (val.target.name) {
      case "firstname":
        copy.firstname = val.target.value;
        break;
      case "lastname":
        copy.lastname = val.target.value;
        break;
      case "username":
        copy.username = val.target.value;
        break;
      case "password":
        copy.password = val.target.value;
        break;

      default:
        break;
    }
    setter(copy);
  }
  function signup() {
    axios
      .post("http://localhost:8080/api/v1/uaa/signup", {
        firstname: state.firstname,
        lastname: state.lastname,
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

  return (
    <div>
      Sign Up Form
      <br />
      firstname:
      <input
        type="text"
        name="firstname"
        onChange={(e) => onValChange(e)}
      ></input>
      <br />
      lastname:
      <input
        type="text"
        name="lastname"
        onChange={(e) => onValChange(e)}
      ></input>
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
      <input type="button" value="Signup" onClick={signup}></input>
    </div>
  );
}

export default Signup;
