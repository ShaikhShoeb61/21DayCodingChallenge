import React from "react";
import { Outlet } from "react-router-dom";
import NestedNav from "../../components/feature/NestedNav";

const Host = () => {
  return (
    <>
      <div className="min-h-[calc(100vh-148px)] py-[2.38rem] flex flex-col gap-[2.8rem]">
        <NestedNav />
        <Outlet />
      </div>
    </>
  );
};

export default Host;
