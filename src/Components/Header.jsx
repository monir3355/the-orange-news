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
              <Nav className="mx-auto">
                <Nav.Link>
                  <Link to="/">Home</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/about">About</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/career">Career</Link>
                </Nav.Link>
              </Nav>
              <Nav>
                {user && (
                  <Nav.Link>
                    <FaUserCircle style={{ fontSize: "2.5rem" }} />
                  </Nav.Link>
                )}
                <Nav.Link eventKey={2} href="#memes">
                  {user ? (
                    <Button variant="danger">Logout</Button>
                  ) : (
                    <Link to="/login">
                      <Button variant="danger">Login</Button>
                    </Link>
                  )}
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </header>
  );
};

export default Header;
