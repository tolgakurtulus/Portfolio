import React from "react";
import styles from "./styles.module.scss";

const MoveTitle = () => {
  return (
    <h1 className={styles["c-movetitle"]} data-text="Welcome">
      <mark>Welcome</mark>
    </h1>
  );
};

export default MoveTitle;
