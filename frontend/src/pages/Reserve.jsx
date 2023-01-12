import React, { useState } from "react";
import styles from "../styles/Reserve.module.css";

function Reserve() {
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);
  const [checkbox3, setCheckbox3] = useState(false);

  return (
    <div className={styles.Container}>
      <div className={styles["Reserv-box"]}>
        <h2>Réservation</h2>
        <form>
          <div className={styles["user-box"]}>
            <label>
              <input type="text" name="firstName" required="" />
              Prénom
            </label>
          </div>
          <div className={styles["user-box"]}>
            <input type="text" name="lastName" required="" />
            <label>
              <input type="text" name="lastName" required="" />
              Nom
            </label>
          </div>
          <div className={styles["user-box"]}>
            <input type="text" name="mail" required="" />
            <label>
              <input type="text" name="mail" required="" />
              E-mail
            </label>
          </div>
          <div className={styles["user-box"]}>
            <input type="text" name="phone" required="" />
            <label>
              <input type="text" name="phone" required="" />
              Téléphone
            </label>
          </div>
          <div className={styles["user-box"]}>
            <input type="date" name="depart" required="" />
            <label>
              <input type="date" name="depart" required="" />
              Départ
            </label>
          </div>
          <div className={styles["user-box"]}>
            <input type="date" name="retour" required="" />
            <label>
              <input type="date" name="retour" required="" />
              Retour
            </label>
          </div>
          <div className={styles.ChoiceRock}>
            <label>
              <input
                type="checkbox"
                checked={checkbox1}
                onChange={(event) => setCheckbox1(event.target.checked)}
              />
              Fusée 1
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                checked={checkbox2}
                onChange={(event) => setCheckbox2(event.target.checked)}
              />
              Fusée 2
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                checked={checkbox3}
                onChange={(event) => setCheckbox3(event.target.checked)}
              />
              Fusée 3
            </label>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Reserve;
