import React from "react";
import useModal from "./useModal";
import Modal from "./modal";
import styles from "../styles/Rockets.module.css";

function Rocket() {
  const { isShowing, toggle } = useModal();
  return (
    <>
      <div className={styles["Rockets-list"]}>
        <div className={styles["Rockets-1"]}>
          <h2 className={styles["Rockets-1-name"]}>Rocket 1</h2>
          <img className="Rockets-1-img" src="" alt="Rocket-1" />
          <button type="button" className="modal-toggle" onClick={toggle}>
            Show more
          </button>
          <Modal isShowing={isShowing} hide={toggle} />
        </div>
      </div>

      <style jsx="true">{`
        .Rockets-1-name {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        button.modal-toggle {
          background-color: turquoise;
          cursor: pointer;
          padding: 1rem 2rem;
          text-transform: uppercase;
          border: none;
        }
      `}</style>
    </>
  );
}

export default Rocket;
