import React from "react";
import "../assets/css/ecosystem.css";

export default function Ecosystem() {
  const logos = [
    "xStocks", "Chainlink", "Ondo",
    "CoW Swap", "Base", "LayerZero",
    "Privy", "Aerodrome"
  ];

  return (
    <section className="eco-wrapper">
      <h2>Company Ecosystem</h2>
      <p className="eco-subtitle">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequatur ratione magni.
      </p>

      <div className="eco-grid">
        {logos.map((name, i) => (
          <div className="eco-item" key={i}>
            {name}
          </div>
        ))}
      </div>
    </section>
  );
}
