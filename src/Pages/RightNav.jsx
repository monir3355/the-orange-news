import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import "./RightNav.css";
import qzone1 from "./../assets/qZone1.png";
import qzone2 from "./../assets/qZone2.png";
import qzone3 from "./../assets/qZone3.png";
3;
const RightNav = () => {
  return (
    <div>
      <div>
        <h4>Login With</h4>
        <Button className="mb-2 w-75" variant="outline-danger">
          {" "}
          <FaGoogle /> Login with google
        </Button>
        <Button className="w-75" variant="outline-danger">
          <FaGithub /> Login with github
        </Button>
      </div>
      <div className="mt-4">
        <h4>Find Us On</h4>
        <ListGroup>
          <ListGroup.Item className="cursor-pointer">
            <FaFacebook /> Facebook
          </ListGroup.Item>
          <ListGroup.Item className="cursor-pointer">
            <FaTwitter /> Twitter
          </ListGroup.Item>
          <ListGroup.Item className="cursor-pointer">
            <FaInstagram /> Instragram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div className="mt-4 bg-light py-3">
        <h4 className="ps-2">QZone</h4>
        <img className="w-100 cursor-pointer" src={qzone1} alt="" />
        <img className="w-100 cursor-pointer" src={qzone2} alt="" />
        <img className="w-100 cursor-pointer" src={qzone3} alt="" />
      </div>
    </div>
  );
};

export default RightNav;
