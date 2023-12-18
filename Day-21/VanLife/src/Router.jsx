import Home from "./pages/Home";
import { createBrowserRouter } from "react-router-dom";
import About from "./pages/About";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import VansDetails from "./pages/Van/VansDetails";
import Error from "./pages/Error";
import Vans from "./pages/Van/Vans";
import ProtectedRoutes from "./ProtectedRoutes/ProtectedRoutes";
import Dashboard from "./pages/Host/Dashboard";
import Host from "./pages/Host/Host";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostVans from "./pages/Host/HostVans";
import HostVanDetails from "./pages/Host/HostVanDetails";
import Details from "./pages/Host/HostVanDetails/Details";
import Pricing from "./pages/Host/HostVanDetails/Pricing";
import Photos from "./pages/Host/HostVanDetails/Photos";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "host",
        element: (
          <ProtectedRoutes>
            <Host />
          </ProtectedRoutes>
        ),
        children: [
          {
            path: "dashboard",
            element: (
              <ProtectedRoutes>
                <Dashboard />
              </ProtectedRoutes>
            ),
          },
          {
            path: "income",
            element: (
              <ProtectedRoutes>
                <Income />
              </ProtectedRoutes>
            ),
          },
          {
            path: "reviews",
            element: (
              <ProtectedRoutes>
                <Reviews />
              </ProtectedRoutes>
            ),
          },
          {
            path: "vans",
            element: (
              <ProtectedRoutes>
                <HostVans />
              </ProtectedRoutes>
            ),
          },
          {
            path: "vans/:vanId",
            element: (
              <ProtectedRoutes>
                <HostVanDetails />
              </ProtectedRoutes>
            ),
            children: [
              {
                path: "details",
                element: (
                  <ProtectedRoutes>
                    <Details />
                  </ProtectedRoutes>
                ),
              },
              {
                path: "pricing",
                element: (
                  <ProtectedRoutes>
                    <Pricing />
                  </ProtectedRoutes>
                ),
              },
              {
                path: "photos",
                element: (
                  <ProtectedRoutes>
                    <Photos />
                  </ProtectedRoutes>
                ),
              },
            ],
          },
        ],
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "vans",
        element: (
          <ProtectedRoutes>
            <Vans />
          </ProtectedRoutes>
        ),
      },
      {
        path: "vans/:vanId",
        element: (
          <ProtectedRoutes>
            <VansDetails />
          </ProtectedRoutes>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
    errorElement: <Error />,
  },
]);
