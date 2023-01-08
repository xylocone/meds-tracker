import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

// Internal dependencies
import Header from "./components/Header";
import Button from "./components/Button";
import Input from "./components/Input";
import SelectInput from "./components/SelectInput";

import AppContext from "./AppContext";

import "./AddMedicine.scss";

export default function AddMedicine() {
  const navigate = useNavigate();

  const { medicines, updateMedicines } = useContext(AppContext);

  const [name, setName] = useState();
  const [quantity, setQuantity] = useState();
  const [time, setTime] = useState();

  const options = [
    {
      value: "morning",
      label: "Morning (8am)",
    },
    {
      value: "afternoon",
      label: "Afternoon (12 noon)",
    },
    {
      value: "evening",
      label: "Evening (4pm)",
    },
    {
      value: "Night",
      label: "Night (8pm)",
    },
  ];

  function handleAdd() {
    updateMedicines([
      ...medicines,
      {
        name,
        quantity,
        time,
      },
    ]);

    navigate("/");
  }

  return (
    <div className="add-medicine">
      <Header heading="Add Medicine" className="add-medicine__header" />
      <div className="add-medicine__inputs-wrapper">
        <Input
          type="text"
          label="Name"
          className="add-medicine__name"
          onInput={(val) => setName(val)}
        />
        <Input
          type="number"
          label="Quantity"
          className="add-medicine__quantity"
          onInput={(val) => setQuantity(val)}
        />
        <SelectInput
          options={options}
          className="add-medicine__time"
          onChange={(_, label) => setTime(label)}
        />
      </div>
      <Button className="add-medicine__add-button" onClick={() => handleAdd()}>
        Add
      </Button>
    </div>
  );
}
