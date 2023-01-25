import React from "react";

// import Planet from "../components/Planet";

import styles from "../styles/PlanetDetail.module.css";

import activity1 from "../assets/biking.png";
import activity2 from "../assets/surfing.png";

function PlanetDetail() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1 className={styles["planet-name"]}>Planet X</h1>
        <p className={styles["planet-details"]}>
          Icy est une planète naine glacée, située à l'extérieur du système
          solaire. Recouverte de glace elle abrite des paysages époustouflants
          de montagnes enneigées et de vastes étendues glacées. Les aventures en
          plein air, comme les randonnées et les excursions en motoneige, y sont
          très populaire. C'est un endroit idéal pour les amateurs d'aventure et
          d'exploration qui cherchent à découvrir des paysages uniques et
          sauvages.
        </p>
      </div>
      <div styles={styles["small-cards"]}>
        <p className={styles["planet-type"]}>ROCKY</p>
        <p className={styles["planet-diameter"]}>436845KM</p>
        <p className={styles["planet-distance"]}>29 Earth years</p>
        <p className={styles["planet-composition"]}>Gas giant</p>
      </div>
      {/* <Planet planetDetail /> */}
      {/* <h1 className={styles["planet-composition-title"]}>Composition</h1>
      <p className={styles["planet-composition"]}>
        Lorem Ipsum is simply dummy text of the printing <br /> and typesetting
        industry. Lorem Ipsum has been the <br />
        industry's standard dummy text ever.
      </p> */}
      <h1 className={styles["planet-climate-title"]}>Climate</h1>
      <p className={styles["planet-climate"]}>
        Lorem Ipsum is simply dummy text of the printing <br /> and typesetting
        industry. Lorem Ipsum has been the <br />
        industry's standard dummy text ever.
      </p>
      <h1 className={styles["planet-activities-title"]}>Activities</h1>
      <img src={activity1} alt="biking" className={styles.activity} />
      <h1 className={styles["planet-hotel-title"]}>Hotel</h1>
      <img src={activity2} alt="biking" className={styles.activity} />
    </div>
  );
}

export default PlanetDetail;
