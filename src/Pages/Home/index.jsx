import React from "react";
import Typical from "react-typical";
import MoveTitle from "../../Components/MoveTitle";
import styles from "./styles.module.scss";

const Home = () => {
  return (
    <div className={styles["c-home"]}>
      <div className={styles["c-home__row"]}>
        <div className={styles["c-home__col"]}>
          <div className={styles["c-home__circle"]}>
            <div className={styles["c-home__circle-item"]}></div>
          </div>
        </div>
        <div className={styles["c-home__welcome"]}>
          <MoveTitle />
        </div>
        <div className={styles["c-home__typical"]}>
          <Typical
            steps={[
              `I'm`,
              1500,
              `I'm Tolga Kurtuluş`,
              1500,
              `I'm`,
              1500,
              `I'm Senior Frontend Developer`,
              1500,
            ]}
            loop={Infinity}
            wrapper="p"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
