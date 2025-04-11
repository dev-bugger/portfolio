import { Nav } from "react-bootstrap";
import { memo } from "react";

import { socialsList } from "utils/config";

import "styles/components/socials.css";

const Socials = () => {
  return (
    <Nav className="socials-nav" id="socials">
      {socialsList.map(({ href, Icon, label }) => (
        <Nav.Link href={href} target="_blank" key={label}>
          <Icon />
        </Nav.Link>
      ))}
    </Nav>
  );
};

export default memo(Socials);
