import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import Hero from "./components/Hero";
// import { Navbar } from "./components/Navbar";
import BlogContentSection from "./components/Blog/BlogContent";
// import Work from "./components/Work";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  createBrowserRouter,
  // RouterProvider,
  // Route,
  // Link,
} from "react-router-dom";
// import Home from "./components/Hero";
// import Skills from "./components/Skills";
import Blog from "./components/Blog/Blog";
// import ErrorPage from "./error-page";
import Layout from "./Layout";
import Hero from "./components/Hero";
import Tech from "./components/Tech";

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
    ],
  },
]);
