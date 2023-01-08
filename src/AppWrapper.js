import { useEffect, useState } from "react";
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
  const [user, setUser] = useState({
    username: "",
    pwd: "",
    name: "",
  });
  const [medicines, setMedicines] = useState([]);

  // useEffect(() => {
  //   (async () => {
  //     setUser(await initUser());
  //     setUser(await initMedicines());
  //   })();
  // }, []);

  async function initUser() {
    const username = localStorage.getItem("meds-username");
    const pwd = localStorage.getItem("meds-pwd");

    const payload = {
      username,
      pwd,
    };

    const response = await fetch("/login", {
      method: "POST",
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      return;
    }

    const json = await response.json();

    localStorage.setItem("meds-name", json.name);
    localStorage.setItem("meds-username", json.username);
    localStorage.setItem("meds-pwd", json.pwd);

    return {
      name: json.name,
      username: json.username,
      pwd: json.pwd,
    };
  }

  async function updateUser(username, pwd) {
    const payload = {
      username,
      pwd,
    };

    const response = await fetch("/api.php/login", {
      method: "POST",
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      return;
    }

    const json = await response.json();

    localStorage.setItem("meds-name", json.name);
    localStorage.setItem("meds-username", json.username);
    localStorage.setItem("meds-pwd", json.pwd);

    setUser({
      name: json.name,
      username: json.username,
      pwd: json.pwd,
    });
  }

  async function addUser(name, username, pwd) {
    const payload = {
      name,
      username,
      pwd,
    };

    const response = await fetch("/api.php/signup", {
      method: "POST",
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      return;
    }

    const json = await response.json();

    localStorage.setItem("meds-name", json.name);
    localStorage.setItem("meds-username", json.username);
    localStorage.setItem("meds-pwd", json.pwd);

    setUser({
      name: json.name,
      username: json.username,
      pwd: json.pwd,
    });
  }

  async function initMedicines() {
    const { username, pwd } = user;

    const payload = {
      username,
      pwd,
    };

    const response = await fetch("/api.php/get-meds", {
      method: "POST",
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      return;
    }

    const json = await response.json();

    setMedicines(json);
  }

  async function updateMedicines(newMedicines) {
    // const { username, pwd } = user;

    // const payload = {
    //   username,
    //   pwd,
    //   medicines: newMedicines,
    // };

    // const response = await fetch("/api.php/update-meds", {
    //   method: "POST",
    //   body: JSON.stringify(payload),
    // });

    // if (!response.ok) {
    //   return;
    // }

    // const json = await response.json();

    setMedicines(newMedicines);
  }

  return (
    <AppContext.Provider
      value={{
        user,
        updateUser,
        addUser,
        medicines,
        updateMedicines,
      }}
    >
      <RouterProvider router={router} />
    </AppContext.Provider>
  );
}
