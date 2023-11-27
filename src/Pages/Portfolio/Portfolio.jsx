import React from "react";
import { Link } from "react-router-dom";
import Title from "../../Components/Title";
import { projectData } from "../../db/index.js";
import "./Portfolio.scss";

const Portfolio = () => {
  return (
    <div className="c-portfolio">
      <div className="c-portfolio__container">
        <Title title={"Portfolio"} />
        <div className="c-portfolio__row">
          {projectData.map((item) => {
            return (
              <Link
                key={item.id}
                className="c-portfolio__item-container"
                to={`/Portfolio/${item.titlelink}`}
              >
                <div key={item.id} className="c-portfolio__item">
                  <div className="c-portfolio__item-img">
                    <div
                      style={{
                        backgroundImage: `url(/Portfolio/img/project/${item.img})`,
                      }}
                      alt={item.title}
                    />
                    <div className="c-portfolio__item-overlay">
                      <div className="c-portfolio__item-overlay-info">
                        <h6>{item.title}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Portfolio);
