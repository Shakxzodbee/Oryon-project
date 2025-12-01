import React from "react";
import "../assets/css/CoomingSoonButton.css";

const ComingSoonButton = ({ text = "Coming Soon" }) => {
  return (
    <button className="coming-soon-btn">
      {text}
      <span className="dots"></span>
    </button>
  );
};

export default ComingSoonButton;
