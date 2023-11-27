import React from "react";
import styles from "./styles.module.scss";

const LoadingContainer = () => {
  return (
    <>
      <span className={`${styles.spinner} ${styles.smooth}`} />
    </>
  );
};

export default LoadingContainer;
