import React from "react";

const NumericButton = ({ value, onClick }) => {
  return (
    <button className="calculator-button" onClick={() => onClick(value)}>
      {value}
    </button>
  );
};

export default NumericButton;
