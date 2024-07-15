import React, { memo } from "react";

import CursorTracker from "components/Cursor";
import Loader from "components/Loader";
import Navigation from "components/Navigation";
import Socials from "components/Socials";

const View: React.FC<ViewProps> = ({ children }) => {
  const [, startTransition] = React.useTransition();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      startTransition(() => {
        setLoading(false);
      });
    }, 2000);
  }, [setLoading]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <CursorTracker />
      <div className="view" id="view">
        <Navigation />
        <section className="d-flex flex-grow-1">
          <Socials />
          <main className="flex-grow-1" id="main">
            {children}
          </main>
        </section>
      </div>
    </>
  );
};

interface ViewProps {
  children: React.ReactNode;
}

export default memo(View);
