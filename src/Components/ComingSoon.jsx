import React from "react";
import '../assets/css/ComingSoon.css'
export default function ComingSoon() {
  return (
    <div className="page-container">
      <div className="div-wrap">

        <div className="lines" aria-hidden />

        <div className="card" role="region" aria-label="Launching soon sign up">
          <div className="logo" aria-hidden>◎</div>
          <div className="launching">Launching Soon!</div>
          <div className="title">Eon</div>
          <div className="subtitle">Your Personal Financial Intelligence Platform</div>

          <form onSubmit={(e) => { e.preventDefault(); const email = e.target.email.value; alert("Thanks! " + email + " added to the waitlist."); e.target.reset(); }}>
            <input className="input" name="email" type="email" placeholder="Input email address" required />
            <button className="btn" type="submit">Join the Waitlist</button>
          </form>
        </div>
      </div>
    </div>
  );
}
