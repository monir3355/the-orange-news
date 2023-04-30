import React, { useContext } from "react";
import logo from "../assets/logo.png";
import moment from "moment";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const { user } = useContext(AuthContext);
  return (
    <header className="py-5">
      <div className="text-center">
        <img className="w-50" src={logo} alt="" />
        <p className="pt-3">Journalism Without Fear or Favour</p>
        <h6>{moment().format("dddd, MMMM D, YYYY")}</h6>
      </div>
      <div>
        <Container>
          <h6 className="d-flex">
            <Button variant="danger">Latest</Button>
            <Marquee className="text-danger" speed={80}>
              Match Highlights: Germany vs Spain — as it happened ! Match
              Highlights: Germany vs Spain as...
            </Marquee>
          </h6>
        </Container>
      </div>
      <div>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mx-auto d-flex gap-3">
                <Link
                  className="text-black text-decoration-none text-muted"
                  to="/"
                >
                  Home
                </Link>
                <Link
                  className="text-black text-decoration-none text-muted"
                  to="/about"
                >
                  About
                </Link>
                <Link
                  className="text-black text-decoration-none text-muted"
                  to="/career"
                >
                  Career
                </Link>
                <Link
                  className="text-black text-decoration-none text-muted"
                  to="/register"
                >
                  Registration
                </Link>
              </Nav>
              <Nav>
                {user && <FaUserCircle style={{ fontSize: "2.5rem" }} />}
                {user ? (
                  <Button variant="danger">Logout</Button>
                ) : (
                  <Link to="/login">
                    <Button variant="danger">Login</Button>
                  </Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </header>
  );
};

export default Header;
