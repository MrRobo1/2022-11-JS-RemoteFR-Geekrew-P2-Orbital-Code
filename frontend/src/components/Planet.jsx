import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import styles from "../styles/Planet.module.css";

function Planet({ isPlanetDetail, isPlanetName }) {
  const navigate = useNavigate();
  const onPressPlanet = () => {
    const path = `/planetDetail`;
    setTimeout(() => {
      navigate(path);
    }, 100);
  };

  return (
    <>
      <div
        className={`${styles.Planet} ${
          isPlanetDetail ? styles["planet-detail"] : ""
        }`}
      />
      <button
        type="button"
        onClick={onPressPlanet}
        onKeyDown={onPressPlanet}
        className={`${styles["planet-name"]} ${
          isPlanetName ? styles["no-planet-name"] : ""
        }`}
      >
        PlanetName
      </button>
    </>
  );
}

Planet.propTypes = {
  isPlanetDetail: PropTypes.string.isRequired,
  isPlanetName: PropTypes.string.isRequired,
};

export default Planet;
