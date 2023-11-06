import React from "react";
import Typical from "react-typical";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="c-homepage">
      <div className="c-homepage__overlay">
        <div className="c-homepage-container">
          <div className="c-homepage-container__row">
            <div className="c-homepage-container__col">
              <h2>Welcome</h2>
            </div>
            <div className="c-homepage-container__col">
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
      </div>
    </div>
  );
};

export default HomePage;
