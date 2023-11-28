import React from "react";
import { Link } from "react-router-dom";
import { Arrow } from "../../assets/svg/arrow";
import styles from "./styles.module.scss";

const NotFound = () => {
  return (
    <div className={styles["c-notfound"]}>
      <div className={styles["c-notfound__title"]}>
        <h1>404</h1>
        <h2>This Page Is Lost In Space</h2>
      </div>
      <Link to={`/Portfolio`} className={styles["c-notfound__back"]}>
        <Arrow />
        <p>Back to projects</p>
      </Link>
    </div>
  );
};

export default NotFound;
