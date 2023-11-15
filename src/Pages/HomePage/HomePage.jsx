import React from "react";
import Typical from "react-typical";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="c-homepage">
      <div className="c-homepage__row">
        <div className="c-homepage__col">
          <div className="c-homepage__circle">
            <div className="c-homepage__circle-item"></div>
          </div>
        </div>
        <div className="c-homepage__welcome">
          <h1 data-text="Welcome">
            <mark>Welcome</mark>
          </h1>
        </div>
        <div className="c-homepage__typical">
          <Typical
            steps={[
              `I'm`,
              1500,
              `I'm Tolga Kurtuluş`,
              1500,
              `I'm`,
              1500,
              `I'm Senior Frontend Developer`,
              1500,
            ]}
            loop={Infinity}
            wrapper="p"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
