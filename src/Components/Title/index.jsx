import React from "react";
import styles from "./styles.module.scss";

const Title = (props) => {
  return (
    <div className={styles["c-title"]}>
      <h2>{props.title}</h2>
    </div>
  );
};

export default Title;
