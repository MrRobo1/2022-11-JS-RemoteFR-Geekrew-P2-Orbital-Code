import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/Navbar.module.css";
import logoImg from "../assets/logo.png";
import burgerImg from "../assets/menu-btn.png";

function Navbar() {
  const activeStyle = ({ isActive }) => {
    if (isActive) return { color: "#fff" };
    return undefined;
  };

  return (
    <header>
      <nav className={styles.navbar}>
        <a href="/" className={styles["navbar-brand"]}>
          <img src={logoImg} alt="logo" className={styles.logo} />
        </a>

{ isActive ? <button type="button" className={styles["burger-menu"]}>
          <img
            src={burgerImg}
            alt="burger menu"
            className={styles["burger-img"]}
          />
        </button>}
        
        <div className={styles["nav-links"]}>
          <ul>
            <li className={styles.active}>
              <NavLink to="/" style={activeStyle}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/planets" style={activeStyle}>
                Planets
              </NavLink>
            </li>
            <li>
              <NavLink to="/rockets" style={activeStyle}>
                Rockets
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
