import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

// Internal dependencies
import Header from "./components/Header";
import Input from "./components/Input";
import Button from "./components/Button";

import AppContext from "./AppContext";

import "./SignUp.scss";

export default function SignUp() {
  const navigate = useNavigate();

  const { addUser } = useContext(AppContext);

  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [pwd, setPwd] = useState();

  async function handleSubmit() {
    await addUser({
      name,
      username,
      pwd,
    });

    navigate("/");
  }

  function redirectToLogin() {
    navigate("/login");
  }

  return (
    <div className="meds-signup">
      <Header heading="Sign Up" className="meds-signup__header" />
      <div className="meds-signup__inputs-wrapper">
        <Input label="Name" onInput={(e) => setName(e.currentTarget.value)} />
        <Input
          label="Username"
          onInput={(e) => setUsername(e.currentTarget.value)}
        />
        <Input label="Password" onInput={(e) => setPwd(e.currentTarget)} />
        <div className="meds-signup__buttons-wrapper">
          <Button
            className="meds-signup__signup-button"
            onClick={() => handleSubmit()}
          >
            Sign Up
          </Button>
          <Button
            className="meds-signup__login-button"
            onClick={() => redirectToLogin()}
          >
            Log In, instead
          </Button>
        </div>
      </div>
    </div>
  );
}
