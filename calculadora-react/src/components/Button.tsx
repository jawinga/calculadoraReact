import React from "react";
console.log("🔍 Button.tsx module loaded"); // ← add this

type Props =
  | { number: number; operator?: never; onClick: (value: number) => void }
  | { operator: string; number?: never; onClick: (value: string) => void };

const Button = ({ number, operator, onClick }: Props) => {
  return (
    <button
      onClick={() => {
        console.log("🔘 Button clicked:", { number, operator });
        if (number !== undefined) {
          onClick(number);
        } else if (operator !== undefined) {
          onClick(operator);
        }
      }}
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
        backgroundColor: number ? "gray" : "green",
      }}
    >
      {number !== undefined ? number : operator}
    </button>
  );
};

export default Button;
