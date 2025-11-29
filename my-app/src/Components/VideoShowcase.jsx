import React, { useState, useRef } from "react";
import "../assets/css/VideoShowcase.css";
import video1 from "../assets/img/6B4EACEC79664549E10A09A25D1C1293_video_dashinit.mp4";
const VideoShowcase = () => {
  const [videos, setVideos] = useState([
    {
      id: 1,
      src: video1,
      title: "1",
      line1: "One decision. One app.",
      line2: "A completely new outcome"
    },
    {
      id: 2,
      src: video1,
      title: "2",
      line1: "One decision. One app.",
      line2: "A completely new outcome"
    },
    {
      id: 3,
      src: video1,
      title: "3",
      line1: "One decision. One app.",
      line2: "A completely new outcome"
    },
    {
      id: 4,
      src: video1,
      title: "4",
      line1: "One decision. One app.",
      line2: "A completely new outcome"
    },
  ]);

  const [mainVideo, setMainVideo] = useState({
    src: video1,
    title: "5",
    line1: "One decision. One app.",
    line2: "A completely new outcome"
  });

  const mainVideoRef = useRef(null);
  const sideVideoRefs = useRef([]);

  // SWAP + PLAY FROM BEGINNING
  const handleSwap = (index) => {
    const clicked = videos[index];
    const newList = [...videos];
    newList[index] = mainVideo;
    setVideos(newList);
    setMainVideo(clicked);

    // reset main video to start and play
    setTimeout(() => {
      if (mainVideoRef.current) {
        mainVideoRef.current.pause();
        mainVideoRef.current.currentTime = 0;
        mainVideoRef.current.play();
      }
    }, 50);
  };

  // When main video plays → pause all side videos
  const handleMainPlay = () => {
    sideVideoRefs.current.forEach((v) => {
      if (v) v.pause();
    });
  };

  return (
    <div className="section">
      <h1 className="title">What is Company</h1>
      <p className="subtitle">
        Lorem ipsum sit sed eros orci in pellentesque id amet porta lobortis turpis
        cras consectetur.
      </p>

      <div className="container">
        {/* MAIN VIDEO */}
        <div className="main-video">
          <video
            ref={mainVideoRef}
            src={mainVideo.src}
            className="main-video-player"
            controls
            onPlay={handleMainPlay}
          />
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
        <button className="btn dark">Join the Waitlist</button>
        <button className="btn light">Buy the $TOKEN</button>
      </div>
    </div>
  );
};

export default VideoShowcase;
