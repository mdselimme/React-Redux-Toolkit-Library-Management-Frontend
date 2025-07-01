import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";

export const routes = createBrowserRouter([
  {
    path: "/",
    Component: App,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
    ],
  },
]);
