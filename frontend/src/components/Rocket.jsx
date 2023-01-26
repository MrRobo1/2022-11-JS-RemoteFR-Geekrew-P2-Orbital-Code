import React from "react";
import useModal from "./useModal";
import Modal from "./modal";
import styles from "../styles/Rockets.module.css";

function Rocket() {
  const { isShowing, toggle } = useModal();
  return (
    <>
      <div className={styles["Rockets-1"]}>
        <h2 className={styles["Rockets-1-name"]}>Rocket 1</h2>
        <img className={styles["Rockets-1-img"]} src="" alt="Rocket-1" />
        <button type="button" className="modal-toggle" onClick={toggle}>
          Show more
          <span />
          <span />
          <span />
          <span />
        </button>
        <Modal isShowing={isShowing} hide={toggle} />
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
          font-family: "Orbitron", sans-serif;
          font-size: large;
          letter-spacing: 0.15rem;
          color: rgb(3, 151, 145);
          font-weight: 450;
          background-color: transparent;
          cursor: pointer;
          padding: 1rem 2rem;
          text-transform: uppercase;
          border: none;
        }

        button.modal-toggle:hover {
          background: rgb(3, 151, 145);
          color: rgba(255, 255, 255, 0.816);
          border-radius: 5px;
          box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
            0 0 100px #03e9f4;
        }
      `}</style>
    </>
  );
}

export default Rocket;
