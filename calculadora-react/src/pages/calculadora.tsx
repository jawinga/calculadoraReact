import React from "react";

const calculadora = () => {
  const [numbersList, setNumbersList] = React.useState([]);

  let operacionResultado: number;

  function operation(num1: number, num2: number, operator: string) {
    switch (operator) {
      case "+":
        operacionResultado = num1 + num2;
        break;
      case "-":
        operacionResultado = num1 - num2;
        break;
      case "*":
        operacionResultado = num1 * num2;
        break;
      case "/":
        operacionResultado = num2 !== 0 ? num1 / num2 : null;
        break;
      default:
        operacionResultado = null;
    }

    addNumber();
    sum();

    return operacionResultado;
  }

  function addNumber() {
    setNumbersList((prev) => [...prev, operacionResultado]);
  }

  function sum() {
    let acc = 0;
    numbersList.forEach((number) => {
      acc += number;
    });
    return acc;
  }

  return (
    <div>
      <button onClick={}></button>
    </div>
  );
};

export default calculadora;
