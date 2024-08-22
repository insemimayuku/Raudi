import * as React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./pages/home";
import Header from "./components/Header";
import Boutique from "./pages/boutique";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

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
    element: <Boutique />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
