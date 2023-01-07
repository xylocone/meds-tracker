import { useContext } from "react";

// Icons
import { AiOutlinePlus } from "react-icons/ai";

// Internal dependencies
import Header from "./components/Header";

import AppContext from "./AppContext";

// Icons
import { CiPill } from "react-icons/ci";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";

import "./ManageMedicines.scss";
import Button from "./components/Button";
import { useNavigate } from "react-router-dom";

export default function ManageMedicines() {
  const navigate = useNavigate();

  const { medicines, updateMedicines } = useContext(AppContext);

  function removeMedicineWithIndex(index) {
    updateMedicines([
      ...medicines.slice(0, index),
      ...medicines.slice(index + 1),
    ]);
  }

  function handleAddClick() {
    navigate("/add");
  }

  return (
    <div className="manage-meds">
      <Header heading="Manage" />
      <div className="meds-wrapper">
        {medicines.map(({ name, quantity, time }, index) => (
          <Medicine
            key={index}
            name={name}
            quantity={quantity}
            time={time}
            onRemove={() => removeMedicineWithIndex(index)}
          />
        ))}
        <Button onClick={() => handleAddClick()}>
          <AiOutlinePlus />
          Add
        </Button>
      </div>
    </div>
  );
}

function Medicine({ name, quantity, time, onRemove, onEdit }) {
  return (
    <div className="meds-medicine">
      <p className="meds-medicine__title">
        <span>{name}</span>
        <FaTimes onClick={() => onRemove()} />
      </p>
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
