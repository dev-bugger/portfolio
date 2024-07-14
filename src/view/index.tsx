import React, { memo } from "react";

import CursorTracker from "components/Cursor";
import Header from "components/Header";
import Loader from "components/Loader";
import Socials from "components/Socials";

const View: React.FC<ViewProps> = ({ children }) => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [setLoading]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <CursorTracker />
      <div className="view" id="view">
        <Header />
        <section className="overflow-hidden d-flex flex-grow-1">
          <Socials />
          <main className="flex-grow-1 app-body">{children}</main>
        </section>
      </div>
    </>
  );
};

interface ViewProps {
  children: React.ReactNode;
}

export default memo(View);
