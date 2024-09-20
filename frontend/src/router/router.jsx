import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Shop from "../shop/Shop";
import About from "../components/About";
import Blog from "../components/Blog";
import Home from "../home/home";
import Singlebook from "../shop/Singlebook";
import Dashboard from "../Dashboard/Dashboard";
import Preparation from "../preparation/Preparation";
import Books from "../preparation/Books";
import Paper from "../preparation/Paper";
import Dahboardlayout from "../Dashboard/Dahboardlayout";
import Upload from "../Dashboard/Upload";
import Manage from "../Dashboard/Manage";
import Editbooks from "../Dashboard/Editbooks";
import Signup from "../components/Signup";
import Login from "../components/Login";
import Privateroute from "../Privateroute/privateroute";
import Logout from "../components/Logout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/book/:id",
        element: <Singlebook />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/book/${params.id}`),
      },
      {
        path: "/preparation",
        element: <Preparation></Preparation>,
        children: [
          {
            path: "./preparation/books",
            element: <Books></Books>,
          },
          {
            path: "./preparation/papers",
            element: <Paper></Paper>,
          },
        ],
      },
    ],
  },
  {
    path: "/admin/dashboard",
    element: <Dahboardlayout></Dahboardlayout>,
    children: [
      {
        path: "/admin/dashboard",
        element: (
          <Privateroute>
            <Dashboard></Dashboard>
          </Privateroute>
        ),
      },
      {
        path: "/admin/dashboard/upload",
        element: <Upload></Upload>,
      },
      {
        path: "/admin/dashboard/manage",
        element: <Manage></Manage>,
      },
      {
        path: "/admin/dashboard/edit-books/:id",
        element: <Editbooks></Editbooks>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/book/${params.id}`),
      },
    ],
  },
  {
    path: "sign-up",
    element: <Signup />,
  },
  {
    path: "login",
    element: <Login></Login>,
  },
  {
    path: "logout",
    element: <Logout></Logout>,
  },
]);

export default router;
