import { Card, Col, Row } from "react-bootstrap";

import { skillList } from "utils/config";

const Skills = () => {
  return (
    <section id="skills">
      <h3 className="numbered-list">Skills & Superpowers</h3>
      <Row className="justify-content-center">
        {skillList.map((tab) => (
          <Col sm={4} md={3}>
            <Card className="education-card mb-4">
              <Card.Body className="align-items-center justify-content-center d-flex flex-column">
                <Card.Img
                  src={tab.icon}
                  alt={`${tab.label} logo`}
                  className="mb-2 logo"
                />
                <Card.Title className="mb-0 text-muted">{tab.label}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Skills;
