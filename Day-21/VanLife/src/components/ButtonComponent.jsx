import React from "react";

const ButtonComponent = ({ text, bgColor, type }) => {
  return (
    <>
      <button
        type={type ? type : ""}
        className={`w-full py-[0.56rem] text-white font-inter ${
          bgColor ? bgColor : "bg-primarybutton"
        }  rounded-[0.31rem] text-base font-bold leading-[1.97rem]`}
      >
        {text}
      </button>
    </>
  );
};

export default ButtonComponent;
