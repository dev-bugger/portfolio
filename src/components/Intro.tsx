import { Col, Image, Row } from "react-bootstrap";

import profilePhoto from "assets/me.jpeg";

import "styles/components/intro.css";

const Intro = () => {
  return (
    <section id="home">
      <Row className="container">
        <Col xs={12} sm={12} md={12} lg={8} xl={8}>
          <h4>Namaste 🙏, I am</h4>
          <h1>Anjali Rawat.</h1>
          <h3>I build things for the web.</h3>
          <p className="d-inline fw-bold">
            Software Engineer &bull; Frontend Engineer &bull; Web Developer
          </p>
        </Col>
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={4}
          xl={4}
          className="p-0 image-wrapper"
        >
          <Image src={profilePhoto} alt="profile-photo" />
        </Col>
      </Row>
    </section>
  );
};

export default Intro;
