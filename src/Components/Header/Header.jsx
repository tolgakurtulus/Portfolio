import React, { useState, useEffect } from "react";
import "./Header.scss";
import { Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = (props) => {

    const [scrollY, setScrollY] = useState(0);

    function logit() {
      setScrollY(window.pageYOffset);
    }
  
    useEffect(() => {
      function watchScroll() {
        window.addEventListener("scroll", logit);
      }
      watchScroll();
      return () => {
        window.removeEventListener("scroll", logit);
      };
    }, []);

    function homeClick() {
      props.handleMenuClick("home");
    }
    function aboutClick() {
      props.handleMenuClick("about");
    }
    function portfolioClick() {
      props.handleMenuClick("portfolio");
    }

    return (
        <Navbar fixed="top" collapseOnSelect expand="lg" bg={scrollY > 0 ? "dark" : ""} variant="dark">
            <Navbar.Brand className="navbar__logo" href="#home">
              <img src="/Portfolio/img/portfoliologosq.png" alt="Mail" loading="lazy" />{" "}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto"></Nav>
                <Nav>
                <Nav.Link onClick={homeClick} href="#home">Home</Nav.Link>
                <Nav.Link onClick={aboutClick} href="#about">About</Nav.Link>
                <Nav.Link onClick={portfolioClick} href="#portfolio">Portfolio</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
      );    
};

export default React.memo(Header);
