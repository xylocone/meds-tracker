import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Internal dependencies
import App from "./App";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import AddMedicine from "./AddMedicine";
import ManageMedicines from "./ManageMedicines";

import "./index.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <LogIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/manage",
    element: <ManageMedicines />,
  },
  {
    path: "/add",
    element: <AddMedicine />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
