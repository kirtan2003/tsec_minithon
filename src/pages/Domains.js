import React, { useEffect } from "react";
import "./styles/Domains.css";
import Card from "../components/Card";
import data from "../data/domains/domains.json";
import AOS from "aos";
import "aos/dist/aos.css";

const Domains = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="domains">
        <div className="domains_title">
          <h1>Domains</h1>
          <p>
            {" "}
            <span>&gt;</span> PROBLEM STATEMENTS WILL BE BASED ON THESE{" "}
            <span>&lt;</span>{" "}
          </p>
        </div>
        <div className="domains_cards">
          {data.map((item) => {
            return (
              <Card
                key={item.title}
                title={item.title}
                subtitle={item.subtitle}
                content={item.content}
                color={item.color}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Domains;
