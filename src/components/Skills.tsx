import { memo } from "react";
import {
  Card,
  Col,
  Container,
  Image,
  ProgressBar,
  Row,
  Stack,
} from "react-bootstrap";

import { serviceList, skillList } from "utils/config";

import "styles/components/skills.css";

const Skills = () => {
  return (
    <section id="skills">
      <h3 className="numbered-list">Skills & Superpowers</h3>

      <Container as="ul" className="arrow-list">
        <Row as={Stack} gap={4}>
          <Col>
            <Row className="group-container">
              {serviceList.map(({ Icon, ...service }) => (
                <Col xs={12} sm={12} md={4} key={service.label}>
                  <Card body>
                    <Icon />
                    <Card.Title as="span">{service.label}</Card.Title>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
          {skillList.map(({ Icon, ...group }) => (
            <Col xs={12} className="skill-container" key={group.label}>
              <Card>
                <Card.Header>
                  <Card.Title as="span">
                    <Icon />
                    {group.label}
                  </Card.Title>
                </Card.Header>
                <Card.Body>
                  <Stack gap={4} as={Container}>
                    {group.skills.map((skill) => (
                      <Row className="progress-div" key={skill.label}>
                        <Col xs={12} sm={4} md={4} lg={4}>
                          <Image src={skill.icon} roundedCircle />
                          {skill.label}
                        </Col>
                        <Col xs={12} sm={8} md={8} lg={8}>
                          <ProgressBar now={skill.percent} />
                        </Col>
                      </Row>
                    ))}
                  </Stack>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default memo(Skills);
