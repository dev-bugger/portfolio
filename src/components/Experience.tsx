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
          <Card.Link href={jobNum.href} target="_blank" key={jobNum.duration}>
            <Card as={Row}>
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
                <span className="fc-green">
                  @{jobNum.company}
                  <LinkIcon />
                </span>
                <h6>{jobNum.duration}</h6>
                <p>{jobNum.location}</p>
              </Card.Title>
              <Card.Body as={Col} xs={12} sm={12} md={6} xl={7} lg={8}>
                <ul className="arrow-list">
                  {jobNum.description.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <div className="badge-list">
                  {jobNum.skills.map((skill) => (
                    <Badge>{skill}</Badge>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Card.Link>
        ))}
      </Stack>
    </section>
  );
};

export default Experience;
