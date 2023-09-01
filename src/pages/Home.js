import React, { useEffect } from "react";
import "./styles/Home.css";

// const SplineComponent = React.lazy(() => import("../components/SplineComponent"));
// const VideoComponent = React.lazy(() => import("../components/VideoComponent"));


const Home = () => {
  let [showSpline, setShowSpline] = React.useState(false);
  let [showVideo, setShowVideo] = React.useState(false);

  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src = "https://apply.devfolio.co/v2/sdk.js";
  //   script.async = true;
  //   script.defer = true;
  //   document.body.appendChild(script);
  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 750) {
        setShowSpline(true);
        setShowVideo(false);
      } else {
        setShowSpline(false);
        setShowVideo(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="home">
        {/* <img src="hackerstellar.webp" alt="" className="home_logo" loading="lazy"></img> */}
        <img src="logo3-removebg-preview.png" alt="" className="home_logo" loading="lazy"></img>
        {/* <img src="astronaut.webp" alt="" className="home_astro" loading="lazy"></img> */}
        <img src="robot-removebg.png" alt="" className="home_astro" loading="lazy"></img>
        <React.Suspense fallback={null}>
          {/* <SplineComponent show={showSpline} /> */}
          {/* <VideoComponent show={showVideo} /> */}
        </React.Suspense>
        <div className="button_position">
          <div
            className="apply-button"
            data-hackathon-slug="hackerstellar"
            data-button-theme="dark"
          ></div>
          {/* <a href="https://discord.gg/CxpbPSGN6D" target="_blank" rel="noreferrer"> */}
          {/* <div className="discord-button">
           Let's Get Started!
          </div> */}
          <div className="discord-button">
          <button className="discord-button"><span>Let's Get Started</span></button>
          </div>
          {/* </a> */}
        </div>
      </div>
    </>
  );
};

export default Home;
