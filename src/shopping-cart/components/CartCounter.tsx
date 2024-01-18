"use client";
import {
  addOne,
  initCounterState,
  substractOne,
} from "@/store/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useEffect } from "react";

interface CartProps {
  value?: number;
}

interface CounterApi {
  count: number;
}

const getApiCounter = async (): Promise<CounterApi> => {
  const response = await fetch("/api/counter");
  const data = await response.json();
  return data;
};

export const CartCounter = ({ value = 0 }: CartProps) => {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  const handleIncrement = (): void => {
    dispatch(addOne());
  };

  const handleDecrement = (): void => {
    dispatch(substractOne());
  };

  // useEffect(() => {
  //   dispatch(initCounterState(value));
  // }, [dispatch, value]);

  useEffect(() => {
    getApiCounter().then(({ count }) => dispatch(initCounterState(count)));
  }, [dispatch]);

  return (
    <>
      <span className="text-9xl">{count}</span>

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
