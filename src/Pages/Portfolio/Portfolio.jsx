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
          {projectData.map((item, i) => {
            return (
              <Link
                key={i}
                className="c-portfolio__item-container"
                to={`/${item.titlelink}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div key={item.id} className="c-portfolio__item">
                  <div className="c-portfolio__item-img">
                    <img
                      src={`/Portfolio/img/project/${item.img}`}
                      alt="html"
                      title={item.title}
                      loading="lazy"
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
