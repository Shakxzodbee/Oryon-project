import React from "react";
import "../assets/css/footer.css";
import Logo from "../assets/img/Logo.png";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">
        
        {/* LOGO */}
        <div className="footer-left">
          <img style={{width: "200px" , height: "40px"}} src={Logo} alt="Oryon" />
        </div>

        {/* NAVIGATION */}
        <nav className="footer-links">
          <a href="/about">About</a>
          <a href="/how-it-works">How it Works</a>
          <a href="/waitlist">Waitlist</a>
          <a href="/docs">Docs</a>
        </nav>

        {/* SOCIAL BUTTONS */}
        <div className="footer-socials">
          {/* Telegram */}
          <a href="https://t.me/yourchannel" target="_blank" className="icon">
            💬
          </a>

          {/* X (Twitter) */}
          <a href="https://x.com/yourprofile" target="_blank" className="icon">
            ✖
          </a>

          {/* Discord */}
          <a href="https://discord.gg/yourserver" target="_blank" className="icon">
            🎮
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        © Oryon Finance 2025. All Rights Reserved.
      </div>

    </footer>
  );
}
