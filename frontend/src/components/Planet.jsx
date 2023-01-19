import React from "react";
import PropTypes from "prop-types";

import styles from "../styles/Planet.module.css";

function Planet({ planetDetail }) {
  return (
    <div
      className={`${styles.Planet} ${
        planetDetail ? styles["planet-detail"] : ""
      }`}
    >
      {" "}
    </div>
  );
}

Planet.propTypes = {
  planetDetail: PropTypes.string.isRequired,
};

export default Planet;
