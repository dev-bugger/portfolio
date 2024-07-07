import { Badge, Card, Col, Container, Row, Stack } from "react-bootstrap";

import { ReactComponent as LinkIcon } from "assets/link.svg";
import { ReactComponent as WorkIcon } from "assets/work.svg";
import { jobList } from "utils/config";

const Experience = () => {
  return (
    <section id="experience">
      <h3 className="numbered-list">
        Career Adventures &nbsp; <WorkIcon />
      </h3>

      <Stack className="container" gap={4} as={Container}>
        {jobList.map((jobNum) => (
          <Card as={Row} key={jobNum.duration}>
            <Card.Title
              className="fw-light"
              as={Col}
              xs={12}
              sm={12}
              md={6}
              xl={5}
              lg={4}
            >
              {jobNum.title}&nbsp;
              <Card.Link
                className="fc-green"
                href={jobNum.href}
                target="_blank"
              >
                @{jobNum.company}
                <LinkIcon />
              </Card.Link>
              <h6>{jobNum.duration}</h6>
              <span>{jobNum.location}</span>
            </Card.Title>
            <Card.Body as={Col} xs={12} sm={12} md={6} xl={7} lg={8}>
              <ul className="arrow-list">
                {jobNum.description.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className="badge-list">
                {jobNum.skills.map((skill) => (
                  <Badge key="skill">{skill}</Badge>
                ))}
              </div>
            </Card.Body>
          </Card>
        ))}
      </Stack>
    </section>
  );
};

export default Experience;
