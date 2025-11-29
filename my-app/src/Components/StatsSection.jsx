import React from "react";
import "../assets/css/statssection.css";
import stats1 from "../assets/img/stats2.png";
import stats2 from "../assets/img/stats1.png";
const StatsSection = () => {
  return (
    <div className="stats-wrapper">
      <h1 className="stats-title">We Are a Best Trading Provider</h1>
      <p className="stats-subtitle">
        Lorem ipsum mauris ullamcorper neque eu semper commodo vitae faucibus nec
        eu elementum sapien magna volutpat nullam ut iaculis commodo id euismod
      </p>

      <div className="stats-cards">
        {/* CARD 1 */}
        <div className="stats-card">
          <div className="card-icon left-icon">
            <img src={stats1} alt="" />
          </div>
          <h2>&gt;10M Users</h2>
          <span className="card-small">FROM 2022 YEAR</span>

          <p>
            Lorem ipsum ut lacus vitae nulla lectus nec tempus quisque tincidunt
            elit habitant morbi laoreet praesent scelerisque montes consequat
            ullamcorper semper diam dictum vitae enim nisi magna habitant velit
            elementum urna et ut et magna.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="stats-card">
          <h2>5025 Pairs</h2>
          <span className="card-small">ON OUR PLATFORM</span>

          <p>
            Lorem ipsum ut lacus vitae nulla lectus nec tempus quisque tincidunt
            elit habitant morbi laoreet praesent scelerisque montes consequat
            ullamcorper.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="stats-card">
          <div className="card-icon right-icon">
            <img style={{top:"20px" , left: "20px"}} src={stats2} alt="" />
          </div>
          <h2>105266 Random</h2>
          <span className="card-small">RANDOM INFO FOR STATISTIC</span>

          <p>
            Lorem ipsum ut lacus vitae nulla lectus nec tempus quisque tincidunt
            elit habitant morbi laoreet praesent scelerisque montes consequat
            ullamcorper enim nisi magna habitant velit elementum urna et ut et
            magna.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
