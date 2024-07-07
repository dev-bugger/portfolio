import withLayout from "HOC/withLayout";
import { AboutMe, Contact, Experience, Intro, Skills } from "components";
import { Navigate, RouteObject } from "react-router-dom";

const routes: RouteObject[] = [
  {
    path: "/",
    Component: withLayout(Intro),
  },
  {
    path: "about",
    Component: withLayout(AboutMe),
  },
  {
    path: "experience",
    Component: withLayout(Experience),
  },
  {
    path: "skills",
    Component: withLayout(Skills),
  },
  {
    path: "contact",
    Component: withLayout(Contact),
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
];

export default routes;