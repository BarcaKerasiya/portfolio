import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import ErrorPage from "./error-page";

const Contact = lazy(() => import("./views/contact/Contact"));
const BlogContentSection = lazy(() => import("./views/blog/BlogContent"));
const Home = lazy(() => import("./views/home/Home"));
const Blogs = lazy(() => import("./views/blog/Blogs"));
const TechView = lazy(() => import("./views/tech/TechView"));
const VerifyEmail = lazy(() => import("./views/authentication/VerifyEmail"));
const SignIn = lazy(() => import("./views/authentication/SignIn"));
const SignUp = lazy(() => import("./views/authentication/SignUp"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "blogs",
        element: <Blogs />,
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
        element: <TechView />,
      },
      {
        path: "verify-email",
        element: <VerifyEmail />,
      },
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);
