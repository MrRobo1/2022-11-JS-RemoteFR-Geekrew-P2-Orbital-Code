import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Reserve.module.css";

function Reserve() {
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);
  const [checkbox3, setCheckbox3] = useState(false);

  const handleCheckboxChange = (event) => {
    const { name } = event.target;
    if (name === "checkbox1") {
      setCheckbox1(!checkbox1);
      setCheckbox2(false);
      setCheckbox3(false);
    }
    if (name === "checkbox2") {
      setCheckbox1(false);
      setCheckbox2(!checkbox2);
      setCheckbox3(false);
    }
    if (name === "checkbox3") {
      setCheckbox1(false);
      setCheckbox2(false);
      setCheckbox3(!checkbox3);
    }
  };

  return (
    <div className={styles.Container}>
      <div className={styles["Reserv-box"]}>
        <h2>Réservation</h2>
        <form>
          <div className={styles["user-box"]}>
            <input type="text" name="firstName" required="" />
            <label htmlFor="firstName">Prénom</label>
          </div>
          <div className={styles["user-box"]}>
            <input type="text" name="lastName" required="" />
            <label htmlFor="lastName">Nom</label>
          </div>
          <div className={styles["user-box"]}>
            <input type="text" name="mail" required="" />
            <label htmlFor="mail">E-mail</label>
          </div>
          <div className={styles["user-box"]}>
            <input type="text" name="phone" required="" />
            <label htmlFor="phone">Téléphone</label>
          </div>
          <div className={styles["user-box"]}>
            <input type="date" name="depart" required="" />
            <label htmlFor="depart">Départ</label>
          </div>
          <div className={styles["user-box"]}>
            <input type="date" name="retour" required="" />
            <label htmlFor="retour">Retour</label>
          </div>
          <div className={styles.ChoiceRock}>
            <label>
              <input
                type="checkbox"
                name="checkbox1"
                checked={checkbox1}
                onChange={handleCheckboxChange}
              />
              Navette Crew Dragon
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="checkbox2"
                checked={checkbox2}
                onChange={handleCheckboxChange}
              />
              USS Enterprise
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="checkbox3"
                checked={checkbox3}
                onChange={handleCheckboxChange}
              />
              StarSpeeder 3000
            </label>
          </div>
          <div className={styles.BtnRocket}>
            <Link to="/">
              <i>En savoir plus sur les moyens de transport</i>
            </Link>
          </div>
          <Link to="/recap">
            <span />
            <span />
            <span />
            <span />
            Reservation
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Reserve;
