import React from "react";
import "../assets/css/waitlist.css";
import CoinLeft from "../assets/img/coin.png";
import CoinRight from "../assets/img/coin.png";

export default function Waitlist() {
  return (
    <section className="waitlist-wrapper">

      {/* coin images */}
      <img src={CoinLeft} className="coin coin-left" alt="token" />
      <img src={CoinRight} className="coin coin-right" alt="token" />

      <div className="waitlist-box">
        <h1>
          Don’t miss out, join the waitlist <br /> and get early access to Oryon.
        </h1>

        <div className="form-box">
          <input type="text" placeholder="Type your Name" defaultValue="John Doe" />
          <input type="email" placeholder="Type your email" />

          <button className="subscribe-btn">Subscribe</button>

          <div className="avatars-text">
            <div className="avatars">
              <img src="https://i.pravatar.cc/40?img=11" alt="" />
              <img src="https://i.pravatar.cc/40?img=22" alt="" />
              <img src="https://i.pravatar.cc/40?img=33" alt="" />
            </div>
            <span>Join with 150,000+ others that have signed up</span>
          </div>
        </div>
      </div>
    </section>
  );
}
