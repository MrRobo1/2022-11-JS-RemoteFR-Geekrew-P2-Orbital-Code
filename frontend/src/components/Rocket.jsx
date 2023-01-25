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
        .Rockets-1 {
          width: 80%;
          height: auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 1rem;
        }

        button.modal-toggle {
          color: rgb(3, 151, 145);
          font-weight: 450;
          background-color: transparent;
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
