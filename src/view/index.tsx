import React, { memo } from "react";

import Header from "components/Header";
import Socials from "components/Socials";

const View: React.FC<ViewProps> = ({ children }) => {
  return (
    <div className="d-flex flex-column h-100 w-100 view">
      <Header />
      <section className="overflow-hidden d-flex flex-grow-1">
        <Socials />
        <main className="flex-grow-1 app-body">{children}</main>
      </section>
    </div>
  );
};

interface ViewProps {
  children: React.ReactNode;
}

export default memo(View);
