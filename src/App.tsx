import logo from "assets/logo.gif";
import React from "react";
import { Image } from "react-bootstrap";
import { RouterProvider } from "react-router-dom";
import router from "routing/router";

const App = () => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (loading) setTimeout(() => setLoading(false), 3500);
  }, [loading]);

  if (loading)
    return (
      <div className="d-flex h-100 w-100 loader align-items-center justify-content-center">
        <Image src={logo} alt="logo" />
      </div>
    );

  return <RouterProvider router={router} />;
};

export default App;
