import React from "react";
//import { Link } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "../index.css";

import logo from "../assets/img/home/12wbt-logo.30c8c45a.svg";

export const NavMenu = () => {
  return (
    <Navbar collapseOnSelect expand="md" sticky="top">
      <Container fluid="sm">
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Brand>
          <Nav.Link href="/">
            <img src={logo} width="140px" alt="12WBT Logo" />
          </Nav.Link>
        </Navbar.Brand>

        <Navbar.Collapse id="navbar-nav">
          <Nav className="mr-auto">
            <Nav.Item>
              <Nav.Link href="/how-it-works">How it Works</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/programs">Programs</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/nutrition">Nutrition</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/fitness">Fitness</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/mindset">Mindset</Nav.Link>
            </Nav.Item>

            <NavDropdown title="Community" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Nav.Link href="/community">12WBT Community</Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Nav.Link href="/blog">Blog</Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Nav.Link href="/success-stories">Success Stories</Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Nav.Link href="/crews">Crews</Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Nav.Link href="/community/group-membership">
                  Corporate Groups
                </Nav.Link>
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Item>
              <Nav.Link href="/faqs">FAQs</Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav>
            <Nav.Link href="https://go.12wbt.com" id="sign-in-nav">
              Login
            </Nav.Link>
            <Nav.Link href="https://go.12wbt.com/sign-up" id="sign-up-nav">
              Join Now
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavMenu;
