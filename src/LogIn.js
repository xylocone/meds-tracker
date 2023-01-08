import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

// Internal dependencies
import Header from "./components/Header";
import Input from "./components/Input";
import Button from "./components/Button";

import AppContext from "./AppContext";

import "./LogIn.scss";

export default function SignUp() {
  const navigate = useNavigate();

  const { updateUser } = useContext(AppContext);

  const [username, setUsername] = useState();
  const [pwd, setPwd] = useState();

  async function handleSubmit() {
    await updateUser({
      username,
      pwd,
    });

    navigate("/");
  }

  function redirectToSignUp() {
    navigate("/signup");
  }

  return (
    <div className="meds-login">
      <Header heading="Log In" className="meds-login__header" />
      <div className="meds-login__inputs-wrapper">
        <Input
          label="Username"
          onInput={(e) => setUsername(e.currentTarget.value)}
        />
        <Input label="Password" onInput={(e) => setPwd(e.currentTarget)} />
        <div className="meds-login__buttons-wrapper">
          <Button
            className="meds-login__login-button"
            onClick={() => handleSubmit()}
          >
            Log In
          </Button>
          <Button
            className="meds-login__signup-button"
            onClick={() => redirectToSignUp()}
          >
            Sign Up, instead
          </Button>
        </div>
      </div>
    </div>
  );
}
