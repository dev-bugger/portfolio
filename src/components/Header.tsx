import React, { memo } from "react";
import { Button, Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";

import logo from "assets/logo.png";
import resume from "assets/resume.pdf";
import { headerNavList, sectionIds } from "utils/config";

import "styles/components/header.css";
import SmoothScrollLink from "./SmoothScrollLink";
import useSectionObserver from "hooks/useSectionObserver";

const Header = () => {
  const [show, setShow] = React.useState(false);
  const [activeLink, setActiveLink] = React.useState<string>("");

  const handleClose = React.useCallback(() => setShow(false), [setShow]);
  const handleShow = React.useCallback(() => setShow(true), [setShow]);

  useSectionObserver(sectionIds, setActiveLink);

  const handleLinkClick = React.useCallback(
    (_e: any, linkId: string) => {
      setShow(false);

      setActiveLink(linkId);
    },
    [setShow]
  );

  return (
    <Navbar id="header" as="header" expand="md" className="p-0" sticky="top">
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
                  key={label}
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

export default memo(Header);
