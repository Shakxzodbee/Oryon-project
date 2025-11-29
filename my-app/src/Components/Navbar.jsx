import React from "react";
import "../assets/css/Navbar.css";
import "../assets/css/herocard.css";
import Logo from "../assets/img/logo.png";
export default function Navbar() {

  // SCROLL FUNCTION
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // BUY ORYON BUTTON
  const handleBuy = () => {
    window.open("https://example.com/buy-oryon", "_blank");
  };

  // JOIN WAITLIST BUTTON
  const handleJoinWaitlist = () => {
    window.location.href = "/waitlist";
  };

  // TOP BANNER CLICK
  const handleBannerClick = () => {
    window.location.href = "/referral-bonus"; // o‘zingiz xohlagan link
  };

  return (
    <div className="high-div">
      <header className="header-container">

        {/* CLICKABLE TOP BANNER */}
        <div className="top-banner" onClick={handleBannerClick}>
          LAUNCHING SOON! UP TO 10% REFERRAL BONUS
        </div>

        <nav className="navbar">
          <div className="nav-left">
            <img style={{ width: "134px", height: "41px" }} src={Logo} alt="Oryon Logo" className="logo" />
          </div>

          <ul className="nav-links">
            <li onClick={() => scrollToSection("about")}>About</li>
            <li onClick={() => scrollToSection("how")}>How it Works</li>
            <li onClick={() => scrollToSection("waitlist")}>Waitlist</li>
          </ul>

          <div className="nav-right">
            <button className="btn-outline" onClick={handleBuy}>Buy $ORYON</button>
            <button className="btn-primary" onClick={handleJoinWaitlist}>Join the Waitlist</button>
          </div>
        </nav>
      </header>
      <section className="hero-wrapper">
        <div className="hero-content">
          <div className="hero-tags">
            <span className="tag">LAUNCHING SOON</span>
            <span className="tag">GET UP 10% BONUS</span>
          </div>

          <h1 className="hero-title">Redefining how<br />stocks work for you</h1>
          <p className="hero-sub">Transforming stock markets into yield engines.</p>

          <div className="hero-buttons">
            <button className="primary-btn">Join the Waitlist</button>
            <button className="secondary-btn">Watch the Story ➜</button>
          </div>

          <p className="scroll-text">SCROLL TO EXPLORE</p>
        </div>
      </section>
    </div>
  );
}
