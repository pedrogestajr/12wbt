import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

import "./NavMenu.css";

import logo from "../../assets/img/home/12wbt-logo.30c8c45a.svg";

function NavMenu() {
  return (
    <Navbar
      className="navMenu nav py-0"
      collapseOnSelect
      expand="md"
      sticky="top"
    >
      <Container fluid="sm">
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Brand className="py-0">
          <Nav.Link href="/">
            <img className="my-2" src={logo} width="140px" alt="12WBT Logo" />
          </Nav.Link>
        </Navbar.Brand>

        <Navbar.Collapse id="navbar-nav">
          <Nav className="mr-auto">
            <Nav.Item>
              <Nav.Link href="https://www.12wbt.com/how-it-works">
                How it Works
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="https://www.12wbt.com/programs">
                Programs
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="https://www.12wbt.com/nutrition">
                Nutrition
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="https://www.12wbt.com/fitness">Fitness</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="https://www.12wbt.com/mindset">Mindset</Nav.Link>
            </Nav.Item>

            <NavDropdown title="Community" id="nav-dropdown">
              <NavDropdown.Item>
                <Nav.Link href="https://www.12wbt.com/community">
                  12WBT Community
                </Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Nav.Link href="https://www.12wbt.com/blog">Blog</Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Nav.Link href="https://www.12wbt.com/success-stories">
                  Success Stories
                </Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Nav.Link href="https://www.12wbt.com/crews">Crews</Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Nav.Link href="https://www.12wbt.com/community/group-membership">
                  Corporate Groups
                </Nav.Link>
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Item>
              <Nav.Link href="https://www.12wbt.com/faqs">FAQs</Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav>
            <Nav.Link href="https://go.12wbt.com/sign-in" id="nav-sign-in">
              Login
            </Nav.Link>
            <Nav.Link href="https://go.12wbt.com/sign-up" id="nav-sign-up">
              Join Now
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavMenu;
