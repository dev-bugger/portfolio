import { Nav } from "react-bootstrap";

import { ReactComponent as BookIcon } from "assets/book.svg";
import { ReactComponent as HomeIcon } from "assets/home.svg";
import resume from "assets/resume.pdf";

import React from "react";
import "styles/components/nav-widget.css";
import { headerNavList } from "utils/config";
import Divider from "./Divider";
import SmoothScrollLink from "./SmoothScrollLink";
import Tooltip from "./Tooltip";

const NavWidget: React.FC<NavWidgetProps> = ({ activeLink, hidden }) => {
  return (
    <div id="nav-widget" className={`${hidden ? "hidden" : ""}`}>
      <Nav>
        <Nav.Item>
          <Nav.Link
            as={SmoothScrollLink}
            to="home"
            className={`${activeLink === "home" ? "active" : ""}`}
          >
            <Tooltip title="Home">
              <HomeIcon />
            </Tooltip>
          </Nav.Link>
        </Nav.Item>
        <Divider />
        {headerNavList.map(({ Icon, label, to }) => (
          <Nav.Link
            key={label}
            as={SmoothScrollLink}
            to={to}
            className={`${activeLink === to ? "active" : ""}`}
          >
            <Tooltip title={label}>
              <Icon />
            </Tooltip>
          </Nav.Link>
        ))}
        <Divider />
        <Nav.Item>
          <Nav.Link href={resume} target="_blank" className="active">
            <Tooltip title="Resume">
              <BookIcon />
            </Tooltip>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

type NavWidgetProps = {
  activeLink: string;
  hidden: boolean;
};

export default NavWidget;
