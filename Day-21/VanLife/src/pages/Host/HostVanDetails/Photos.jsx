import React from "react";
import { useSelector } from "react-redux";

const Photos = () => {
  const { vans: van } = useSelector((state) => state.vans);
  return (
    <>
      <img
        className="w-[6.4rem] rounded-[0.31rem]"
        src={van.imageUrl}
        alt="van-photo"
      />
    </>
  );
};

export default Photos;
