import { createBrowserRouter } from "react-router-dom";
import routes from "./routes";

const router = createBrowserRouter(routes, {
  basename: "/portfolio",
});

export default router;
