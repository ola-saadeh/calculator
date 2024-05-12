import React from "react";

const ArithmeticButton = ({ operation, onClick, css }) => {
  return (
    <button className={css} onClick={() => onClick(operation)}>
      {operation}
    </button>
  );
};

export default ArithmeticButton;
