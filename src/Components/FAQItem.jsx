import React, { useRef, useEffect, useState } from "react";
import "../assets/css/faqitem.css";

export default function FAQItem({ title, text, isOpen, onToggle }) {
  const contentRef = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
  }, [isOpen]);

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={onToggle}>
        <h3>{title}</h3>
        <button className="toggle-btn">{isOpen ? "×" : "+"}</button>
      </div>
      <div
        ref={contentRef}
        className="accordion-content"
        style={{ maxHeight: height }}
      >
        <p>{text}</p>
      </div>
    </div>
  );
}
