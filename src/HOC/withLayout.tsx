import { Header, Socials } from "components";
import { ComponentType } from "react";

const withLayout = <P extends object>(
  WrappedComponent: ComponentType<P>
): ComponentType<P> => {
  return (props) => (
    <div className="d-flex flex-column h-100 w-100">
      <Header />
      <section className="overflow-hidden d-flex flex-row flex-grow-1">
        <Socials />
        <main className="flex-grow-1 app-body">
          <WrappedComponent {...props} />
        </main>
      </section>
    </div>
  );
};

export default withLayout;
