import React from "react";
import { useSelector } from "react-redux";

const Details = () => {
  const { vans: van } = useSelector((state) => state.vans);

  return (
    <>
      <div className="flex gap-[0.2rem]">
        <span className="text-[0.89rem] font-bold">Name:</span>
        <span className="text-[0.89rem] font-medium">{van.name}</span>
      </div>
      <div className="flex gap-[0.2rem]">
        <span className="text-[0.89rem] font-bold">Category:</span>
        <span className="text-[0.89rem] font-medium">{van.type}</span>
      </div>
      <div className="flex flex-col mb-4">
        <span className="text-sm font-bold mb-2">Description:</span>
        <p className="text-sm font-medium">{van.description}</p>
      </div>
      <div className="flex gap-[0.2rem]">
        <span className="text-[0.89rem] font-bold">Visibility:</span>
        <span className="text-[0.89rem] font-medium">Public</span>
      </div>
    </>
  );
};

export default Details;
