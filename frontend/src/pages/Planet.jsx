import React from "react";
import styles from "../styles/Planet.module.css";

function Planet() {
  return (
    <div className={styles.container}>
      <h1 className={styles["planet-name"]}>Planet X</h1>
      <p className={styles["planet-details"]}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting.
      </p>
      <h1 className={styles["planet-composition-title"]}>Composition</h1>
      <p className={styles["planet-composition"]}>
        Lorem Ipsum is simply dummy text of the printing <br /> and typesetting
        industry. Lorem Ipsum has been the <br />
        industry's standard dummy text ever.
      </p>
      <h1 className={styles["planet-climate-title"]}>Climate</h1>
      <p className={styles["planet-climate"]}>
        Lorem Ipsum is simply dummy text of the printing <br /> and typesetting
        industry. Lorem Ipsum has been the <br />
        industry's standard dummy text ever.
      </p>
    </div>
  );
}

export default Planet;
