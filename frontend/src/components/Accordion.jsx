import React from "react";
import PropTypes from "prop-types";

function Accordion({ faq, index, toggleFaq }) {
  return (
    <div
      key={index}
      onClick={() => toggleFaq(index, faq)}
      onKeyDown={() => toggleFaq(index, faq)}
      role="button"
      tabIndex="0"
    >
      <div>
        {faq.question}

        <div>{faq.answer}</div>
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
