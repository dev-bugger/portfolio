import React from "react";
import { Button, Nav, Tab } from "react-bootstrap";

import { ReactComponent as ForwardIcon } from "assets/fast-forward-fill.svg";
import useMediaQuery from "hooks/useMediaQuery";
import { jobList } from "utils/config";

const Experience = () => {
  const isTabVertical = useMediaQuery("(max-width: 768px)");
  const [key, setKey] = React.useState("0");

  const [idx, setIndex] = React.useState(0);

  const handleSelect = (selectedIndex: number) => {
    console.log(selectedIndex);
    setIndex(selectedIndex);
  };

  return (
    <section id="experience">
      <h3 className="numbered-list">Career Adventures</h3>
      <Tab.Container
        defaultActiveKey={0}
        onSelect={(k) => {
          handleSelect(0);
          setKey(k || "0");
        }}
      >
        <div className="d-flex timeline-container flex-grow-1">
          <Nav className="timeline">
            {jobList.map((tab, index) => (
              <Nav.Item>
                <Nav.Link eventKey={index}>{tab.label}</Nav.Link>
              </Nav.Item>
            ))}
            <div
              className="timeline-indicator"
              style={{
                transform: !isTabVertical
                  ? `translateY(calc(${Number(key)} * var(--tab-height)))`
                  : `translateX(calc(${Number(key)} * var(--tab-width)))`,
              }}
            />
          </Nav>
          <Tab.Content className="timeline-content h-100">
            {jobList.map((job, index) => (
              <Tab.Pane eventKey={index} className="h-100">
                <div
                  className={`d-flex align-items-center ${
                    !isTabVertical ? "px-3" : "px-0"
                  } h-100`}
                >
                  {job.designations?.length > 1 && (
                    <Button
                      className="nav-btn"
                      disabled={idx === 0}
                      onClick={() => handleSelect(idx - 1)}
                    >
                      <ForwardIcon
                        style={{
                          transform: "scaleX(-1)",
                        }}
                      />
                    </Button>
                  )}
                  <div className="d-block w-100 h-100 px-2">
                    <h5 className="fw-bold">
                      {job.designations?.[idx]?.title}&nbsp;
                      <span className="fc-green">
                        @{job.designations?.[idx]?.company}
                      </span>
                    </h5>
                    <h6>{job.designations?.[idx]?.duration}</h6>
                    <p>{job.designations?.[idx]?.location}</p>
                    <ul className="arrow-list">
                      {job.designations?.[idx]?.description.map((point) => (
                        <li>{point}</li>
                      ))}
                    </ul>
                  </div>
                  {job.designations?.length > 1 && (
                    <Button
                      className="nav-btn"
                      disabled={idx === job.designations?.length - 1}
                      onClick={() => handleSelect(idx + 1)}
                    >
                      <ForwardIcon />
                    </Button>
                  )}
                </div>
              </Tab.Pane>
            ))}
          </Tab.Content>
        </div>
      </Tab.Container>
    </section>
  );
};

export default Experience;
