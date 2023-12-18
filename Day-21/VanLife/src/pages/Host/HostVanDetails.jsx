import React, { useEffect } from "react";
import TypeComponent from "../../components/TypeComponent";
import BackNavigation from "../../components/feature/BackNavigation";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getVan } from "../../Redux/Slices/Thunks/vansThunk";
import { Link } from "react-router-dom";

const HostVanDetails = () => {
  const dispatch = useDispatch();
  const { vans: van } = useSelector((state) => state.vans);
  const { vanId } = useParams();

  useEffect(() => {
    dispatch(getVan(vanId));
  }, [dispatch, vanId]);

  return (
    <>
      <div className="min-h-[calc(100vh-148px)] px-7 flex flex-col items-start gap-[1.62rem]">
        <Link to="." absolute="path">
          <BackNavigation />
        </Link>
        <div className="flex  items-start flex-col gap-5">
          <div className="flex items-center gap-5">
            <img
              className="w-40 rounded-[0.31rem]"
              src={van.imageUrl}
              alt="van"
            />
            <div className="flex flex-col items-start gap-[1.12rem]">
              <TypeComponent type={van.type} />
              <div className="flex flex-col items-start gap-[0.06rem]">
                <span className="text-[1.62rem] font-bold">{van.name}</span>
                <span className="text-[1.22rem] font-bold">
                  ${van.price}/day
                </span>
              </div>
            </div>
          </div>
          <ul className="w-full flex items-start gap-[1.81rem] text-lightgrey font-medium text-base">
            <NavLink
              to="details"
              className={({ isActive }) =>
                isActive ? "text-active border-b-2 border-lightgrey" : ""
              }
            >
              <li>Details</li>
            </NavLink>
            <NavLink
              to="pricing"
              className={({ isActive }) =>
                isActive ? "text-active border-b-2 border-lightgrey" : ""
              }
            >
              {" "}
              <li>Pricing</li>
            </NavLink>
            <NavLink
              to="photos"
              className={({ isActive }) =>
                isActive ? "text-active border-b-2 border-lightgrey" : ""
              }
            >
              <li>Photos</li>
            </NavLink>
          </ul>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default HostVanDetails;
