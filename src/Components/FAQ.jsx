import React, { useState } from "react";
import FAQItem from "./FAQItem";
import "../assets/css/faq.css";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { q: "Frequently Asked Question", a: "Lorem ipsum nullam aliquet ultrices fermentum aliquet amet pellentesque velit eros feugiat proin tempor id mattis odio magna rhoncus donec ultrices nunc diam dui ut purus ac nibh donec aliquam elementum malesuada diam tellus mi urna nulla montes gravida semper viverra risus risus in lectus donec feugiat pretium ut enim ultrices netus lobortis duis fusce." },
    { q: "Frequently Asked Question", a: "Lorem ipsum nullam aliquet ultrices fermentum aliquet amet pellentesque velit eros feugiat proin tempor id mattis odio magna rhoncus donec ultrices nunc diam dui ut purus ac nibh donec aliquam elementum malesuada diam tellus mi urna nulla montes gravida semper viverra risus risus in lectus donec feugiat pretium ut enim ultrices netus lobortis duis fusce." },
    { q: "Frequently Asked Question", a: "Lorem ipsum nullam aliquet ultrices fermentum aliquet amet pellentesque velit eros feugiat proin tempor id mattis odio magna rhoncus donec ultrices nunc diam dui ut purus ac nibh donec aliquam elementum malesuada diam tellus mi urna nulla montes gravida semper viverra risus risus in lectus donec feugiat pretium ut enim ultrices netus lobortis duis fusce." },
    { q: "Frequently Asked Question", a: "Lorem ipsum nullam aliquet ultrices fermentum aliquet amet pellentesque velit eros feugiat proin tempor id mattis odio magna rhoncus donec ultrices nunc diam dui ut purus ac nibh donec aliquam elementum malesuada diam tellus mi urna nulla montes gravida semper viverra risus risus in lectus donec feugiat pretium ut enim ultrices netus lobortis duis fusce." },
    { q: "Frequently Asked Question", a: "Lorem ipsum nullam aliquet ultrices fermentum aliquet amet pellentesque velit eros feugiat proin tempor id mattis odio magna rhoncus donec ultrices nunc diam dui ut purus ac nibh donec aliquam elementum malesuada diam tellus mi urna nulla montes gravida semper viverra risus risus in lectus donec feugiat pretium ut enim ultrices netus lobortis duis fusce." },
    { q: "Frequently Asked Question", a: "Lorem ipsum nullam aliquet ultrices fermentum aliquet amet pellentesque velit eros feugiat proin tempor id mattis odio magna rhoncus donec ultrices nunc diam dui ut purus ac nibh donec aliquam elementum malesuada diam tellus mi urna nulla montes gravida semper viverra risus risus in lectus donec feugiat pretium ut enim ultrices netus lobortis duis fusce." },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-wrapper">
      <h2>Frequently Asked Questions</h2>
      <p className="faq-subtitle">
        Lorem ipsum faucibus integer volutpat ut purus platea sed lectus ipsum consectetur nam enim semper enim malesuada maecenas congue pharetra sit feugiat quam in vitae.
      </p>
      <div className="faq-list">
        {faqs.map((f, i) => (
          <FAQItem
            key={i}
            title={f.q}
            text={f.a}
            isOpen={openIndex === i}
            onToggle={() => handleToggle(i)}
          />
        ))}
      </div>
    </section>
  );
}
