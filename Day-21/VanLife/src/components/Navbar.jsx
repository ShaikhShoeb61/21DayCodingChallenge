import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../Redux/Slices/Thunks/authThunk";

const Navbar = () => {
  const dispatch = useDispatch();
  const [logoutDropdown, setLogoutDropdown] = useState(false);
  const { user } = useSelector((state) => state.auth);

  const handleLogoutDropdown = () => {
    setLogoutDropdown((prev) => !prev);
  };

  const handleLogout = async () => {
    dispatch(logout());
    setLogoutDropdown(false);
  };

  return (
    <nav className="px-7">
      <div className="w-full h-20 flex justify-between items-center">
        <h1 className="flex font-black text-2xl text-black">#VANLIFE</h1>
        <ul className="list-none flex gap-3 text-lightgrey font-semibold text-base">
          <NavLink
            to="host/dashboard"
            className={({ isActive }) =>
              isActive ? "text-active border-b-2 border-lightgrey" : ""
            }
          >
            <li>Host</li>
          </NavLink>
          <NavLink
            to="vans"
            className={({ isActive }) =>
              isActive ? "text-active border-b-2 border-lightgrey" : ""
            }
          >
            <li>Vans</li>
          </NavLink>
          <NavLink
            to="about"
            className={({ isActive }) =>
              isActive ? "text-active border-b-2 border-lightgrey" : ""
            }
          >
            <li>About</li>
          </NavLink>
          {
            <>
              {user !== null && user && (
                <img
                  onClick={handleLogoutDropdown}
                  className="relative"
                  src=".\icons\User_circle.png"
                  alt="user"
                />
              )}
              {logoutDropdown && (
                <button
                  className="text-xs font-extrabold font-inter "
                  onClick={handleLogout}
                >
                  Logout
                </button>
              )}
            </>
          }
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
