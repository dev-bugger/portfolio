import { createBrowserRouter } from "react-router-dom";
import routes from "./routes";

const router = createBrowserRouter(routes, {
  basename: process.env.BASE_URL,
});

export default router;
