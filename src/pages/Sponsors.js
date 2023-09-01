import React, { useState, memo, lazy, useEffect } from "react";
import "./styles/Sponsors.css";
import data from "../data/sponsors/sponsors.json";
import Button from "../components/Button";

const SponsorImage = memo(({ type, link, image, name }) => {
  console.log(type)
  return (
    <a href={link} target="_blank">
          <img
          src={image}
          alt={name}
          className={type==="TITLE SPONSOR" ? "sponsor-title-img" : "sponsor-img"}
          loading="lazy"
        />
    </a>
  );
});

const Data = () => {
  return (
    <>
      {data.map((item) => {
        return (
          <div key={item.type} className="sponsor_content_group">
            <h1 className="sponsor_content_title">{item.type}</h1>
            <div className="sponsor_content_images">
              {item.contents.map((content) => {
                return (
                  <SponsorImage
                    key={content.name}
                    type={item.type}
                    link={content.link}
                    image={content.image}
                    name={content.name}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};

const Sponsors = () => {
  const handleClick = () => {
    window.location.href =
      "mailto:csi-kjsce@somaiya.edu?subject=Regarding%20Hackerstellar%20Hackathon&body=Hello%20CSI-KJSCE";
  };
  return (
    <>
      <div className="sponsor">
        <div className="sponsor_title">
          <h1>Sponsors</h1>
          <p>
            <span>&gt;</span> Want to become a Sponsor<span>&lt;</span>{" "}
          </p>
        </div>
        <Button text="Sponsor Us" onClick={handleClick} />
        <div className="sponsor_content">
          <Data />
        </div>
      </div>
    </>
  );
};

export default Sponsors;
