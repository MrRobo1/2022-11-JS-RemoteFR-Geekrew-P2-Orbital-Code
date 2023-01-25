import React from "react";
import ReactDom from "react-dom";
import PropTypes from "prop-types";

function Modal({ isShowing, hide }) {
  return isShowing
    ? ReactDom.createPortal(
        <>
          <div className="modal-overlay">
            <div className="modal-wrapper">
              <div className="modal">
                <div className="modal-header">
                  <h4 className="modal-name">Modal Header</h4>
                  <button
                    type="button"
                    className="modal-close-button"
                    onClick={hide}
                  >
                    <span>&times;</span>
                  </button>
                </div>
                <div className="modal-body">Hello Modal Here</div>
              </div>
            </div>
          </div>

          <style jsx="true">{`
            .modal-overlay {
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              z-index: 250;
              background-color: rgba(0, 0, 0, 0.5);
            }

            .modal-wrapper {
              position: fixed;
              top: 0;
              left: 0;
              z-index: 1050;
              width: 100%;
              height: 100%;
              overflow-x: hidden;
              overflow-y: auto;
              outline: 0;
              display: flex;
              align-items: center;
            }

            .modal {
              z-index: 100;
              background: rgba(255, 255, 255, 0.7);
              position: relative;
              margin: auto;
              border: 0.2rem solid rgba(3, 151, 145, 1);
              border-radius: 5px;
              max-width: 500px;
              width: 80%;
              padding: 1rem;
            }

            .modal-header {
              display: flex;
              justify-content: space-between;
              align-items: center;
            }

            .modal-name {
              align-content: center;
              text-align: center;
              color: rgb(3, 151, 145);
              font-size: large;
            }

            .modal-close-button {
              font-size: 1.4rem;
              font-weight: 700;
              color: rgba(3, 151, 145, 1);
              cursor: pointer;
              border: none;
              background: transparent;
            }
          `}</style>
        </>,
        document.body
      )
    : null;
}

Modal.propTypes = {
  isShowing: PropTypes.bool.isRequired,
  hide: PropTypes.func.isRequired,
};
export default Modal;
