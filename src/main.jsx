import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import Article from "./components/Article";
import ContactMe from "./components/ContactMe";
import Experience from "./components/Experience";
import Project from "./components/Project";
import RelevantSkills from "./components/RelevantSkills";
import Error from "./components/Error";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/article",
    element: <Article />,
  },
  {
    path: "/contact-me",
    element: <ContactMe />,
  },
  {
    path: "/experience",
    element: <Experience />,
  },
  {
    path: "/project",
    element: <Project />,
  },
  {
    path: "/Relevant-Skills",
    element: <RelevantSkills />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
