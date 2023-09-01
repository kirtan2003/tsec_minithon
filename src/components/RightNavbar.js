import React, { useState, useEffect } from "react";
import "./styles/RightNavbar.css";

const RightNavbar = () => {
  let countDownDate = new Date("Jul 15, 2023 09:00:00").getTime();
  let now = new Date().getTime();
  let timeleft = countDownDate - now;

  let [days, setDays] = useState(0);
  let [hours, setHours] = useState(0);
  let [minutes, setMinutes] = useState(0);
  let [seconds, setSeconds] = useState(0);

  function setTime() {
    setDays(Math.floor(timeleft / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    setMinutes(Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60)));
    setSeconds(Math.floor((timeleft % (1000 * 60)) / 1000));
    setTimeout(() => {
      now = new Date().getTime();
      timeleft = countDownDate - now;
      setTime();
    }, 1000);
  }

  useEffect(() => {
    setTime();
  });

  return (
    <>
      <div className="right-navbar">
        <h1 className="right-navbar_title">
          <span>S</span>
          <span>O</span>
          <span>O</span>
          <span>N</span>
        </h1>
        <div className="right-navbar_counter">
          <Counter val={days} text='D' />
          <Counter val={hours} text='H' />
          <Counter val={minutes} text='M' />
          <Counter val={seconds} text='S' />
        </div>
      </div>
    </>
  );
};

function Counter(props) {
  return (
    <div className="counter">
      <div>
        <h1>{props.val}</h1>
      </div>
      <h4>{props.text}</h4>
    </div>
  );
}

export default RightNavbar;
