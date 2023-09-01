import React, { useEffect } from "react";
import "./styles/Prizes.css";
import data from "../data/prizes/prizes.json";
import AOS from "aos";
import "aos/dist/aos.css";

const FirstPrize = ({ domain, prize, desc, color, textColor }) => {
  return (
    <div
      className="prizes_galactic_genius"
      style={{ border: `2.5px solid ${color}` }}
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      <div className="prizes_gg_wrapper">
        <div
          className="prizes_gg_title"
          style={{
            textShadow: `0px 0px 7.5px ${color}`,
          }}
        >
          {domain}
        </div>
        <div className="prizes_gg_content">{desc}</div>
      </div>
      <div className="prizes_gg_subtitle" style={{
        color: `${textColor}`
      }}>INR {prize}K+</div>
    </div>
  );
};

const DomainPrize = ({ domain, prize, desc, color, textColor }) => {
  return (
    <div
      className="domain_child"
      style={{ border: `2.5px solid ${color}` }}
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      <div
        className="prizes_title_2"
        style={{
          textShadow: `0px 0px 7.5px ${color}`,
        }}
      >
        {domain}
      </div>
      <div
        className="prizes_subtitle"
        style={{
          color: `${textColor}`,
        }}
      >
        INR {prize}K+
      </div>
      <div className="prizes_card_content">{desc}</div>
    </div>
  );
};

const Prizes = () => {
  const overall = data.overall;
  const domain = data.domain;

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="prizes">
      <div className="prizes_title">
        <h1>Prizes</h1>
        <p>
          <span>&gt;</span> PRIZES ACCORDING TO SPECIFIC DOMAIN{" "}
          <span>&lt;</span>
        </p>
      </div>
      <div className="prizes_main_div">
        {overall.map((item) => {
          return (
            <FirstPrize
              key={item.domain}
              domain={item.domain}
              prize={item.prize}
              desc={item.desc}
              color={item.color}
              textColor={item.textColor}
            />
          );
        })}
        <div className="prizes_domains">
          {domain.map((item) => (
            <DomainPrize
              key={item.domain}
              domain={item.domain}
              prize={item.prize}
              desc={item.desc}
              color={item.color}
              textColor={item.textColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Prizes;