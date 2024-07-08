import { Navigate, RouteObject } from "react-router-dom";
import { resolveLazy } from "utils/common";

const routes: RouteObject[] = [
  {
    path: "/",
    lazy: () => resolveLazy(import("components/Intro")),
  },
  {
    path: "about",
    lazy: () => resolveLazy(import("components/AboutMe")),
  },
  {
    path: "experience",
    lazy: () => resolveLazy(import("components/Experience")),
  },
  {
    path: "skills",
    lazy: () => resolveLazy(import("components/Skills")),
  },
  {
    path: "contact",
    lazy: () => resolveLazy(import("components/Contact")),
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
];

export default routes;
