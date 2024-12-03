import React from "react";
import rocketImage from "../../assets/images/rocket.png";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__image">
        <img src={rocketImage} alt="Earth and rocket" width={78} height={52} />
      </div>
      <p className="footer__text">Exciting space adventure!</p>
    </footer>
  );
}

export default Footer;
