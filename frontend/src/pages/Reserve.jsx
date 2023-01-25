import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Reserve.module.css";

function Reserve() {
  const [price, setPrice] = useState(0);
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);
  const [checkbox3, setCheckbox3] = useState(false);

  const handleCheckboxChange = (event) => {
    const { name } = event.target;
    if (name === "checkbox1") {
      setCheckbox1(!checkbox1);
      setCheckbox2(false);
      setCheckbox3(false);
      setPrice(0);
    }
    if (name === "checkbox2") {
      setCheckbox1(false);
      setCheckbox2(!checkbox2);
      setCheckbox3(false);
      setPrice(1000);
    }
    if (name === "checkbox3") {
      setCheckbox1(false);
      setCheckbox2(false);
      setCheckbox3(!checkbox3);
      setPrice(3000);
    }
  };

  return (
    <div className={styles.Container}>
      <div className={styles["Reserv-box"]}>
        <h2>Reservation</h2>
        <form>
          <div className={styles["user-box"]}>
            <input type="text" name="firstName" required="" />
            <label htmlFor="firstName">First Name</label>
          </div>
          <div className={styles["user-box"]}>
            <input type="text" name="lastName" required="" />
            <label htmlFor="lastName">Last Name</label>
          </div>
          <div className={styles["user-box"]}>
            <input type="text" name="mail" required="" />
            <label htmlFor="mail">Mail</label>
          </div>
          <div className={styles["user-box"]}>
            <input type="text" name="phone" required="" />
            <label htmlFor="phone">Phone</label>
          </div>
          <div className={styles["user-box"]}>
            <input type="date" name="depart" required="" />
            <label htmlFor="depart">Departure</label>
          </div>
          <div className={styles["user-box"]}>
            <input type="date" name="retour" required="" />
            <label htmlFor="retour">Return</label>
          </div>
          <div className={styles.ChoiceRock}>
            <label>
              <input
                type="checkbox"
                name="checkbox1"
                checked={checkbox1}
                onChange={handleCheckboxChange}
              />
              Navette Crew Dragon*
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="checkbox2"
                checked={checkbox2}
                onChange={handleCheckboxChange}
              />
              Speeder3000*
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="checkbox3"
                checked={checkbox3}
                onChange={handleCheckboxChange}
              />
              Uss Enterprise*
            </label>
          </div>
          <div className={styles.BtnRocket}>
            <Link to="/">
              <i>*Find out more about means of transport</i>
            </Link>
          </div>
          <p>Supplement Rocket: {price}</p>
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
