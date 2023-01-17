import React from "react";

import { useNavigate } from "react-router-dom";

import styles from "../styles/Planet.module.css";

// eslint-disable-next-line react/prop-types
function Planet({ planetDetail }) {
  const navigate = useNavigate();

  const onPressPlanet = () => {
    const path = `/planetdetail`;
    navigate(path);
  };

  return (
    <div
      className={`${styles.Planet} ${
        planetDetail ? styles["planet-detail"] : ""
      }`}
      onClick={onPressPlanet}
      onKeyDown={onPressPlanet}
      role="button"
      tabIndex="0"
    >
      {" "}
    </div>
  );
}
export default Planet;
