import React from "react";
import { Link } from "react-router-dom";
import "./PortfolioDetail.scss";

const PortfolioDetail = (item) => {

  console.log("6");

  const { img, language, tag, title, link} = item.item;

  return (
    <div className="c-portfolio-detail">
      <div className="c-portfolio-detail__container">
        <div className="c-portfolio-detail__home">
          <Link to={`/Portfolio`}>
            <h2>← Home</h2>
          </Link>
        </div>
        <div className="c-portfolio-detail__title">
          <h1>{title}</h1>
        </div>
        <div className="c-portfolio-detail__img">
          <img src={`/Portfolio/img/${img}`} alt={title} />
        </div>
        <div className="c-portfolio-detail__item">
          <p><b>Js Library: </b>{language}</p>
        </div>
        <div className="c-portfolio-detail__item">
          <p><b>Languages Used: </b> {tag}</p>
        </div>
        <div className="c-portfolio-detail__item">
          <p><b> In Which Company It Was Made: </b> PixelPlus</p>
        </div>
        <div className="c-portfolio-detail__item">
          <p><b> Site Link: </b> <a href={link} rel="noopener noreferrer" target="_blank">{link}</a></p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetail;
