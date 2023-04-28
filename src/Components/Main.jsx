import React from "react";
import Home from "../Pages/Home";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { Col, Container, Row } from "react-bootstrap";
import LeftNav from "./LeftNav";
import RightNav from "./RightNav";

const Main = () => {
  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col lg={3}>
            <LeftNav />
          </Col>
          <Col lg={6}>Content Coming...</Col>
          <Col lg={3}>
            <RightNav />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Main;
