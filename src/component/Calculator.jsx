import React, { useState } from "react";
import "./Calculator.css";
import NumericButton from "./NumericButton";
import ArithmeticButton from "./ArithmeticButton";

const Calculator = () => {
  const [input, setInput] = useState("");
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];
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

  const clear = () => {
    setInput("");
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
      opperation: "/",
      css: "calculator-button c1",
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

        {numbers.map((number) => (
          <NumericButton key={number} value={number} onClick={handleClick} />
        ))}

        {arithmaticOperations.map(({ id, opperation, css, functionlity }) => (
          <ArithmeticButton
            id={id}
            opperation={opperation}
            css={css}
            functionlity={() => functionlity(opperation)}
          />
        ))}

        <br />
        <button className="calculator-button1" onClick={clear}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default Calculator;
