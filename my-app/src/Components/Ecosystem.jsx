import React from "react";
import "../assets/css/ecosystem.css";
import xStocksLogo from "../assets/img/xStocks.png";
import chainlinkLogo from "../assets/img/chainlink.png";
import ondoLogo from "../assets/img/ondo.png";
import cowSwapLogo from "../assets/img/cowSwap.png";
import baseLogo from "../assets/img/base.png";
import layerZeroLogo from "../assets/img/layerZero.png";
import privyLogo from "../assets/img/privy.png";
import aerodromeLogo from "../assets/img/aerodrome.png";

export default function Ecosystem() {
  const logos = [
    xStocksLogo, chainlinkLogo, ondoLogo,
    cowSwapLogo, baseLogo, layerZeroLogo,
    privyLogo, aerodromeLogo
  ];

  return (
    <section className="eco-wrapper">
      <h2>Company Ecosystem</h2>
      <p className="eco-subtitle">
        Lorem ipsum faucibus integer volutpat ut purus platea sed lectus ipsum consectetur nam enim semper enim malesuada maecenas congue pharetra sit feugiat quam in vitae.
      </p>

      <div className="eco-grid">
        {logos.map((logo, i) => (
          <div className="eco-item" key={i}>
            <img src={logo} alt={`logo-${i}`} />
          </div>
        ))}
      </div>
    </section>
  );
}
