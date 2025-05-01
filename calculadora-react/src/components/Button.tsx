import React from "react";
console.log("🔍 Button.tsx module loaded"); // ← add this

type Props =
  | { number: number; operator?: never; onClick: (value: number) => void }
  | { operator: string; number?: never; onClick: (value: string) => void };

const Button = ({ number, operator, onClick }: Props) => {
  return (
    <button
      className={`w-100 h-100 py-4 btn ${
        number ? "btn-primary" : "btn-secondary"
      }`}
      onClick={() => {
        console.log("🔘 Button clicked:", { number, operator });
        if (number !== undefined) {
          onClick(number);
        } else if (operator !== undefined) {
          onClick(operator);
        }
      }}
    >
      {number !== undefined ? number : operator}
    </button>
  );
};

export default Button;
