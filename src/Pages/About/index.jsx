import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import Button from "../../Components/Button";
import Title from "../../Components/Title";
import styles from "./styles.module.scss";

const About = () => {
  return (
    <div className={styles["c-about"]}>
      <div className={styles["c-about__container"]}>
        <Title title={"About"} />
        <div className={styles["c-about__row"]}>
          <div className={styles["c-about__left"]}>
            <h2>Hello, I'm Tolga Kurtuluş</h2>
            <h3>Senior Frontend Developer</h3>,<p>I want to divide my software life into 3 periods.</p>
            <p>
              <b>1. </b>I was born in 1995 in Istanbul and I still live in Istanbul. I made my first start in software by going to Bahçeşehir IMKB Anatolian Technical High School in 2009 Database and
              Web Programming).
            </p>
            <p>
              <b>2. </b>I started Altınbaş Electrical and Electronics Engineering in 2014. When I couldn't get what I wanted from this section, I went back to the software and built the site called
              redlifesphere in 2015. This was the first site I made it was the strongest step in my career. Then, I made a site as my 3 projects(Hediyelik Karakalem, Hediyelik Karikatür, Can
              Marketings). I worked in three different companies during my university life and did an internship in two different companies.
            </p>
            <p>
              <b>3. </b>After graduating from university, I started working at PixelPlus company. This was my first full time job as a frontend developer.I have developed more than thirty projects
              from scratch and received 3 awards thanks to these projects. Then, I transitioned to Odeon Software, where I worked for three years and contributed to two projects with millions of
              users. After fulfilling my mission at Odeon, I moved to Bilyoner. At Bilyoner, I resolved issues on bilyoner.com and developed the front-end of altiliganyan.com. Due to my strong
              interest in the FX sector, I accepted an offer from Primetech, where I am currently continuing my career.
            </p>
            <div className={styles["c-about__button"]}>
              <a href='/Portfolio/Tolga-Kurtulus-CV.pdf' rel='noopener noreferrer' target='_blank'>
                <Button color={"transparent"} title={"My Resume"} />
              </a>
            </div>
          </div>
          <div className={styles["c-about__right"]}>
            <div className={styles["c-about__right-box"]}>
              <p>HTML & CSS & JQuery</p>
              <ProgressBar variant='danger' now={99} label={`99%`} animated />
            </div>
            <div className={styles["c-about__right-box"]}>
              <p>Javascript</p>
              <ProgressBar variant='danger' now={90} label={`90%`} animated />
            </div>
            <div className={styles["c-about__right-box"]}>
              <p>React & Redux & Next.js & TypeScript</p>
              <ProgressBar variant='danger' now={98} label={`98%`} animated />
            </div>
            <div className={styles["c-about__right-box"]}>
              <p>Bootsrap / Antd / DevE / Npm</p>
              <ProgressBar variant='danger' now={98} label={`98%`} animated />
            </div>
            <div className={styles["c-about__right-box"]}>
              <p>Vue & Angular</p>
              <ProgressBar variant='danger' now={15} label={`15%`} animated />
            </div>
            <div className={styles["c-about__right-box"]}>
              <p>Python & Django & Deep Learning</p>
              <ProgressBar variant='danger' now={20} label={`20%`} animated />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
