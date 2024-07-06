import { Card, Col, Row } from "react-bootstrap";

import { skillList } from "utils/config";

const Skills = () => {
  return (
    <section id="skills">
      <h3 className="numbered-list">Skills & Superpowers</h3>
      <Row className="justify-content-center">
        {skillList.map(({ Icon, label, skills }) => (
          <Col xs={12} sm={6} md={6} lg={4} xl={3} key={label}>
            <Card className="mb-4">
              <Card.Body className="align-items-center justify-content-center d-flex flex-column">
                <div className="card-front">
                  <Icon className="logo mb-2" />
                  <Card.Title className="mb-0 text-muted">{label}</Card.Title>
                </div>
                <div className="card-back">
                  <ul className="arrow-list">
                    {skills.map((skill) => (
                      <li>{skill.label}</li>
                    ))}
                  </ul>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Skills;
