import logo from "assets/logo.png";
import resume from "assets/resume.pdf";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => (
  <Navbar as="header" sticky="top" collapseOnSelect expand="md">
    <Container fluid>
      <Navbar.Brand className="d-flex align-items-center" as={Link} to="/home">
        <img src={logo} alt="logo" className="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav className="header-list w-100 justify-content-end" navbarScroll>
          <Nav.Item>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/experience">
              Experience
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/skills">
              Skills
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Button
              variant="outline-primary"
              href={resume}
              target="_blank"
              className="ms-2"
            >
              Resume
            </Button>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;
