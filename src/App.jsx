import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Rootlayout from "./router/Rootlayout";

const HomeLazy = lazy(() => import("./pages/Home"));
const AboutLazy = lazy(() => import("./pages/About"));
const ProjectsLazy = lazy(() => import("./pages/Projects"));
const ProjectDetailsLazy = lazy(() => import("./pages/ProjectDetails"));
const ContactLazy = lazy(() => import("./pages/Contact"));
const NotFoundLazy = lazy(() => import("./pages/NotFound"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout />,
    children: [
      { index: true, element: <HomeLazy /> },
      { path: "about", element: <AboutLazy /> },
      { path: "projects", element: <ProjectsLazy /> },
      { path: "projects/:projectId", element: <ProjectDetailsLazy /> },
      { path: "contact", element: <ContactLazy /> },
    ],
  },
  {path: "*", element: <NotFoundLazy />},
]);

export default function App() {
  return (
      <RouterProvider router={router}/>
  );
}
