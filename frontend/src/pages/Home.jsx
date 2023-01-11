import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Home.module.css";
import earthImg from "../assets/earth.png";

function Home() {
  const navigate = useNavigate();

  const redirectPath = () => {
    const path = `/planets`;
    navigate(path);
  };

  return (
    <div className={styles.container}>
      <h1>Explore the cosmos beyond the imaginable!</h1>
      <button
        type="button"
        className={styles["button-redirect"]}
        onClick={() => redirectPath()}
      >
        Ready for Launch
      </button>
      <img src={earthImg} alt="earth" className={styles.earth} />
    </div>
  );
}

export default Home;
