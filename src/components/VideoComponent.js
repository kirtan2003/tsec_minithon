import React from "react";

const VideoComponent = ({ show }) => {
  if (!show) {
    return null;
  }

  return (
    <video
      autoPlay
      loop
      muted
      className="home_mars_vid"
      style={{ display: show ? "block" : "none" }}
    >
      <source src="mars.webm" type="video/webm" />
    </video>
  );
};

export default React.memo(VideoComponent);