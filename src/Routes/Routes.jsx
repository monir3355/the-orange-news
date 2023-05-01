import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../Components/Main";
import Category from "../Components/Category";
import NewsLayout from "../Components/NewsLayout";
import News from "../Pages/News/News";
import About from "../Components/About";
import Career from "../Components/Career";
import Registration from "../Components/Registration";
import Login from "../Components/Login";
import PrivateRoute from "../privateRoute/PrivateRoute";
import Terms from "../Components/Terms";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Category />,
        loader: () =>
          fetch(`https://the-orange-news-server-monir3355.vercel.app/news/`),
      },
      {
        path: "category/:id",
        element: <Category />,
        loader: ({ params }) =>
          fetch(
            `https://the-orange-news-server-monir3355.vercel.app/categories/${params.id}`
          ),
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
      {
        path: "/terms",
        element: <Terms />,
      },
    ],
  },
  {
    path: "news",
    element: <NewsLayout />,
    children: [
      {
        path: ":id",
        element: (
          <PrivateRoute>
            <News />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://the-orange-news-server-monir3355.vercel.app/news/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
