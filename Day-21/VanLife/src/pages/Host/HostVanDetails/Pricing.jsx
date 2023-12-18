import React from "react";
import { useSelector } from "react-redux";

const Pricing = () => {
  const { vans: van } = useSelector((state) => state.vans);
  return (
    <div className="flex items-center gap-1">
      <span className="text-2xl font-medium">${van.price}</span>
      <span className="text-base font-medium text-lightgrey">/day</span>
    </div>
  );
};

export default Pricing;
