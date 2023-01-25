import React from "react";
import Rocket from "../components/Rocket";

import styles from "../styles/Rockets.module.css";

function Rockets() {
  return (
    <div className={styles.container}>
      Rockets
      <div className={styles["Rockets-header"]}>
        <h1 className={styles["Rockets-title"]}> Rockets</h1>
        <p className={styles["Rockets-desc"]}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque alias,
          nihil numquam est ab libero totam perspiciatis necessitatibus incidunt
          magnam natus enim aperiam at, fugiat quo similique sint, rem ut.
        </p>
      </div>
      <div>
        <Rocket />
      </div>
    </div>
  );
}

export default Rockets;
