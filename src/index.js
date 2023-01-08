import React from "react";
import ReactDOM from "react-dom/client";

// Internal dependencies
import AppWrapper from "./AppWrapper";
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);
