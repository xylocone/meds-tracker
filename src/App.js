import { useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

// Icons
import { CiPill } from "react-icons/ci";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsFillGearFill } from "react-icons/bs";

// Internal dependencies
import Button from "./components/Button";
import "./App.scss";

import AppContext from "./AppContext";

export default function App() {
  const { user, medicines } = useContext(AppContext);

  const navigate = useNavigate();

  // useEffect(() => {
  //   if (
  //     !localStorage.getItem("meds-username") ||
  //     !localStorage.getItem("meds-pwd")
  //   ) {
  //     navigate("/login");
  //   }
  // }, []);

  return (
    <div className="app">
      <Jumbotron name={user.name} />
      <div className="meds-wrapper">
        {medicines.map(({ name, quantity, time }, index) => (
          <Medicine key={index} name={name} quantity={quantity} time={time} />
        ))}
      </div>
    </div>
  );
}

function Jumbotron({ name }) {
  return (
    <div className="meds-jumbotron">
      <h1 className="meds-jumbotron__heading">
        Hi <br />
        {name}
      </h1>
      <Link to={"/manage"}>
        <Button className="meds-jumbotron__button">
          <BsFillGearFill />
          Manage
        </Button>
      </Link>
    </div>
  );
}

function Medicine({ name, quantity, time }) {
  return (
    <div className="meds-medicine">
      <p className="meds-medicine__title">{name}</p>
      <div className="meds-medicine__details">
        <span className="meds-medicine__quantity">
          <CiPill />
          {quantity}mg
        </span>
        <span className="meds-medicine__time">
          <AiOutlineClockCircle />
          {time}
        </span>
      </div>
    </div>
  );
}
