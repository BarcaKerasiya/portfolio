import Contact from "./components/Contact";
import BlogContentSection from "./components/Blog/BlogContent";
import { createBrowserRouter } from "react-router-dom";
import Blog from "./components/Blog/Blog";
import Layout from "./Layout";
import Hero from "./components/Hero";
import Tech from "./components/Tech";
import ErrorPage from "./error-page";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Hero />,
      },
      {
        path: "blogs",
        element: <Blog />,
      },
      {
        path: "blog/:id",
        element: <BlogContentSection />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "tech",
        element: <Tech />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);
