import { memo } from "react";
import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <div className="loader">
      <Spinner animation="grow" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};

export default memo(Loader);
