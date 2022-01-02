// import React, { useState, useEffect } from 'react';
import React from 'react';
import "./HomePage.scss";
import Typical from 'react-typical'


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
                    `I'm Front-end Developer`,
                    1500,
                    `I'm`,
                    1500,
                    `I'm Software Engineer`,
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