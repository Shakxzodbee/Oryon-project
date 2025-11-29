import React, { useState } from "react";
import "../assets/css/accordion.css";

export default function Accordion({ title, text }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="acc-item">
      <button className="acc-header" onClick={() => setOpen(!open)}>
        {title}
        <span className="acc-icon">{open ? "-" : "+"}</span>
      </button>

      {open && <p className="acc-body">{text}</p>}
    </div>
  );
}
