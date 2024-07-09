import ErrorPage from "components/ErrorPage";
import { Navigate, Outlet, RouteObject } from "react-router-dom";
import { resolveLazy } from "utils/common";
import View from "view";

const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <View>
        <Outlet />
      </View>
    ),
    errorElement: (
      <View>
        <ErrorPage />
      </View>
    ),
    children: [
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
    ],
  },
];

export default routes;
