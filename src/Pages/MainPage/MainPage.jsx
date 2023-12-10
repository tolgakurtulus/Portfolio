import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header";
import Home from "../Home";
import About from "../About";
import Skill from "../Skill";
import Portfolio from "../Portfolio/Portfolio.jsx";
import Brand from "../Brand";

const MainPage = () => {
  const navigate = useNavigate();
  const homeScroll = useRef();
  const aboutScroll = useRef();
  const skillScroll = useRef();
  const portfolioScroll = useRef();
  const brandScroll = useRef();

  useEffect(() => {
    if (window.location.hash.indexOf("portfolioback") !== -1) {
      portfolioScroll.current.scrollIntoView({
        block: "start",
        inline: "center",
        behavior: "smooth",
      });
    }
  }, []);

  const handleMenuClick = (item) => {
    if (window.location.hash.indexOf("portfolioback") !== -1) {
      navigate("/");
    }

    if (item === "home") {
      homeScroll.current.scrollIntoView({
        block: "start",
        inline: "center",
        behavior: "smooth",
      });
    } else if (item === "about") {
      aboutScroll.current.scrollIntoView({
        block: "start",
        inline: "center",
        behavior: "smooth",
      });
    } else if (item === "skill") {
      skillScroll.current.scrollIntoView({
        block: "start",
        inline: "center",
        behavior: "smooth",
      });
    } else if (item === "portfolio") {
      portfolioScroll.current.scrollIntoView({
        block: "start",
        inline: "center",
        behavior: "smooth",
      });
    } else if (item === "brand") {
      brandScroll.current.scrollIntoView({
        block: "start",
        inline: "center",
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Header handleMenuClick={handleMenuClick} />
      <div ref={homeScroll}>
        <Home />
      </div>
      <div ref={aboutScroll}>
        <About />
      </div>
      <div ref={skillScroll}>
        <Skill />
      </div>
      <div ref={portfolioScroll}>
        <Portfolio />
      </div>
      <div ref={brandScroll}>
        <Brand />
      </div>
    </>
  );
};

export default MainPage;
