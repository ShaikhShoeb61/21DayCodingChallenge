import React from "react";
import { NavLink } from "react-router-dom";

const NestedNav = () => {
  return (
    <nav className="px-7">
      <ul className="w-full flex items-start gap-[1.81rem] text-lightgrey font-medium text-base">
        <NavLink
          to="dashboard"
          className={({ isActive }) =>
            isActive ? "text-active border-b-2 border-lightgrey" : ""
          }
        >
          <li>Dashboard</li>
        </NavLink>
        <NavLink
          to="income"
          className={({ isActive }) =>
            isActive ? "text-active border-b-2 border-lightgrey" : ""
          }
        >
          {" "}
          <li>Income</li>
        </NavLink>
        <NavLink
          to="vans/"
          className={({ isActive }) =>
            isActive ? "text-active border-b-2 border-lightgrey" : ""
          }
        >
          <li>Vans</li>
        </NavLink>
        <NavLink
          to="reviews"
          className={({ isActive }) =>
            isActive ? "text-active border-b-2 border-lightgrey" : ""
          }
        >
          <li>Reviews</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default NestedNav;
