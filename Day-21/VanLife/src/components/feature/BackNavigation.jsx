import React from "react";
import { Link } from "react-router-dom";

const BackNavigation = () => {
  return (
    <>
      <div className="flex gap-[0.69rem] items-center">
        <i class="ri-arrow-left-s-line ri-xl "></i>{" "}
        <span className="font-medium text-base underline underline-offset-[3px]">
          Back to all vans
        </span>
      </div>
    </>
  );
};

export default BackNavigation;
