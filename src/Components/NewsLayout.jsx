import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { Col, Container, Row } from "react-bootstrap";
import RightNav from "../Pages/RightNav";
import Category from "./Category";

const NewsLayout = () => {
  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col lg={8}>
            <Outlet />
          </Col>
          <Col lg={4}>
            <RightNav />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default NewsLayout;
