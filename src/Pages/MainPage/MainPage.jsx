import React, { useRef } from "react";
import Header from "../../Components/Header/Header.jsx";
import Homepage from "../HomePage/HomePage.jsx";
import About from "../About/About.jsx";
import Portfolio from "../Portfolio/Portfolio.jsx";

const Mainz = () => {
  const homeScroll = useRef();
  const aboutScroll = useRef();
  const portfolioScroll = useRef();

  const handleMenuClick = (item) => {
    if(item === "home") {
     homeScroll.current.scrollIntoView({block: 'center', inline: 'center', behavior: 'smooth'});
    } else if (item === "about") {
     aboutScroll.current.scrollIntoView({block: 'center', inline: 'center', behavior: 'smooth'});
    } else if (item === "portfolio") {
      portfolioScroll.current.scrollIntoView({block: 'center', inline: 'center', behavior: 'smooth'});
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
      <div ref={portfolioScroll}>
        <Portfolio />
      </div>
    </>
  );
};

export default Mainz;