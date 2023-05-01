import React, { useContext } from "react";
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
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import { Link } from "react-router-dom";

const auth = getAuth(app);
const RightNav = () => {
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const handleGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGithub = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div>
        <h4>Login With</h4>
        <Button
          onClick={handleGoogle}
          className="mb-2 w-75"
          variant="outline-danger"
        >
          {" "}
          <FaGoogle /> Login with google
        </Button>
        <Button
          onClick={handleGithub}
          className="w-75"
          variant="outline-danger"
        >
          <FaGithub /> Login with github
        </Button>
      </div>
      <div className="mt-4">
        <h4>Find Us On</h4>
        <ListGroup>
          <ListGroup.Item className="cursor-pointer">
            <Link
              className="text-decoration-none"
              to="https://www.facebook.com/monirul80/"
            >
              <FaFacebook /> Facebook
            </Link>
          </ListGroup.Item>
          <ListGroup.Item className="cursor-pointer">
            <Link
              className="text-decoration-none"
              to="https://twitter.com/Dev1Monirul"
            >
              <FaTwitter /> Twitter
            </Link>
          </ListGroup.Item>
          <ListGroup.Item className="cursor-pointer">
            <Link
              className="text-decoration-none"
              to="https://www.instagram.com/"
            >
              <FaInstagram /> Instragram
            </Link>
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
