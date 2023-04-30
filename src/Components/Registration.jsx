import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Registration = () => {
  const [showPass, setShowPass] = useState(true);
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const handleRegister = (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    if (!/(?=.*[A-Z])/.test(password)) {
      setError("at least one uppercase");
      return;
    } else if (!/(?=.*[!#$%&? "])/.test(password)) {
      setError("at least special key");
      return;
    } else if (password.length < 8) {
      setError("please input 8 or more letter");
      return;
    }
    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        setSuccess("Successfully registration!");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div>
      <h3>Please Registration</h3>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter Name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhoto">
          <Form.Label>Your Photo URL</Form.Label>
          <Form.Control
            type="text"
            name="photo"
            placeholder="Enter Photo URL"
            required
          />
        </Form.Group>
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
        <Form.Group className="mb-3" controlId="formBasicCheckboxPass">
          <Form.Check
            onClick={() => setShowPass(!showPass)}
            type="checkbox"
            label="Show Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            name="accept"
            label="Accept Terms and Conditions"
          />
        </Form.Group>
        <Button variant="danger" type="submit">
          Register
        </Button>
        <br />
        <Form.Text className="text-muted">
          Already Have An Account ? <Link to="/login">Login</Link>
        </Form.Text>
        <br />
        <Form.Text className="text-danger">{error}</Form.Text>
        <Form.Text className="text-success mb-3">{success}</Form.Text>
      </Form>
    </div>
  );
};

export default Registration;
