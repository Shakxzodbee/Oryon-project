import React from "react";
import "../assets/css/footer.css";
import Logo from "../assets/img/OryonFooter.png";
import tg from "../assets/img/tg.png";
import x from "../assets/img/x.png";
import discord from "../assets/img/discord.png";

export default function Footer() {

  // Scroll to section function
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -80; // Navbar offset
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <footer className="footer">

      <div className="footer-top">

        {/* LOGO */}
        <div className="footer-left">
          <img style={{width: "200px" , height: "40px"}} src={Logo} alt="Oryon" />
        </div>

        {/* NAVIGATION */}
        <nav className="footer-links">
          <span onClick={() => scrollToSection("about")}>About</span>
          <span onClick={() => scrollToSection("how")}>How it Works</span>
          <span onClick={() => scrollToSection("waitlist")}>Waitlist</span>
          <a href="/docs">Docs</a> {/* Bu tashqi sahifa bo‘lsa link bilan qoldiramiz */}
        </nav>

        {/* SOCIAL BUTTONS */}
        <div className="footer-socials">
          <a href="https://t.me/shaolacoin" target="_blank" className="icon">
            <img src={tg} alt="Telegram" style={{width: "32px", height: "32px"}} />
          </a>

          <a href="https://x.com/yourprofile" target="_blank" className="icon">
            <img src={x} alt="X" style={{width: "32px", height: "32px"}} />
          </a>

          <a href="https://discord.gg/yourserver" target="_blank" className="icon">
            <img src={discord} alt="Discord" style={{width: "32px", height: "32px"}} />
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        © Oryon Finance 2026. All Rights Reserved.
      </div>

    </footer>
  );
}
