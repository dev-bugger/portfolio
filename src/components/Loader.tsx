import { memo } from "react";
import { Spinner } from "react-bootstrap";
import { useNavigation } from "react-router-dom";

const Loader = () => {
  const navigation = useNavigation();
  if (navigation.state !== "idle") {
    return (
      <div className="loader">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return null;
};

export default memo(Loader);
