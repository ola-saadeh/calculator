import React from "react";

const ArithmeticButton = ({ id, opperation, css, functionlity}) => {
  
  return (
    <button className={css} onClick={functionlity}>
      {opperation}
    </button>
  );
};

export default ArithmeticButton;
