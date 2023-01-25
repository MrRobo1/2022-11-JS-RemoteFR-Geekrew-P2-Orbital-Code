import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/Accordion.module.css";

function Accordion({ faq, index, toggleFaq }) {
  return (
    <div
      className={styles.faq}
      key={index}
      onClick={() => toggleFaq(index)}
      onKeyDown={() => toggleFaq(index)}
      role="button"
      tabIndex="0"
    >
      <div className={styles["faq-question"]}>
        {faq.question}

        <div className={styles["faq-answer"]}>{faq.answer}</div>
      </div>
    </div>
  );
}

Accordion.propTypes = {
  faq: PropTypes.string.isRequired,
  index: PropTypes.string.isRequired,
  toggleFaq: PropTypes.string.isRequired,
};

export default Accordion;
