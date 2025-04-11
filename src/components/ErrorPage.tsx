import React from "react";
import { Button } from "react-bootstrap";

import { ReactComponent as BugIcon } from "assets/bug.svg";

import "styles/components/errorBoundary.css";

const ErrorPage = () => {
  const handleRefresh = React.useCallback(() => {
    window.location.reload();
  }, []);

  return (
    <section id="errorBoundary">
      <h1>
        <BugIcon />
      </h1>
      <h3>Oops! Something went wrong.</h3>
      <p>Please click the button below to reload the page.</p>
      <Button variant="outline-primary" onClick={handleRefresh}>
        Reload
      </Button>
    </section>
  );
};

export default React.memo(ErrorPage);
