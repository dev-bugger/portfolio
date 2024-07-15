import React from "react";
import { Button, Container, Nav, Navbar, Offcanvas } from "react-bootstrap";

import logo from "assets/logo.png";
import resume from "assets/resume.pdf";
import { headerNavList } from "utils/config";
import SmoothScrollLink from "./SmoothScrollLink";

import "styles/components/header.css";

const NavBar: React.FC<NavBarProps> = ({
  onLinkClick,
  hidden,
  navRef,
  activeLink,
}) => {
  const [show, setShow] = React.useState(false);

  const handleClose = React.useCallback(() => setShow(false), [setShow]);
  const handleShow = React.useCallback(() => setShow(true), [setShow]);

  const handleLinkClick = React.useCallback(
    (e: MouseEvent, linkId: string) => {
      onLinkClick(e, linkId);

      handleClose();
    },
    [onLinkClick, handleClose]
  );

  return (
    <Navbar
      id="header"
      as="header"
      expand="md"
      className={`p-0 ${hidden ? "hidden" : ""}`}
      sticky="top"
      ref={navRef}
    >
      <Container fluid>
        <Navbar.Brand
          className="d-flex align-items-center"
          as={SmoothScrollLink}
          to="home"
          onClick={handleLinkClick as any}
        >
          <img src={logo} alt="logo" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleShow} />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          className="nav-drawer"
          aria-label="navigation"
          show={show}
          onHide={handleClose}
        >
          <Offcanvas.Body>
            <Nav className="nav-list">
              {headerNavList.map(({ label, to }) => (
                <Nav.Item
                  key={`nav-bar-link--${label}`}
                  className={activeLink === to ? "active" : ""}
                >
                  <SmoothScrollLink to={to} onClick={handleLinkClick}>
                    {label}
                  </SmoothScrollLink>
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

type NavBarProps = {
  onLinkClick: (e: any, linkId: string) => void;
  hidden: boolean;
  navRef: React.RefObject<HTMLElement>;
  activeLink: string;
};

export default NavBar;
