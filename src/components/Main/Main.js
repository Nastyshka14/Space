import React from "react";
import Button from "../Button/Button";
import earthImage from "../../assets/images/earth.png";
import "./Main.scss";

function Main() {
  return (
    <section className="main">
      <div className="main__text">
        <h1 className="main__title">
          Discover the vast expanses of <span className="highlight">space</span>
        </h1>
        <p className="main__description">
          Where the possibilities are{" "}
          <span className="highlight">endless!</span>
        </p>
        <Button label="Learn more" filled={true} />
      </div>
      <div className="main__image">
        <img
          className="main__image-img"
          src={earthImage}
          alt="Earth and rocket"
        />
      </div>
    </section>
  );
}

export default Main;
