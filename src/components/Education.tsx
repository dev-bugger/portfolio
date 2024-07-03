import { Card } from "react-bootstrap";

import { schoolList } from "utils/config";

const Education = () => {
  return (
    <section id="education">
      <h3 className="numbered-list">Knowledge Quest</h3>
      <div className="d-flex flex-column">
        {schoolList.map((tab) => (
          <Card className="education-card" key={tab.degree}>
            <Card.Body>
              <Card.Title className="text-tertiary">{tab.label}</Card.Title>
              <Card.Subtitle className="mb-2 text-secondary">
                {tab.degree}
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted fs-6 fw-normal">
                {tab.duration}
              </Card.Subtitle>
              {!!tab.cgpa && (
                <Card.Text className="text-muted">Grade: {tab.cgpa}</Card.Text>
              )}
            </Card.Body>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Education;
