import React, { Suspense, lazy } from "react";
import { useRoutes } from "react-router-dom";
import LoadingScreen from "../components/LoadingScreen";

const Loadable = (Component) => (props) => {
  return (
    <Suspense
      fallback={
        <LoadingScreen
          sx={{
            top: 0,
            left: 0,
            width: 1,
            zIndex: 9999,
            position: "fixed",
          }}
        />
      }
    >
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "about",
      element: <About />,
    },
    {
      path: "courses",
      element: <CourseHome />,
    },
    {
      path: "team",
      element: <Team />,
    },
    {
      path: "pricing",
      element: <Pricing />,
    },
    {
      path: "journal",
      element: <Blog />,
    },
    {
      path: "contact",
      element: <Contact />,
    },
    {
      path: "/",
      element: <Home />,
    },
  ]);
}

const Home = Loadable(lazy(() => import("../components/home/Home")));
const About = Loadable(lazy(() => import("../components/home/Home")));
const CourseHome = Loadable(lazy(() => import("../components/home/Home")));
const Team = Loadable(lazy(() => import("../components/home/Home")));
const Blog = Loadable(lazy(() => import("../components/home/Home")));
const Pricing = Loadable(lazy(() => import("../components/home/Home")));
const Contact = Loadable(lazy(() => import("../components/home/Home")));
