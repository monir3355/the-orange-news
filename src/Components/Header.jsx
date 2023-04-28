import React from "react";
import logo from "../assets/logo.png";
import moment from "moment";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <header className="py-5">
      <div className="text-center">
        <img className="w-25" src={logo} alt="" />
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
                <Nav.Link href="#features">Home</Nav.Link>
                <Nav.Link href="#pricing">About</Nav.Link>
                <Nav.Link href="#pricing">Career</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="#deets">Profile</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  <Button variant="danger">Login</Button>
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
