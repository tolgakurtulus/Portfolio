import React from "react";
import Title from "../../Components/Title/Title.jsx";
import { brandData } from "../../db/index.js";
import styles from "./styles.module.scss";

const Brand = () => {
  return (
    <div className={styles["c-sb"]}>
      <div className={styles["c-sb__container"]}>
        <Title title={"Brands"} />
        <div className={styles["c-sb__row"]}>
          {brandData.map((item) => {
            return (
              <a target="_blank" href={item.href} className={styles["c-sb__item"]}>
                <img
                  src={`/Portfolio/img/brand/${item.img}`}
                  alt="html"
                  title={item.title}
                  loading="lazy"
                />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Brand);
