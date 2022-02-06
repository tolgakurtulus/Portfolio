import React, { useState } from "react";
import "./Portfolio.scss";
import Button from "../../Components/Button/Button.jsx";
import Title from "../../Components/Title/Title.jsx";
import DataInfo from "../../assets/data/data.js";
import { Link } from "react-router-dom";
// import { LazyLoadImage } from 'react-lazy-load-image-component';

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
        <Title title={"Our Work"}/>
        <div className="c-portfolio__tab">
          <div className="c-portfolio__tab-item">
            <Button
              size={"xl"}
              color={"transparent"}
              title={"All"}
              value={"all"}
              handleClick={handleClick}
            />
          </div>
          <div className="c-portfolio__tab-item">
            <Button
              size={"xl"}
              color={"transparent"}
              title={"React"}
              value={"react"}
              handleClick={handleClick}
            />
          </div>
          <div className="c-portfolio__tab-item">
            <Button
              size={"xl"}
              color={"transparent"}
              title={"Js & Jquery"}
              value={"js"}
              handleClick={handleClick}
            />
          </div>
        </div>
        <div className="c-portfolio__row">
          {categoryData.map((item) => {
            return (
              // <Link className="c-portfolio__item-container" to={`/Portfolio/${item.titlelink}`} target="_blank">
              <Link key={item.id} className="c-portfolio__item-container" to={`/Portfolio/${item.titlelink}`}>
                <div key={item.id} className="c-portfolio__item">
                  <div className="c-portfolio__item-img">
                    <div style={{backgroundImage: `url(/Portfolio/img/${item.img})`}} alt={item.title} />
                    {/* <LazyLoadImage alt={item.title} src={`/Portfolio/img/${item.img}`}/> */}
                    {/* <img src={`/Portfolio/img/${item.img}`} alt={item.title} loading="lazy"/> */}
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
