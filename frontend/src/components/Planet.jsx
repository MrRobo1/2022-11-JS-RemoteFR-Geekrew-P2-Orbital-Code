import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import styles from "../styles/Planet.module.css";

function Planet({ planetDetail }) {
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
          planetDetail ? styles["planet-detail"] : ""
        }`}
      />
      <button
        type="button"
        onClick={onPressPlanet}
        onKeyDown={onPressPlanet}
        className={styles["planet-name"]}
      >
        PlanetName
      </button>
    </>
  );
}

Planet.propTypes = {
  planetDetail: PropTypes.string.isRequired,
};

export default Planet;
