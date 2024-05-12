import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [input, setInput] = useState(""); // استخدام useReducer هنا

  const handleClick = (value) => {
    setInput(input + value);
  };

  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  const arithmaticOperations = [
    {
      opperation: "+",
      css: "calculator-button c1",
      functionlity: handleClick,
      id: "1",
    },
    {
      opperation: "-",
      css: "calculator-button c1",
      functionlity: handleClick,
      id: "2",
    },
    {
      opperation: "*",
      css: "calculator-button c1",
      functionlity: handleClick,
      id: "3",
    },
    {
      opperation: "%",
      css: "calculator-button c2",
      functionlity: handleClick,
      id: "4",
    },
    {
      opperation: "=",
      css: "calculator-button c2",
      functionlity: calculate,
      id: "5",
    },
  ];

  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];

  const clear = () => {
    setInput("");
  };

  return (
    <div className="calculator-container">
      <div>
        <input
          className="calculator-input"
          type="text"
          value={input}
          readOnly
        />
        <br />
        {numbers.map((number, index) => (
          <button
            key={index}
            className="calculator-button"
            onClick={() => handleClick(number)}
          >
            {number}
          </button>
        ))}
        {arithmaticOperations.map(({ id, opperation, css, functionlity }) => (
          <button
            key={id}
            className={css}
            onClick={() => functionlity(opperation)}
          >
            {opperation}
          </button>
        ))}
        <br />
        <button className="calculator-button1" onClick={() => clear()}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default Calculator;
