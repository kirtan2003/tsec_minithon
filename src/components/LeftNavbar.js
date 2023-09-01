import React, {useEffect, useState} from "react";
import "../components/styles/LeftNavbar.css";
import data from "../data/components/LeftNavbar.json";

const LeftNavbar = (props) => {
  const [text, setText] = useState("Hackerstellar");
  useEffect(() => {
    setText(data[props.current]);
  }, [props]);

  return (
    <>
      <div className="left-navbar">
        <h1 className="left-navbar_title">{text}</h1>
        <div className="left-navbar_menu" 
          style={
            props.current === "footer" ? {visibility: "hidden"} : {visibility: "visible"}
          }
        >
          <li>
            <a href="mailto:csi-kjsce@somaiya.edu">
              <i className="fa-regular fa-envelope icon"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/csikjsce/?hl=en">
              <i className="fa-brands fa-instagram icon"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/csi---kjsce-student%27s-chapter/">
              <i className="fa-brands fa-linkedin icon"></i>
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/@csikjsce3963">
              <i className="fa-brands fa-youtube icon"></i>
            </a>
          </li>
        </div>
      </div>
    </>
  );
};

export default LeftNavbar;
