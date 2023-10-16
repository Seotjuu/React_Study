import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Navbar
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBars = () => {
  return (
    <div className="mb-[20px]">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>
            <Nav.Link href="/">메인으로</Nav.Link>
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/PostList">
                게시물 목록
              </Nav.Link>
              <Nav.Link href="/PostRegister">
                게시물 등록
              </Nav.Link>
              <Nav.Link href="/PostEdit">
                게시물 수정
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBars;
