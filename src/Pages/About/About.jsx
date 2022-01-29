import React from "react";
import Button from '../../Components/Button/Button.jsx';
import "./About.scss";
import ProgressBar from "react-bootstrap/ProgressBar";

const About = () => {
  return (
    <div className="c-about">
      <div className="c-about__container">
        <div className="c-about__row">
          <div className="c-about__left">
            <h2>Hello, I'm Tolga Kurtuluş</h2>
            <h3>Front End Developer & Software Engineer</h3>,
            <p>I want to divide my software life into 3 periods.</p>
            <p>
              <b>1. </b>I was born in 1995 in Istanbul and I still live in
              Istanbul. I made my first start in software by going to Bahçeşehir
              IMKB Anatolian Technical High School in 2009 Database and Web
              Programming).
            </p>
            <p>
              <b>2. </b>I started Altınbaş Electrical and Electronics
              Engineering in 2014. When I couldn't get what I wanted from this
              section, I went back to the software and built the site called
              redlifesphere in 2015. This was the first site I made it was the
              strongest step in my career. Then, I made a site as my 3
              projects(Hediyelik Karakalem, Hediyelik Karikatür, Can
              Marketings). I worked in three different companies during my
              university life and did an internship in two different companies.
            </p>
            <p>
              <b>3. </b>After graduating from university, I started working at
              PixelPlus company. This was my first full time job as a frontend
              developer. I've worked on nearly 50 different sites here. I have
              developed more than twenty projects from scratch and received 3
              awards thanks to these projects. Currently, my career life
              continues rapidly.
            </p>
            <div className="c-about__button">
              <a href="/Portfolio/img/Tolga-Kurtulus-CV.pdf" rel="noopener noreferrer" target="_blank">
                <Button color={"black"} title={"My Resume"}/>
              </a>
            </div>
          </div>
          <div className="c-about__right">
            <div className="c-about__right-box">
              <p>HTML & CSS & Jquery & Bootstrap</p>
              <ProgressBar variant="info" now={99} label={`99%`} animated />
            </div>
            <div className="c-about__right-box">
              <p>Javascript</p>
              <ProgressBar variant="info" now={90} label={`90%`} animated/>
            </div>
            <div className="c-about__right-box">
              <p>React & Redux & Router</p>
              <ProgressBar variant="info" now={80} label={`80%`} animated/>
            </div>
            <div className="c-about__right-box">
              <p>Next.js & Typescript & Gastsby.js</p>
              <ProgressBar variant="info" now={40} label={`40%`} animated/>
            </div>
            <div className="c-about__right-box">
              <p>Vue & Angular</p>
              <ProgressBar variant="info" now={15} label={`15%`} animated/>
            </div>
            <div className="c-about__right-box">
              <p>Python & Django & Deep Learning</p>
              <ProgressBar variant="info" now={35} label={`35%`} animated/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
