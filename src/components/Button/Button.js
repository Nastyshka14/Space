import React from "react";
import "./Button.scss";

function Button({ label, filled = false }) {
  return (
    <button className={`button ${filled ? "filled" : ""}`}>{label}</button>
  );
}

export default Button;
