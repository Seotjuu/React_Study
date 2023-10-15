import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Navbar
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBars = () => {
  return (
    <div className="mx-[20%] mt-[1%] p-[10px]">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>
            <Link to="/">메인으로</Link>
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/PostList">게시물 목록</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/PostRegister">게시물 등록</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/PostEdit">게시물 수정</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBars;
