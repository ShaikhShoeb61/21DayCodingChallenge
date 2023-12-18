import React from "react";
import Van from "./Van";
import { viewAllVans, hideAllVans } from "../../Redux/Slices/vansSlice";
import { useSelector, useDispatch } from "react-redux";

const VanLayout = () => {
  const viewAllVansState = useSelector((state) => state.vans.viewAllVans);
  const dispatch = useDispatch();
  const handleViewAllClick = () => {
    if (viewAllVansState) {
      dispatch(hideAllVans());
    } else {
      dispatch(viewAllVans());
    }
  };

  return (
    <>
      <div className=" flex flex-col items-center justify-center gap-[0.93rem]">
        <div className="w-full flex justify-between">
          <span className="text-2xl font-bold">Your listed vans</span>
          <span onClick={handleViewAllClick} className="text-base font-medium">
            {viewAllVansState ? "Hide" : "View All"}
          </span>
        </div>
        <Van />
      </div>
    </>
  );
};

export default VanLayout;
