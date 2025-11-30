import React, { useState, useRef } from "react";
import "../assets/css/VideoShowcase.css";
import video1 from "../assets/img/6B4EACEC79664549E10A09A25D1C1293_video_dashinit.mp4";
import video2 from "../assets/img/119440007_353798163817880_5466949638241546424_n.mp4";
const VideoShowcase = () => {
  const [videos, setVideos] = useState([
    {
      id: 1,
      src: video1,
      title: "What Happens When You Choose Edel",
      line1: "One decision. One app.",
      line2: "A completely new outcome"
    },
    {
      id: 2,
      src: video2,
      title: "What Happens When You Choose Edel",
      line1: "One decision. One app.",
      line2: "A completely new outcome"
    },
    {
      id: 3,
      src: video1,
      title: "What Happens When You Choose Edel",
      line1: "One decision. One app.",
      line2: "A completely new outcome"
    },
    {
      id: 4,
      src: video2,
      title: "What Happens When You Choose Edel",
      line1: "One decision. One app.",
      line2: "A completely new outcome"
    },
  ]);

  const [mainVideo, setMainVideo] = useState({
    src: video1,
    title: "What Happens When You Choose Edel",
    line1: "One decision. One app.",
    line2: "A completely new outcome"
  });

  const [isMainPlaying, setIsMainPlaying] = useState(false);

  const mainVideoRef = useRef(null);
  const sideVideoRefs = useRef([]);

  // SWAP + PLAY FROM BEGINNING
  const handleSwap = (index) => {
    const clicked = videos[index];
    const newList = [...videos];
    newList[index] = mainVideo;
    setVideos(newList);
    setMainVideo(clicked);
    setIsMainPlaying(false);

    setTimeout(() => {
      if (mainVideoRef.current) {
        mainVideoRef.current.pause();
        mainVideoRef.current.currentTime = 0;
      }
    }, 50);
  };

  // When main video plays → pause all side videos
  const handleMainPlay = () => {
    setIsMainPlaying(true);
    sideVideoRefs.current.forEach((v) => {
      if (v) v.pause();
    });
  };

  // Smooth scroll funksiyasi
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="section">
      <h1 className="title">What is Company</h1>
      <p className="subtitle">
        Lorem ipsum sit sed eros orci in pellentesque id amet porta lobortis turpis
        cras consectetur.
      </p>

      <div className="container" id="video">
        {/* MAIN VIDEO */}
        <div className="main-video">
          <video
            ref={mainVideoRef}
            src={mainVideo.src}
            className="main-video-player"
            controls={isMainPlaying}
            onClick={() => {
              if (!isMainPlaying && mainVideoRef.current) {
                mainVideoRef.current.play();
              }
            }}
            onPlay={handleMainPlay}
          />
          {!isMainPlaying && (
            <div
              className="main-play-overlay"
              onClick={() => {
                if (mainVideoRef.current) mainVideoRef.current.play();
              }}
            >
              ▶
            </div>
          )}
        </div>

        {/* SIDE VIDEOS */}
        <div className="side-cards">
          {videos.map((v, i) => (
            <div className="side-card" key={v.id}>
              <div className="thumb-wrapper" onClick={() => handleSwap(i)}>
                <video
                  ref={(el) => (sideVideoRefs.current[i] = el)}
                  src={v.src}
                  className="thumb"
                />
                <div className="play-btn-small">▶</div>
              </div>
              <div className="side-text">
                <p className="side-title">{v.title}</p>
                <p className="side-bold">{v.line1}</p>
                <p className="side-bold">{v.line2}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BUTTONS */}
      <div className="actions">
        <button
          className="btn dark"
          onClick={() => scrollToSection("waitlist")}
        >
          Join the Waitlist
        </button>
        <button
          className="btn light"
          onClick={() => scrollToSection("buy-section")}
        >
          Buy the $TOKEN
        </button>
      </div>
    </div>
  );
};

export default VideoShowcase;
