import React, { useRef, useEffect } from "react";
import Header from "../../Components/Header";
import Homepage from "../HomePage";
import About from "../About";
import Skill from "../Skill";
import Portfolio from "../Portfolio/Portfolio.jsx";
import Brand from "../Brand";

const MainPage = () => {
  const homeScroll = useRef();
  const aboutScroll = useRef();
  const skillScroll = useRef();
  const portfolioScroll = useRef();
  const brandScroll = useRef();

  useEffect(() => {
    let getQueryString = window.location.search;
    let getQueryStringHash = window.location.hash;
    if (getQueryString === "?portfolioback" && getQueryStringHash === "") {
      portfolioScroll.current.scrollIntoView({
        block: "center",
        inline: "center",
        behavior: "smooth",
      });
    }
  }, []);

  const handleMenuClick = (item) => {
    if (item === "home") {
      homeScroll.current.scrollIntoView({
        block: "center",
        inline: "center",
        behavior: "smooth",
      });
    } else if (item === "about") {
      aboutScroll.current.scrollIntoView({
        block: "center",
        inline: "center",
        behavior: "smooth",
      });
    } else if (item === "skill") {
      skillScroll.current.scrollIntoView({
        block: "center",
        inline: "center",
        behavior: "smooth",
      });
    } else if (item === "portfolio") {
      portfolioScroll.current.scrollIntoView({
        block: "center",
        inline: "center",
        behavior: "smooth",
      });
    } else if (item === "brand") {
      brandScroll.current.scrollIntoView({
        block: "center",
        inline: "center",
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Header handleMenuClick={handleMenuClick} />
      <div ref={homeScroll}>
        <Homepage />
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
