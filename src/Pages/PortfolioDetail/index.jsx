import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { projectData } from "../../db/index.js";
import Button from "../../Components/Button";
import { Arrow } from "../../assets/svg/arrow";
import styles from "./styles.module.scss";

const PortfolioDetail = () => {
  const { projectId } = useParams();
  console.log("projectId:", projectId);
  const projectDataResult = projectData.filter(
    (item) => item.titlelink === projectId
  );
  console.log("projectDataResult:", projectDataResult);
  const { img, tag, title, link, made } = projectDataResult[0];

  return (
    <div className={styles["c-portfolio-detail"]}>
      <p>Tolga</p>
      <div className={styles["c-portfolio-detail__backgroud"]}>
        <img src={`/Portfolio/img/project/${img}`} loading="lazy" alt={title} />
      </div>
      <Link
        to={`/Portfolio?portfolioback`}
        className={styles["c-portfolio-detail__logo"]}
      >
        <img
          src="/Portfolio/img/portfoliologosq.webp"
          alt="Mail"
          loading="lazy"
        />
      </Link>
      <Link
        to={`/Portfolio?portfolioback`}
        className={styles["c-portfolio-detail__back"]}
      >
        <Arrow />
        <p>Back to projects</p>
      </Link>
      <div className={styles["c-portfolio-detail__desc"]}>
        <label>{made === "Pixelplus" ? "2019 - 2021" : "2021 - 2023"}</label>
        <h1>{title}</h1>
        <p>
          Website for {title}, while working at {made}, I played an important
          role in the creation and development of the project. The technologies
          we used while doing this project; {tag}.
        </p>
        <hr />
        <a target="_blank" rel="noreferrer" href={link}>
          <Button color={"black"} title={"Visit the Project"} />
        </a>
      </div>
    </div>
  );
};

export default React.memo(PortfolioDetail);
