import React from "react";
import Accordion from "./Accordion";
import "../assets/css/faq.css";

export default function FAQ() {
  const faqs = [
    {
      q: "Frequently Asked Question",
      a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus neque modi illum."
    },
    {
      q: "Frequently Asked Question",
      a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus neque modi illum."
    },
    {
      q: "Frequently Asked Question",
      a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus neque modi illum."
    },
    {
      q: "Frequently Asked Question",
      a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus neque modi illum."
    }
  ];

  return (
    <section className="faq-wrapper">
      <h2>Frequently Asked Question</h2>
      <p className="faq-subtitle">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus neque provident.
      </p>

      <div className="faq-list">
        {faqs.map((f, i) => (
          <Accordion key={i} title={f.q} text={f.a} />
        ))}
      </div>
    </section>
  );
}
