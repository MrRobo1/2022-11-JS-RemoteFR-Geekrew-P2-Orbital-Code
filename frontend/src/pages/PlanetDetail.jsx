import React from "react";

import Planet from "../components/Planet";

import styles from "../styles/PlanetDetail.module.css";

import activity1 from "../assets/planetsActivities/biking.png";
import activity2 from "../assets/planetsActivities/surfing.png";

function PlanetDetail() {
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
      <div styles={styles["small-cards"]}>
        <p className={styles["planet-type"]}>Rocky</p>
        <p className={styles["planet-diameter"]}>436845km</p>
        <p className={styles["planet-distance"]}>35455566km from Earth</p>
      </div>
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
      <Planet planetDetail />
      <h1 className={styles["planet-activities-title"]}>Activities</h1>
      <img src={activity1} alt="biking" className={styles.activity} />
      <h1 className={styles["planet-hotel-title"]}>Hotel</h1>
      <img src={activity2} alt="biking" className={styles.activity} />
    </div>
  );
}

export default PlanetDetail;
