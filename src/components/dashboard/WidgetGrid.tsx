"use client";
import { IoCartOutline } from "react-icons/io5";
import { SimpleWidget } from "..";
import { useAppSelector } from "@/store/store";

const widgetProps = {
  label: "Contador",
  subtitle: "Carrito de compras",
  icon: <IoCartOutline size={50} className="text-blue-700" />,
  href: "/dashboard/counter",
};

export const WidgetGrid = () => {
  const { count } = useAppSelector((state) => state.counter);

  return (
    <div className="flex flex-wrap p-3 justify-center items-center">
      <SimpleWidget {...widgetProps} title={`${count}`} />
      {/* <SimpleWidget /> */}
    </div>
  );
};
