import React from "react";
import { NavLink } from "react-bootstrap";
import { calculateExperience } from "utils/common";

const AboutMe = () => {
  const experience = React.useMemo(calculateExperience, []);

  return (
    <section id="about">
      <h3 className="numbered-list">About Me</h3>

      <p>
        I'm a seasoned full-stack developer with{" "}
        <b className="fc-green">{experience} years</b>
        <b> of experience</b>, specializing in{" "}
        <b className="fc-green">frontend development</b>. I thrive on the
        challenges of crafting <i>sleek user interfaces</i>, diving deep into
        code, and tackling tricky bugs to bring new features to life.
      </p>

      <p>
        Beyond coding, I'm an avid <b>traveler</b> chasing my <b>wanderlust</b>{" "}
        around the globe ✈️, experimenting with new <b>recipes</b> in the
        kitchen 🍜, burying myself in <b>captivating books</b> 📚, hitting the{" "}
        <b>gym</b> to stay active 🏋️, and <b>spiking</b> on the volleyball court
        🏐.
      </p>

      <p>
        Currently, I'm bringing my skills and passion to{" "}
        <NavLink
          href="https://www.visa.com/"
          target="_blank"
          className="d-inline-flex fc-green"
        >
          Visa
        </NavLink>
        , <b>a global leader in digital payments technology</b> 💳 , where I
        specialize in creating and scaling <i>UI applications</i>. I'm dedicated
        to enhancing digital payment experiences and driving innovation in
        fintech.
      </p>

      <p>
        Let's connect ☎️ and bring your <i>ideas to life!</i> ✨
      </p>
    </section>
  );
};

export default AboutMe;
