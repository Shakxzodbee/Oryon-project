import React, { useState, useEffect } from "react";
import "../assets/css/CardSection.css";

// Slider uchun rasmlar
import img1 from "../assets/img/admin-panel.png";
import img2 from "../assets/img/admin-panel2 (1).png";
import img3 from "../assets/img/admin-panel2 (2).png";
import img4 from "../assets/img/admin-panel2 (3).png";

const CardSection = () => {
  const cards = [
    { id: 1, title: "$110T", name: "GLOBAL STOCK MARKET CAP" },
    { id: 2, title: "$110T", name: "GLOBAL STOCK MARKET CAP", active: true },
    { id: 3, title: "$110T", name: "GLOBAL STOCK MARKET CAP" },
    { id: 4, title: "$110T", name: "GLOBAL STOCK MARKET CAP" },
    { id: 5, title: "$110T", name: "GLOBAL STOCK MARKET CAP" },
    { id: 6, title: "$110T", name: "GLOBAL STOCK MARKET CAP" },
  ];

  const images = [img1, img2, img3, img4];
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true); 

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % images.length); 
        setFade(false); 
      }, 500); 
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="section" id="about">
      <h2 className="main-title">
        Company is bringing the<br />
        $2.5T stock lending<br />
        market on chain
      </h2>

      <div className="cards-grid">
        {cards.map((card) => (
          <div key={card.id} className={`card ${card.active ? "active" : ""}`}>
            <div className="card-title">{card.title}</div>
            <div className="card-name">{card.name}</div>
            <div className="card-subtitle">
              The world's most <br /> popular asset class
            </div>
          </div>
        ))}
      </div>

      <h3 className="section-title">Trading on Stocks(?) Market</h3>
      <p className="section-subtitle">
        Lorem ipsum sit sed eros orci in pellentesque <br /> id amet porta
        lobortis turpis cras consectetur.
      </p>

      <div className="slider-wrapper">
        <img
          src={images[index]}
          alt="Stock market dashboard"
          className={`slider-image ${fade ? "fade" : ""}`}
        />
      </div>

      <div className="button-wrapper">
        <button className="btn primary-btn">Buy Stock with Company</button>
      </div>
    </div>
  );
};

export default CardSection;
