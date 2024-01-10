"use client";
import { useState } from "react";

interface CartProps {
  value?: number;
}

export const CartCounter = ({ value = 0 }: CartProps) => {
  const [counter, setCounter] = useState(value);

  const handleIncrement = (): void => {
    setCounter(counter + 1);
  };

  const handleDecrement = (): void => {
    setCounter(counter - 1);
  };

  return (
    <>
      <span className="text-9xl">{counter}</span>

      <div className="flex">
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
          onClick={handleIncrement}
        >
          +1
        </button>

        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px]"
          onClick={handleDecrement}
        >
          -1
        </button>
      </div>
    </>
  );
};
