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
          What could be better than being able to choose the rocket that will
          take you to your destination? At Galaxy Getaways, we offer our
          travelers the opportunity to choose the mode of transportation that
          best suits their needs. On this page you will find the selection made
          by our team to bring you the best of comfort and safety in your
          journey to the holiday of your dreams.
        </p>
      </div>
      <div className={styles["Rockets-list"]}>
        <Rocket />
        <Rocket />
        <Rocket />
      </div>
    </div>
  );
}

export default Rockets;
