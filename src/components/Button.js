import React from "react";
import "./styles/Button.css";

export default function Button(props) {
  let text = props.text;
  let icon = props.icon;
  return (
    <div onClick={props.onClick} className="btn-wrap">
      <div className="btn btn-trapezoid-outline top">
        <span>
          {icon && <img src={icon} alt="icon" className="btn_icon"></img>}
          {text}
        </span>
      </div>
      <div className="btn-trapezoid-outline2 bottom">
        <span>
        {icon && <img src={icon} alt="icon" className="btn_icon"></img>}
          {text}
        </span>
      </div>
    </div>
  );
}
