import profilePhoto from "assets/me.jpeg";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import { calculateExperience } from "utils/common";

const AboutMe = () => {
  const experience = React.useMemo(calculateExperience, []);

  return (
    <section id="about_me">
      <h3 className="numbered-list">The Story of Me</h3>
      <Row>
        <Col xs={12} sm={12} md={12} lg={8} xl={9}>
          <p>
            I'm a seasoned full-stack developer with over{" "}
            <b className="fc-green">{experience} years</b>
            <b> of experience</b>, specializing in{" "}
            <b className="fc-green">frontend development</b>. I thrive on the
            challenges of crafting <i>sleek user interfaces</i>, diving deep
            into code, and tackling tricky bugs to bring new features to life.
          </p>

          <p>
            Professionally, I'm proficient in&nbsp;<b>ReactJS</b>,&nbsp;
            <b>Angular</b>, <b>Redux</b>, <b>JavaScript</b>, <b>TypeScript</b>,{" "}
            <b>NodeJS</b>, <b>Java</b>, <b>Spring Boot</b>, <b>Hibernate</b>,
            and <b>MySQL</b>. Recently, I've been diving into{" "}
            <b>React Native</b>, <b>Express</b>, and <b>MongoDB</b>, constantly
            expanding my toolkit to stay at the forefront of technology. 👩🏻‍💻
          </p>

          <p>
            Beyond coding, I'm an avid <b>traveler</b> chasing my{" "}
            <b>wanderlust</b> around the globe ✈️, experimenting with new{" "}
            <b>recipes</b> in the kitchen 🍜, burying myself in{" "}
            <b>captivating books</b> 📚, hitting the <b>gym</b> to stay active
            🏋️, and <b>spiking</b> on the volleyball court 🏐. As an ex-NCC
            Cadet, I bring a disciplined approach to everything I do, drawing
            from experiences in various state-level camps.
          </p>

          <p>
            Currently, I'm bringing my skills and passion to{" "}
            <a href="https://www.visa.com/" className="fc-green">
              Visa
            </a>
            , <b>a global leader in digital payments technology</b> 💳 , where I
            specialize in creating and scaling <i>UI applications</i>. I'm
            dedicated to enhancing digital payment experiences and driving
            innovation in fintech.
          </p>

          <p>
            Let's connect ☎️ and bring your <i>ideas to life!</i> ✨
          </p>
        </Col>
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={4}
          xl={3}
          className="image-wrapper p-0"
        >
          <Image
            src={profilePhoto}
            rounded
            className="w-100 h-100"
            alt="profile-photo"
          />
        </Col>
      </Row>
    </section>
  );
};

export default AboutMe;
