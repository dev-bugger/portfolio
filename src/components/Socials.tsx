import { ReactComponent as GitHubIcon } from "assets/github.svg";
import { ReactComponent as InstagramIcon } from "assets/instagram.svg";
import { ReactComponent as LinkedInIcon } from "assets/linkedIn.svg";
import { Nav } from "react-bootstrap";

const Socials = () => {
  return (
    <Nav className="socials-nav flex-column justify-content-end">
      <Nav.Link href="https://github.com/dev-bugger/" target="_blank">
        <GitHubIcon />
      </Nav.Link>
      <Nav.Link
        href="https://www.instagram.com/throughraweyes/"
        target="_blank"
      >
        <InstagramIcon />
      </Nav.Link>
      <Nav.Link
        href="https://www.linkedin.com/in/anjali-rawat24/"
        target="_blank"
      >
        <LinkedInIcon />
      </Nav.Link>
    </Nav>
  );
};

export default Socials;
