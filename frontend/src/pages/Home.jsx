import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "../styles/Home.module.css";

import earthImg from "../assets/earth.png";

function Home() {
  const [launchRocket, setLaunchRocket] = useState(false);
  const [hideThings, setHideThings] = useState(false);
  const navigate = useNavigate();

  const redirectPath = () => {
    setHideThings(true);
    setLaunchRocket(!launchRocket);
    const path = `/planets`;
    setTimeout(() => {
      navigate(path);
    }, 1500);
  };

  return (
    <div className={styles.container}>
      <h1
        className={`${styles.title} ${hideThings ? styles["hide-things"] : ""}`}
      >
        Galaxy Getaways
      </h1>
      <h1
        className={`${styles.slogan}  ${
          hideThings ? styles["hide-things"] : ""
        }`}
      >
        Explore the cosmos beyond the imaginable!
      </h1>
      <div
        id="rocket"
        className={`${styles["rocket-wrapper"]} ${
          launchRocket ? styles["rocket-launched"] : ""
        }`}
      >
        <img
          className={styles.rocket}
          src="https://ig.solcode.net/src/rocket.svg"
          alt="rocket"
        />
        <div className={styles["flame-wrapper"]}>
          <div className={styles["flame-anim"]}>
            <div className={`${styles.flame} ${styles.red}`} />
            <div className={`${styles.flame} ${styles.orange}`} />
            <div className={`${styles.flame} ${styles.gold}`} />
            <div className={`${styles.flame} ${styles.white}`} />
          </div>
        </div>
      </div>
      <button
        type="button"
        className={`${styles["button-redirect"]} ${
          hideThings ? styles["hide-things"] : ""
        }`}
        onClick={() => redirectPath()}
      >
        Ready for Launch
      </button>
      <img src={earthImg} alt="earth" className={styles.earth} />
    </div>
  );
}

export default Home;
