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
  const [medicines, setMedicines] = useState(initMedicines());
  function initMedicines() {
    return [
      {
        name: "Sizopin",
        quantity: 50,
        time: "Morning (8am)",
      },
      {
        name: "Paracetamol",
        quantity: 200,
        time: "Afternoon (12pm)",
      },
      {
        name: "Aripiprazole",
        quantity: 150,
        time: "Evening (4pm)",
      },
      {
        name: "Pacitane",
        quantity: 200,
        time: "Night (8pm)",
      },
    ];
  }

  function updateMedicines(newMedicines) {
    const oldMedicines = medicines;
    setMedicines(newMedicines);

    // also synchronize medicine data with the server,
    // and if the synchronization fails, revert medicines to oldMedicines
  }

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        medicines,
        updateMedicines,
      }}
    >
      <RouterProvider router={router} />
    </AppContext.Provider>
  );
}
