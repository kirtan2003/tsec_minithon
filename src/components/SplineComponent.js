import React from "react";
import Spline from "@splinetool/react-spline";

const SplineComponent = ({ show }) => {
  if (!show) {
    return null;
  }

  return (
    <Spline
      scene="https://prod.spline.design/GlpRUc5Wki1-raL9/scene.splinecode"
      className="home_mars"
      style={{ display: show ? "block" : "none" }}
    />
  );
};

export default React.memo(SplineComponent);