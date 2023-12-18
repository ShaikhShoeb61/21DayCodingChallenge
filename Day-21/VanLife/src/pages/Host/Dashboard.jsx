import React from "react";
import VanLayout from "../../components/feature/VanLayout";

const Dashboard = () => {
  return (
    <div className=" px-7 flex flex-col gap-[2.38rem]">
      <div className="flex gap-[1.9rem] items-center justify-between px-[1.62rem] py-[2.31rem] round-[0.31rem] bg-primarylight">
        <div className="flex flex-col gap-[1.93rem]">
          <h1 className="text-3xl font-bold ">Welcome!</h1>
          <div className="flex gap-1">
            <p className="text-base font-medium">Income last</p>
            <p className="text-base font-bold underline">30 days</p>
          </div>
          <h1 className="text-3xl font-bold ">$748</h1>
        </div>
        <span className="text-base font-medium">Details</span>
      </div>
      <div className="flex justify-between px-[1.62rem] py-[2.62rem] rounded-[0.31rem] bg-primarydark">
        <span className="text-2xl font-bold">Review score</span>
        <div className="flex gap-[0.12rem] items-center justify-center">
          <img className="w-[1.66rem]" src="\icons\Star.png" alt="star" />
          <span className="text-xl font-bold">4.0</span>
          <span className="text-xl font-medium text-darkgrey">/5</span>
        </div>
        <span className="text-base font-medium">Details</span>
      </div>
      <VanLayout />
    </div>
  );
};

export default Dashboard;
