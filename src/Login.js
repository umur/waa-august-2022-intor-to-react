import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button, Container } from "reactstrap";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  let initialCredentials = {
    username: "",
    password: "",
  };
  let [credentials, setCredentials] = useState(initialCredentials);

  function handleChange(e) {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }

  async function handleLogin() { 
    console.log(credentials);
    navigate("/products");
  }

  return (
    <Container>
      <Form onSubmit={handleLogin}>
        <FormGroup>
          <Label for="username">Username</Label>
          <Input
            name="username"
            placeholder="Type a username"
            type="text"
            onChange={handleChange}
            value={credentials.username}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            name="password"
            placeholder="Type a password"
            type="text"
            onChange={handleChange}
            value={credentials.password}
            required
          />
        </FormGroup>
        <Button>Login</Button>
      </Form>
    </Container>
  );
};

export default LoginPage;
