import React from "react";
import classNames from "classnames";

const TypeComponent = ({ type }) => {
  const containerClasses = classNames({
    "bg-simple": type?.toLowerCase() === "simple",
    "bg-rugged": type?.toLowerCase() === "rugged",
    "bg-luxury": type?.toLowerCase() === "luxury",
  });

  return (
    <div>
      {type && (
        <button
          className={`${containerClasses} border-none px-[0.8rem]  py-[0.12rem] rounded-md text-white text-base font-medium flex justify-center items-center capitalize leading-[1.97rem]`}
        >
          {type}
        </button>
      )}
    </div>
  );
};

export default TypeComponent;
