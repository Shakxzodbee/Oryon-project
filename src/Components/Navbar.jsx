import React from "react";
import "../assets/css/Navbar.css";
import "../assets/css/herocard.css";
import Logo from "../assets/img/logo.png";
import vectorbtn from "../assets/img/vector-btn.png";

export default function Navbar() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -80;
      const y =
        section.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handleBuy = () =>
    window.open("https://example.com/buy-oryon", "_blank");

  const handleBannerClick = () => {
  window.location.href = "/referral";
};
  return (
    <div className="high-div">
      <header className="header-container">
        <div className="top-banner" onClick={handleBannerClick}>
          LAUNCHING SOON! UP TO 10% REFERRAL BONUS
        </div>

        <nav className="navbar">
          <div className="nav-left">
            <img
              style={{ width: "134px", height: "41px" }}
              src={Logo}
              alt="Oryon Logo"
              className="logo"
            />
          </div>

          <ul className="nav-links">
            <li onClick={() => scrollToSection("about")}>About</li>
            <li onClick={() => scrollToSection("how")}>How it Works</li>
            <li onClick={() => scrollToSection("waitlist")}>Waitlist</li>
          </ul>

          <div className="nav-right">
            <button className="btn-outline" onClick={handleBuy}>
              Request Demo
            </button>
            <button
              className="btn-primary"
              onClick={() => scrollToSection("waitlist")}
            >
              Join the Waitlist
            </button>
          </div>
        </nav>
      </header>

      <section className="hero-wrapper">
        <div className="hero-content">
          <div className="hero-tags">
            <span className="tag">LAUNCHING SOON</span>
            <span className="tag">GET UP 10% BONUS</span>
          </div>

          <h1 className="hero-title">
            Redefining how
            <br />
            stocks work for you
          </h1>
          <p className="hero-sub">Transforming stock markets into yield engines.</p>

          <div className="hero-buttons">
            <button
              style={{ background: "#FFFFFF", color: "#1A1B1F", borderRadius: "16px" }}
              className="primary-btn"
              onClick={() => scrollToSection("waitlist")}
            >
              Join the Waitlist
            </button>

            <button
              style={{ borderRadius: "16px" }}
              className="secondary-btn"
              onClick={() => scrollToSection("video")}
            >
              Watch the Story
              <img className="vector-btn" src={vectorbtn} alt="" />
            </button>
          </div>

          <p className="scroll-text">SCROLL TO EXPLORE</p>
        </div>
      </section>
    </div>
  );
}
