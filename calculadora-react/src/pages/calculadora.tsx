import React from "react";
import Button from "../components/button";

const calculadora = () => {
  const [numbersList, setNumbersList] = React.useState([]);
  const [currentNumber, setCurrentNumber] = React.useState<number | null>(null);
  const [storedNumber, setStoredNumber] = React.useState<number | null>(null);
  const [operator, setOperator] = React.useState<string | null>(null);
  const [operationResult, setOperationResult] = React.useState<number | null>(
    null
  );
  const [finalResult, setFinalResult] = React.useState<number | null>(null);

  function operation(num1: number, num2: number, operator: string) {
    let operacionResultado: number | null;

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

    console.log("El resultado es ", { operacionResultado });

    return operacionResultado;
  }

  function addCurrent(digit: number) {
    setCurrentNumber((prev) => Number(`${prev ?? ""}${digit}`));
    console.log("Number selected");
  }

  function handleOperator(operator: string) {
    if (currentNumber != null) {
      setStoredNumber(currentNumber);
      setCurrentNumber(null);
      setOperator(operator);
      console.log("Operator selected");
    } else {
      console.log("You have to select number first!");
    }
  }

  function addNumber(resultado: number | null) {
    setNumbersList((prev) => [...prev, resultado]);
    numbersList.forEach((numero) => {
      console.log(numero);
    });
  }

  function handleEquals() {
    let result;
    if (currentNumber != null && storedNumber != null && operator != null) {
      result = operation(currentNumber, storedNumber, operator);
      setOperationResult(result);
      addNumber(result);
      handleFinalResult();
      return result;
    }
  }

  function handleFinalResult() {
    const finalResultSum = sum();
    setFinalResult(finalResultSum);
  }

  function sum() {
    let acc = 0;

    numbersList.forEach((number) => {
      acc += number;
    });
    return acc;
  }

  function handleReset() {
    setNumbersList([]);
  }

  return (
    <div className="container">
      <h1>Bienvenidos a la gran calculadora!</h1>

      <div className="row">
        <div className="col-12 col-md-6 col-lg-4 p-3">
          <Button number={1} onClick={addCurrent}></Button>
        </div>
        <div className="col-12 col-md-6 col-lg-4 p-3">
          <Button number={2} onClick={addCurrent}></Button>
        </div>
        <div className="col-12 col-md-6 col-lg-4 p-3">
          <Button number={3} onClick={addCurrent}></Button>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 col-lg-4 p-3">
          <Button number={4} onClick={addCurrent}></Button>
        </div>
        <div className="col-12 col-md-6 col-lg-4 p-3">
          <Button number={5} onClick={addCurrent}></Button>
        </div>
        <div className="col-12 col-md-6 col-lg-4 p-3">
          <Button number={6} onClick={addCurrent}></Button>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 col-lg-4 p-3">
          <Button number={7} onClick={addCurrent}></Button>
        </div>
        <div className="col-12 col-md-6 col-lg-4 p-3">
          <Button number={8} onClick={addCurrent}></Button>
        </div>
        <div className="col-12 col-md-6 col-lg-4 p-3">
          <Button number={9} onClick={addCurrent}></Button>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-md-6 col-lg-4 p-3">
          <Button number={0} onClick={addCurrent}></Button>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 col-lg-4 p-3">
          <Button operator="+" onClick={handleOperator}></Button>
        </div>
        <div className="col-12 col-md-6 col-lg-4 p-3">
          <Button operator="-" onClick={handleOperator}></Button>
        </div>
        <div className="col-12 col-md-6 col-lg-4 p-3">
          <Button operator="*" onClick={handleOperator}></Button>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-md-6 col-lg-4 p-3">
          <Button operator="/" onClick={handleOperator}></Button>
        </div>
        <div className="col-12 col-md-6 col-lg-4 p-3">
          <button
            style={{
              padding: "1rem 2rem",
              fontSize: "1.25rem",
              width: "100%",
              maxWidth: "300px",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              marginRight: "10px",
            }}
            onClick={handleEquals}
          >
            =
          </button>
        </div>
        <div className="col-12 col-md-6 col-lg-4 p-3">
          <button
            style={{
              padding: "1rem 2rem",
              fontSize: "1.25rem",
              width: "100%",
              maxWidth: "300px",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              marginRight: "10px",
            }}
            onClick={handleReset}
          >
            C
          </button>
        </div>
      </div>

      {operationResult !== null && (
        <h2>Resultado operación: {operationResult}</h2>
      )}

      {finalResult !== null && <h1>Resultado final: {finalResult}</h1>}
    </div>
  );
};

export default calculadora;
