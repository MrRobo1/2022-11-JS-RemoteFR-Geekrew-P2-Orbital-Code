import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/Navbar.module.css";
import logoImg from "../assets/logo.png";
import burgerImg from "../assets/menu-btn.png";

function Navbar() {
  // const onPressBurger = () => {

  // }

  return (
    <header>
      <nav className={styles.navbar}>
        <a href="index.html" className={styles["navbar-brand"]}>
          <img src={logoImg} alt="logo" className={styles.logo} />
        </a>
        <button
          type="button"
          className={styles["burger-menu"]}
          // onClick={() => onPressBurger()}
        >
          <img
            src={burgerImg}
            alt="burger menu"
            className={styles["burger-img"]}
          />
        </button>
        <div className={styles["nav-links"]}>
          <ul>
            <li className={styles.active}>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/planets">Planets</NavLink>
            </li>
            <li>
              <NavLink to="/rockets">Rockets</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
