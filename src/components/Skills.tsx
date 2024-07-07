import {
  Card,
  Col,
  Container,
  Image,
  ProgressBar,
  Row,
  Stack,
} from "react-bootstrap";

import { skillList } from "utils/config";

const Skills = () => {
  return (
    <section id="skills">
      <h3 className="numbered-list">Skills & Superpowers</h3>

      <Container as="ul" className="arrow-list">
        {skillList.map(({ Icon, ...group }) => (
          <Row className="card-container">
            <Col xs={12} sm={12} md={4} lg={4}>
              <li>
                <Icon />
                {group.label}
              </li>
            </Col>
            <Col xs={12} sm={12} md={8} lg={8}>
              <Card body>
                <Stack gap={1} as={Container}>
                  {group.skills.map((skill) => (
                    <Row className="progress-div">
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
              </Card>
            </Col>
          </Row>
        ))}
      </Container>
    </section>
  );
};

export default Skills;
