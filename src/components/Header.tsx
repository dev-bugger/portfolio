import React, { memo } from "react";
import { Button, Container, Nav, Navbar, Offcanvas } from "react-bootstrap";

import { ReactComponent as LogoIcon } from "assets/logo.svg";
import resume from "assets/resume.pdf";
import useScrollHideHeader from "hooks/useScrollHideHeader";
import useSectionObserver from "hooks/useSectionObserver";
import "styles/components/header.css";
import { headerNavList, sectionIds } from "utils/config";
import NavWidget from "./NavWidget";
import SmoothScrollLink from "./SmoothScrollLink";

const Header = () => {
  const headerRef = React.useRef<HTMLElement>(null);
  const [show, setShow] = React.useState(false);
  const [activeLink, setActiveLink] = React.useState<string>("");

  const handleClose = React.useCallback(() => setShow(false), [setShow]);
  const handleShow = React.useCallback(() => setShow(true), [setShow]);

  useSectionObserver(sectionIds, setActiveLink);
  const isHeaderHidden = useScrollHideHeader(headerRef);

  const handleLinkClick = React.useCallback(
    (_e: any, linkId: string) => {
      setShow(false);

      setActiveLink(linkId);
    },
    [setShow]
  );

  return (
    <>
      <Navbar
        id="header"
        as="header"
        expand="md"
        className={`p-0 ${isHeaderHidden ? "hidden" : ""}`}
        sticky="top"
        ref={headerRef}
      >
        <Container fluid>
          <Navbar.Brand
            className="d-flex align-items-center"
            as={SmoothScrollLink}
            to="home"
            onClick={handleLinkClick as any}
          >
            <LogoIcon className="logo" />
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
                  <Button
                    variant="outline-primary"
                    href={resume}
                    target="_blank"
                  >
                    Resume
                  </Button>
                </Nav.Item>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <NavWidget activeLink={activeLink} hidden={!isHeaderHidden} />
    </>
  );
};

export default memo(Header);
