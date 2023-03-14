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
      path: "/",
      element: <Home />,
    },
    {
      path: "schedules",
      element: <Schedules />,
    },
    {
      path: "gallery",
      element: <Gallery />,
    },
    {
      path: "hotels",
      element: <Hotels />,
    },
    {
      path: "inscription",
      element: <Inscription />,
    },
    {
      path: "contact",
      element: <Contact />,
    }, 
  ]);
}

const Home = Loadable(lazy(() => import("../components/home/Home")));
const Schedules = Loadable(lazy(() => import("../components/home/Home")));
const Gallery = Loadable(lazy(() => import("../components/home/HGallery")));
const Hotels = Loadable(lazy(() => import("../components/home/HHotels")));
const Inscription = Loadable(lazy(() => import("../components/home/Home")));
const Contact = Loadable(lazy(() => import("../components/home/Home")));
