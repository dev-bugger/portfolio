import logo from "assets/logo.png";
import resume from "assets/resume.pdf";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { isRouteActive } from "utils/common";
import { headerNavList } from "utils/config";

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
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse
          id="navbarScroll"
          className="align-items-stretch align-self-stretch"
        >
          <Nav className="header-list w-100 justify-content-end" navbarScroll>
            {headerNavList.map(({ label, to }) => (
              <Nav.Item
                key={label}
                className={isRouteActive(to, location.pathname) ? "active" : ""}
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
