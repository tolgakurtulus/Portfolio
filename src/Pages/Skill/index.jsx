import React from "react";
import Title from "../../Components/Title";
import { skillData } from "../../db/index.js";
import styles from "./styles.module.scss";

const Skill = () => {
  return (
    <div className={styles["c-sb"]}>
      <div className={styles["c-sb__container"]}>
        <Title title={"Skills"} />
        <div className={styles["c-sb__row"]}>
          {skillData.map((item, i) => {
            return (
              <div key={i} className={styles["c-sb__item"]}>
                <img
                  src={`/Portfolio/img/skill/${item.img}`}
                  alt="html"
                  title={item.title}
                  loading="lazy"
                  width="100"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Skill);