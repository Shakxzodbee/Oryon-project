import React, { useState } from "react";
import "../assets/css/waitlist.css";
import CoinLeft from "../assets/img/coin logo rr 2.png";
import CoinRight from "../assets/img/coin logo rr 1.png";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Waitlist() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const BOT_TOKEN = "8434000604:AAG0LHndUYnf4EGhlKJRLQ0P724hdvcG18U";
  const CHAT_ID = "5802832457"; 

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email) {
      toast.error("Пожалуйста, заполните все поля!");
      return;
    }

    const message = `
📝 New Waitlist Signup
👤 Name:   ${name}
📧 Email:  ${email}
    `;

    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURIComponent(message)}`;

    try {
      const res = await fetch(url);

      if (res.ok) {
        toast.success("Ваша информация успешно отправлена!");
        setName("");
        setEmail("");
      } else {
        toast.error("Произошла ошибка, попробуйте еще раз.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Произошла ошибка, попробуйте еще раз.");
    }
  };

  return (
    <section className="waitlist-wrapper" id="waitlist">
      <img src={CoinLeft} className="coin coin-left" alt="token" />
      <img src={CoinRight} className="coin coin-right" alt="token" />

      <div className="waitlist-box">
        <h1>
          Don’t miss out, join the waitlist <br /> and get early access to Oryon.
        </h1>

        <form className="form-box" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder=" "
            />
            <label>Type your Name</label>
          </div>

          <div className="input-wrapper">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder=" "
            />
            <label>Type your Email</label>
          </div>

          <button className="subscribe-btn" type="submit">
            Subscribe
          </button>

          <div className="avatars-text">
            <div className="avatars">
              <img src="https://i.pravatar.cc/40?img=11" alt="" />
              <img src="https://i.pravatar.cc/40?img=22" alt="" />
              <img src="https://i.pravatar.cc/40?img=33" alt="" />
            </div>
            <span style={{fontSize: "14px" , lineHeight: "16px" , color: "rgba(26, 27, 31, 0.4)" , fontWeight: "500" , marginBottom: "10px" , marginLeft: "6px"}}>Join with 150,000+ others that have signed up</span>
          </div>
        </form>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </section>
  );
}
