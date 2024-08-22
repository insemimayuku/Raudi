import * as React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Login from "./pages/login";
import Register from "./pages/register";
import Header from "./components/Header";
import Boutique from "./pages/boutique";
import ForgotPassword from "./pages/forgot-password";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Home />
      </>
    ),
  },
  {
    path: "/boutique",
    element: (
      <>
        <Header />
        <Boutique />
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <Header />
        <Contact />
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <Header />
        <Login />
      </>
    ),
  },
  {
    path: "/register",
    element: (
      <>
        <Header />
        <Register />
      </>
    ),
  },
  {
    path: "/forgot-password",
    element: (
      <>
        <Header />
        <ForgotPassword />
      </>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
