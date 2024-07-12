import React, { memo } from "react";

import Header from "components/Header";
import Loader from "components/Loader";
import Socials from "components/Socials";

const View: React.FC<ViewProps> = ({ children }) => {
  return (
    <>
      <Loader />
      <div className="view">
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
