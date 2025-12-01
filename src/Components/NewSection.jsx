import React from "react";
import "../assets/css/NewSection.css";
import { membersData } from "../data/membersData";

export default function NewSection() {
  return (
    <section className="new-section">
      <h1 className="new-section-header">Tokenization Is Becoming the New Standard</h1>
      <p className="new-section-text">
        Lorem ipsum mauris ullamcorper neque eu semper commodo vitae faucibus nec
        eu elementum sapien magna volutpat nullam ut iaculis commodo id euismod.
      </p>

      <div className="new-cards-container">
        {membersData.map((member, idx) => (
          <div className="new-card" key={idx}>
            <img src={member.img} alt={member.name} className="new-card-img" />
            <div className="new-card-content">
              <h3>{member.name}</h3>
              <span className="new-card-role">{member.role}</span>
              <p>{member.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
