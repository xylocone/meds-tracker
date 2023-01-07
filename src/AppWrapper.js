import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Internal dependencies
import App from "./App";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import AddMedicine from "./AddMedicine";
import ManageMedicines from "./ManageMedicines";

import AppContext from "./AppContext";

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

export default function AppWrapper() {
  const [user, setUser] = useState({});
  const [medicines, setMedicines] = useState([
    {
      name: "Sizopin",
      quantity: 200,
      time: "Morning (8pm)",
    },
  ]);

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        medicines,
        setMedicines,
      }}
    >
      <RouterProvider router={router} />
    </AppContext.Provider>
  );
}
