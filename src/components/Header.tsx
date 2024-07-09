import { Button, Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

import logo from "assets/logo.png";
import resume from "assets/resume.pdf";
import { isRouteActive } from "utils/common";
import { headerNavList } from "utils/config";

import "styles/components/header.css";

const Header = () => {
  const location = useLocation();

  return (
    <Navbar
      id="header"
      as="header"
      sticky="top"
      collapseOnSelect
      expand="md"
      className="p-0"
    >
      <Container fluid>
        <Navbar.Brand
          className="d-flex align-items-center"
          as={Link}
          to="/home"
        >
          <img src={logo} alt="logo" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          className="nav-drawer"
          aria-label="navigation"
        >
          <Offcanvas.Body>
            <Nav className="nav-list">
              {headerNavList.map(({ label, to }) => (
                <Nav.Item
                  key={label}
                  className={
                    isRouteActive(to, location.pathname) ? "active" : ""
                  }
                >
                  <Nav.Link as={Link} to={to}>
                    {label}
                  </Nav.Link>
                </Nav.Item>
              ))}
              <Nav.Item>
                <Button variant="outline-primary" href={resume} target="_blank">
                  Resume
                </Button>
              </Nav.Item>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Header;
