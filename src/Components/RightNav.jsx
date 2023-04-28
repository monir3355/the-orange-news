import React from "react";
import { Button } from "react-bootstrap";
import { FaGoogle, FaGithub } from "react-icons/fa";

const RightNav = () => {
  return (
    <div>
      <h4>Login With</h4>
      <Button className="mb-2 w-75" variant="outline-danger">
        {" "}
        <FaGoogle /> Login with google
      </Button>
      <Button className="mb-2 w-75" variant="outline-danger">
        <FaGithub /> Login with github
      </Button>
    </div>
  );
};

export default RightNav;
