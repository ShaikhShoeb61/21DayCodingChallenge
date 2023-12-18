import React from "react";

const Income = () => {
  return (
    <>
      <div className="px-7 flex flex-col items-start gap-[3.56rem]">
        <div className="flex flex-col items-start gap-[2.3rem]">
          <span className="text-[2.25rem] font-bold">Income</span>
          <span className="text-base font-medium">Last</span>
          <span className="text-base font-bold underline">30 days</span>
          <span className="text-5xl font-extrabold">$748</span>
        </div>
        <div>
          <img src="\icons\Income Graph.png" alt="income_graph" />
        </div>
        <div className="w-full flex justify-between items-start">
          <span className="text-2xl font-bold">Your transactions (3)</span>
          <span className="text-base font-medium">Last 30 days</span>
        </div>
        <div className="w-full flex flex-col items-start gap-[0.62rem]">
          <div className="w-full flex justify-between items-center px-6 py-6  border-[1px]">
            <span className="text-[2.25rem] font-semibold">$350</span>
            <span className="text-[1.25rem] text-lightgrey font-medium">
              03/11/22
            </span>
          </div>
          <div className="w-full flex justify-between items-center px-6 py-6  border-[1px]">
            <span className="text-[2.25rem] font-semibold">$254</span>
            <span className="text-[1.25rem] text-lightgrey font-medium">
              22/12/22
            </span>
          </div>
          <div className="w-full flex justify-between items-center px-6 py-6  border-[1px]">
            <span className="text-[2.25rem] font-semibold">$144</span>
            <span className="text-[1.25rem] text-lightgrey font-medium">
              15/12/22
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Income;
