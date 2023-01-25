import React from "react";
import { Link } from "react-router-dom";

import Planet from "../components/Planet";

import styles from "../styles/PlanetDetail.module.css";

import activity1 from "../assets/planetsActivities/biking.png";
import activity2 from "../assets/planetsActivities/surfing.png";

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
      <div className={styles.planet}>
        <Planet isPlanetDetail isPlanetName />
      </div>
      <div className={styles["small-cards"]}>
        <p className={styles["planet-type"]}>Telluric</p>
        <p className={styles["planet-climate"]}>Polar</p>
        <p className={styles["planet-diameter"]}>99342827KM</p>
        <p className={styles["planet-distance"]}>29 Earth years</p>
        <p className={styles["planet-composition"]}>Gas giant</p>
      </div>
      <div className={styles["reservation-button"]}>
        <Link to="/">
          <span />
          <span />
          <span />
          <span />
          Reservation
        </Link>
      </div>
      <h1 className={styles["planet-hotel-title"]}>Hotel</h1>
      <img src={activity2} alt="biking" className={styles.hotel} />
      <h1 className={styles["planet-activities-title"]}>Activities</h1>
      <img src={activity1} alt="biking" className={styles.activity} />
      <img src={activity1} alt="biking" className={styles.activity} />
    </div>
  );
}

export default PlanetDetail;
