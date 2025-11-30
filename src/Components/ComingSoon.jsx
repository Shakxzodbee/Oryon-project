import React, { useState } from "react";
import "../assets/css/ComingSoon.css";

const ComingSoon = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <div className="coming-soon-container" id="buy-section">
      <div className="coming-soon-content">
        <h1 className="logo">🚀 MyCompany</h1>
        <h2 className="title">Coming Soon</h2>
        <p className="subtitle">
          We are working hard to launch something amazing. Stay tuned!
        </p>

        {!submitted ? (
          <form className="notify-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Notify Me</button>
          </form>
        ) : (
          <p className="thanks-message">Thank you! We'll notify you soon.</p>
        )}
      </div>
    </div>
  );
};

export default ComingSoon;
