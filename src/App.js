import React, { useState, useEffect } from "react";
import "./index.css";
import TopNavbar from "./components/TopNavbar";
import LeftNavbar from "./components/LeftNavbar";
import RightNavbar from "./components/RightNavbar";
import ImageRule from "./components/ImageRule";
import Background from "./components/Background";
import Home from "./pages/Home";
import About from "./pages/About";
import Faq from "./pages/Faq";
import Sponsors from "./pages/Sponsors";
import Domains from "./pages/Domains";
import Prizes from "./pages/Prizes";
import Timeline from "./pages/Timeline";
import Footer from "./pages/Footer";
import Preloader from "./pages/PreLoader";

function App() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [current, setCurrent] = useState("home");

  const handleScroll = () => {
    const sections = document.querySelectorAll(".section");

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
        setCurrent(section.getAttribute("id"));
      } 
    });
  };
  useEffect(() => {
    function handleVisibilityChange() {
      if (document.visibilityState === "hidden") {
        document.title = "Don't lose touch with the stars";
      } else {
        document.title = "HACKERSTELLAR";
      }
    }
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", () => setScreenWidth(window.innerWidth));
  }, []);

  return (
    <>
      <Preloader show={showPreloader} />
      <TopNavbar current={current} />
      <LeftNavbar current={current} />
      <RightNavbar />
      <Background />
      <section className="section" id="home">
        <Home setShowPreloader={setShowPreloader} />
      </section>
        <ImageRule />
      <section className="section" id="about">
        <About current={current} />
      </section>
        <ImageRule />
      <section className="section" id="domains">
        <Domains />
      </section>
        <ImageRule />  
      <section className="section" id="prizes">
        <Prizes />
      </section>
        <ImageRule />
      <section className="section" id="timeline">
        <Timeline />
      </section>
        <ImageRule />
      <section className="section" id="sponsors">
        <Sponsors />
      </section>
        <ImageRule />
      <section className="section" id="faq">
        <Faq />
      </section>
      <section className="section" id="footer">
        <Footer />
      </section>
    </>
  );
}

export default App;
