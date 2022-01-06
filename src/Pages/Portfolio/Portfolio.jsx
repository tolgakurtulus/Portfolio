import React, { useState, useEffect } from "react";
import "./Portfolio.scss";
import Button from "../../Components/Button/Button.jsx";
import DataInfo from "../../assets/data/data.js";
import { Route } from "react-router-dom";
import PortfolioDetail from "../PortfolioDetail/PortfolioDetail.jsx";

const Portfolio = () => {
  let category;
  let resultData;

  const [categoryData, setCategoryData] = useState(DataInfo);

  const handleClick = (e) => {
    category = e;
    if (category === "all") {
      resultData = DataInfo;
    } else {
      resultData = DataInfo.filter(function (el) {
        return el.category === category;
      });
    }

    setCategoryData(resultData);
  };

  return (
    <div className="c-portfolio">
      <div className="c-portfolio__container">
        <div className="c-portfolio__title">
          <h2>
            <span>Our Work</span>
          </h2>
        </div>
        <div className="c-portfolio__tab">
          <div className="c-portfolio__tab-item">
            {/* <button onClick={handleClick}>Tolga</button> */}
            <Button
              size={"xl"}
              radius={"radius"}
              color={"black"}
              title={"All"}
              value={"all"}
              handleClick={handleClick}
            />
          </div>
          <div className="c-portfolio__tab-item">
            <Button
              size={"xl"}
              radius={"radius"}
              color={"black"}
              title={"React"}
              value={"react"}
              handleClick={handleClick}
            />
          </div>
          <div className="c-portfolio__tab-item">
            <Button
              size={"xl"}
              radius={"radius"}
              color={"black"}
              title={"Js & Jquery"}
              value={"js"}
              handleClick={handleClick}
            />
          </div>
          <div className="c-portfolio__tab-item">
            <Button
              size={"xl"}
              radius={"radius"}
              color={"black"}
              title={"Vue"}
              value={"vue"}
              handleClick={handleClick}
            />
          </div>
        </div>
        <div className="c-portfolio__row">
          {categoryData.map((item) => {
            return (
              // <Route exact path={`${item.title}`} component={PortfolioDetail}>
                <div className="c-portfolio__item">
                  <div className="c-portfolio__item-img">
                    <img src={`../../img/${item.img}`} alt={item.title} />
                    <div className="c-portfolio__item-overlay">
                      <div className="c-portfolio__item-overlay-info">
                        <h6>{item.title}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              // </Route>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
