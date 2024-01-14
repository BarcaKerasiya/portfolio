import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import Hero from "./components/Hero";
import { Navbar } from "./components/Navbar";
import BlogContentSection from "./components/BlogContent";
// import Work from "./components/Work";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  createBrowserRouter,
  // RouterProvider,
  // Route,
  // Link,
} from "react-router-dom";
import Home from "./components/Hero";
import Skills from "./components/Skills";
import Blog from "./components/Blog";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
        {/* <Skills />
        <Blog />
        <Contact />
        <Footer /> */}
      </>
    ),
  },
  {
    path: "/blogs",
    element: (
      <>
        <Blog />
      </>
    ),
  },
  {
    path: "/blog/:id",
    element: (
      <>
        <BlogContentSection />
      </>
    ),
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);
