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
        lazy: () => resolveLazy(import("view/Sections")),
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
];

export default routes;
