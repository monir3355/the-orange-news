import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../Components/Main";
import Home from "../Pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default router;
