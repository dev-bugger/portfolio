import { Nav } from "react-bootstrap";
import { socialsList } from "utils/config";

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

export default Socials;
