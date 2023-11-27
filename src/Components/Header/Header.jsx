import React, { useState, useEffect } from "react";
import { Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./styles.module.scss";

const Header = (props) => {
  const [scrollY, setScrollY] = useState(0);

  const logit = () => {
    setScrollY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", logit);
    return () => {
      window.removeEventListener("scroll", logit);
    };
  }, []);

  return (
    <Navbar
      fixed="top"
      collapseOnSelect
      expand="lg"
      bg={scrollY > 0 ? "dark" : ""}
      variant="dark"
      className={styles["c-nav"]}
    >
      <Navbar.Brand className={styles["c-nav__logo"]} href="#home">
        <img
          src="/Portfolio/img/portfoliologosq.webp"
          alt="Mail"
          loading="lazy"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        className={styles["c-nav__button"]}
        id="responsive-navbar-nav"
      >
        <Nav className="mr-auto"></Nav>
        <Nav>
          <Nav.Link onClick={() => props.handleMenuClick("home")} href="#home">
            Home
          </Nav.Link>
          <Nav.Link
            onClick={() => props.handleMenuClick("about")}
            href="#about"
          >
            About
          </Nav.Link>
          <Nav.Link
            onClick={() => props.handleMenuClick("skill")}
            href="#skill"
          >
            Skills
          </Nav.Link>
          <Nav.Link
            onClick={() => props.handleMenuClick("portfolio")}
            href="#portfolio"
          >
            Portfolio
          </Nav.Link>
          <Nav.Link
            onClick={() => props.handleMenuClick("brand")}
            href="#brand"
          >
            Brands
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default React.memo(Header);
