import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="c-footer">
      <div className="c-footer__item">
        <a href="https://github.com/tolgakurtulus" rel="noopener noreferrer" target="_blank"><img src="/Portfolio/img/github.svg" alt="Github" loading="lazy"/> </a>
        <a href="https://www.linkedin.com/in/tolga-kurtulus/" rel="noopener noreferrer" target="_blank"><img src="/Portfolio/img/linkedin.svg" alt="Linkedin" loading="lazy"/> </a>
        <a href="mailto:tolgakurtulus1@outlook.com" rel="noopener noreferrer" target="_blank"><img src="/Portfolio/img/email.png" alt="Mail" loading="lazy"/> </a>
      </div>
      <div className="c-footer__item">
        <h2>© 2022 TOLGA KURTULUŞ. ALL RIGHTS RESERVED</h2>
      </div>
    </div>
  );
};

export default React.memo(Footer);
