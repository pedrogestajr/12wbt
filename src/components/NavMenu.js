import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

import logo from "../assets/img/home/12wbt-logo.30c8c45a.svg";

export const NavMenu = () => {
  return (
    <Navbar collapseOnSelect expand="md" sticky="top">
      <Container fluid="sm">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Brand>
          <Nav.Link href="/">
            <img src={logo} width="140px" alt="12WBT Logo" />
          </Nav.Link>
        </Navbar.Brand>

        <Navbar.Collapse id="basic-navbar-nav">
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
                <Nav.Link href="/community/corporate-groups">
                  Corporate Groups
                </Nav.Link>
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Item>
              <Nav.Link href="/faqs">FAQs</Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav>
            <Nav.Link href="/sign-in" id="nav-sign-in">
              Login
            </Nav.Link>
            <Nav.Link href="/sign-up" id="nav-sign-up">
              Join Now
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavMenu;
