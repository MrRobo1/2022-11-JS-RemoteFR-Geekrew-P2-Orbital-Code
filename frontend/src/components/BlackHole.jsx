import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "../styles/BlackHole.module.css";

function BlackHole() {
  const navigate = useNavigate();
  const onPressBlackHole = () => {
    const path = `/planetDetail`;
    setTimeout(() => {
      navigate(path);
    }, 100);
  };

  return (
    <>
      <b className={styles.b} />
      <button
        type="button"
        onClick={onPressBlackHole}
        onKeyDown={onPressBlackHole}
        className={styles["black-hole-name"]}
      >
        BlackHole
      </button>
    </>
  );
}
export default BlackHole;
