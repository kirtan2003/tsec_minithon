import React, { useState, useEffect } from "react";
import "./styles/Preloader.css";

const Preloader = () => {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowPreloader(false);
    }, 6000);
  }, []);

  return (
    <div
      className="preloader-container"
      style={{
        pointerEvents: showPreloader ? "all" : "none",
        opacity: showPreloader ? "1" : "0",
      }}
    >
      <video
        className="preloader-img"
        preload="auto"
        autoPlay
        loop
        muted
      >
        <source src="/preloader.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Preloader;

