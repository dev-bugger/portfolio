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

const NavWidget: React.FC<NavWidgetProps> = ({
  activeLink,
  hidden,
  onLinkClick,
}) => {
  return (
    <div id="nav-widget" className={`${hidden ? "hidden" : ""}`}>
      <Nav>
        <Nav.Item>
          <SmoothScrollLink
            to="home"
            className={`${activeLink === "home" ? "active" : ""}`}
            onClick={onLinkClick}
          >
            <Tooltip title="Home">
              <HomeIcon />
            </Tooltip>
          </SmoothScrollLink>
        </Nav.Item>
        <Divider />
        {headerNavList.map(({ Icon, label, to }) => (
          <Nav.Item>
            <SmoothScrollLink
              key={label}
              to={to}
              className={`${activeLink === to ? "active" : ""}`}
              onClick={onLinkClick}
            >
              <Tooltip title={label}>
                <Icon />
              </Tooltip>
            </SmoothScrollLink>
          </Nav.Item>
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
  onLinkClick: (event: any, linkTo: string) => void;
};

export default NavWidget;
