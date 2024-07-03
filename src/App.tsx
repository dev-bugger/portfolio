import logo from "assets/logo.gif";
import {
  AboutMe,
  Contact,
  Education,
  Experience,
  Header,
  Intro,
  Skills,
  Socials,
} from "components";
import React from "react";
import { Image } from "react-bootstrap";

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

  return (
    <div className="d-flex flex-column h-100 w-100 app-body">
      <Header />
      <section className="overflow-hidden d-flex flex-row flex-grow-1">
        <Socials />
        <main className="flex-grow-1">
          <Intro />
          <AboutMe />
          <Experience />
          <Education />
          <Skills />
          <Contact />
        </main>
      </section>
    </div>
  );
};

export default App;
