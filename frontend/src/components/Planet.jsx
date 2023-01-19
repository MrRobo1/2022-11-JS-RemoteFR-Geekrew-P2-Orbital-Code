import React from "react";
import PropTypes from "prop-types";

// import { useNavigate } from "react-router-dom";

import styles from "../styles/Planet.module.css";

function Planet({ planetDetail }) {
  // console.log("planetDetail ==", planetDetail);
  // const navigate = useNavigate();

  // const onPressPlanet = () => {
  //   const path = `/planetdetail`;
  //   navigate(path);
  // };

  return (
    <div
      className={`${styles.Planet} ${
        planetDetail ? styles["planet-detail"] : ""
      }`}
      // onClick={onPressPlanet}
      // onKeyDown={onPressPlanet}
      // role="button"
      // tabIndex="0"
    >
      {" "}
    </div>
  );
}

Planet.propTypes = {
  planetDetail: PropTypes.string.isRequired,
};

export default Planet;
