import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import "./Offers.scss";

const offersData = [
  {
    title: "Move the borders of reality!",
    description: "Go on a space adventure - it's possible with us!",
    mobileDescription: "Go on a space adventure",
  },
  {
    title: "Space is not just stars and planets",
    description: "Go on a space adventure",
    mobileDescription: "it is a majestic journey to ",
  },
  {
    title: "For those who dream of stars",
    description: "Our offer: make your dream come true",
    mobileDescription: "Our offer: make your dream come true",
  },
  {
    title: "Fulfill your fantastic dreams",
    description: "Space has never been so close",
    mobileDescription: "Space has never been so close",
  },
];

function Offers() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1247);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1247);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="offers">
      <h2 className="offers__title">Offers</h2>
      <div className="offers__list">
        {offersData.map((offer, index) => (
          <Card
            key={index}
            title={offer.title}
            description={isMobile ? offer.mobileDescription : offer.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Offers;
