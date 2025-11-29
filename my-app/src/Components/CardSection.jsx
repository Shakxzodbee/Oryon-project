import React from "react";
import "../assets/css/CardSection.css";
import adminDashboardImage from "../assets/img/admin-panel.png";
const CardSection = () => {
  const cards = [
    { id: 1, title: "$110T", subtitle: "GLOBAL STOCK MARKET CAP" },
    { id: 2, title: "$110T", subtitle: "GLOBAL STOCK MARKET CAP", active: true },
    { id: 3, title: "$110T", subtitle: "GLOBAL STOCK MARKET CAP" },
    { id: 4, title: "$110T", subtitle: "GLOBAL STOCK MARKET CAP" },
    { id: 5, title: "$110T", subtitle: "GLOBAL STOCK MARKET CAP" },
    { id: 6, title: "$110T", subtitle: "GLOBAL STOCK MARKET CAP" },
  ];

  return (
    <div className="section">
      <h2 className="main-title">
        Company is bringing the<br />
        $2.5T stock lending<br />
        market on chain
      </h2>

      <div className="cards-grid">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`card ${card.active ? "active" : ""}`}
          >
            <div className="card-title">{card.title}</div>
            <div className="card-subtitle">The world's most popular asset class</div>
          </div>
        ))}
      </div>

      <h3 className="section-title">
        Trading on Stocks(?) Market
      </h3>
      <p className="section-subtitle">
        Lorem ipsum sit sed eros orci in pellentesque id amet porta lobortis turpis cras consectetur.
      </p>

      <div className="image-wrapper">
        <img
          src={adminDashboardImage} // rasm faylingizni shu joyga qo'ying
          alt="Stock market dashboard"
          className="dashboard-image"
        />
      </div>

      <div className="button-wrapper">
        <button className="btn primary-btn">Buy Stock with Company</button>
      </div>
    </div>
  );
};

export default CardSection;
