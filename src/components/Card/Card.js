import React from "react";
import Button from "../Button/Button";
import "./Card.scss";

function Card({ title, description }) {
  return (
    <div className="card">
      <h3 className="card__title">{title}</h3>
      <p className="card__description">{description}</p>
      <Button label="Learn more" />
    </div>
  );
}

export default Card;
