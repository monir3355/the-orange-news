import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {
  const [showPass, setShowPass] = useState(true);
  const { signIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/category/0";

  const handleLogin = (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setSuccess("Login Successful!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div>
      <h3>Please Login</h3>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type={showPass ? "password" : "text"}
            placeholder="Password"
            name="password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            onClick={() => setShowPass(!showPass)}
            type="checkbox"
            label="Show Password"
          />
        </Form.Group>
        <Button variant="danger" type="submit">
          Login
        </Button>
        <br />
        <Form.Text className="text-muted mt-5">
          Don’t Have An Account ? <Link to="/register">Register</Link>
        </Form.Text>
        <br />
        <Form.Text className="text-danger">{error}</Form.Text>
        <Form.Text className="text-success mb-3">{success}</Form.Text>
      </Form>
    </div>
  );
};

export default Login;
