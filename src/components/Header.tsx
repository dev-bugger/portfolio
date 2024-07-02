import logo from "assets/logo.png";
import resume from "assets/resume.pdf";
import { Button, Container, Nav, Navbar } from "react-bootstrap";

const Header = () => (
  <Navbar as="header" sticky="top" collapseOnSelect expand="md">
    <Container fluid>
      <Navbar.Brand className="d-flex align-items-center">
        <img src={logo} alt="logo" className="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav className="header-list w-100 justify-content-end" navbarScroll>
          <Nav.Item>
            <Nav.Link href="#about_me">About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#experience">Experience</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#skills">Skills</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#contact">Contact</Nav.Link>
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
