import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../Components/Main";
import Category from "../Components/Category";
import NewsLayout from "../Components/NewsLayout";
import News from "../Pages/News/News";
import About from "../Components/About";
import Career from "../Components/Career";
import Registration from "../Components/Registration";
import Login from "../Components/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Category />,
        loader: () => fetch(`http://localhost:5000/news/`),
      },
      {
        path: "category/:id",
        element: <Category />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/categories/${params.id}`),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/career",
        element: <Career />,
      },
      {
        path: "/register",
        element: <Registration />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "news",
    element: <NewsLayout />,
    children: [
      {
        path: ":id",
        element: <News />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/news/${params.id}`),
      },
    ],
  },
]);

export default router;
