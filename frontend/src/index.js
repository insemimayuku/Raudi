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
import Vehicule from "./pages/vehicule";
import Dashboard from "./pages/dashboard";
import NotFound from "./pages/notfound";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import AuthProvider from "./Provider/Authprovider.js";

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
  {
    path: "/vehicule/:id",
    element: (
      <>
        <Header />
        <Vehicule />
      </>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <>
        <Header />
        <Dashboard />
      </>
    ),
  },
  {
    path: "*",
    element: (
      <>
        <Header />
        <NotFound />
      </>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </RouterProvider>
);
