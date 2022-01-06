import React, { useRef, useState, useEffect } from "react";
import "./App.scss";
import Header from "./Components/Header/Header.jsx";
import Homepage from "./Pages/HomePage/HomePage.jsx";
import About from "./Pages/About/About.jsx";
import Portfolio from "./Pages/Portfolio/Portfolio.jsx";

function App() {
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
    <div className="c-app">
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


    </div>
  );
}

export default App;
