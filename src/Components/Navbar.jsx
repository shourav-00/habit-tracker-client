import React from "react";
import logoImg from "../assets/logoavif.avif";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex justify-between items-center h-16 w-full">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <img className="w-12" src={logoImg} alt="Logo" />
            <h2 className="font-bold text-xl">DailyPulse</h2>
          </div>

          {/* Desktop NavLinks */}
          <div className="hidden md:flex items-center gap-6">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? "text-[#2EA0B6] font-semibold" : "text-black font-semibold"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/addHabits"
              className={({ isActive }) =>
                isActive ? "text-[#2EA0B6] font-semibold" : "text-black font-semibold"
              }
            >
              Add Habit
            </NavLink>
            <NavLink
              to="/myHabits"
              className={({ isActive }) =>
                isActive ? "text-[#2EA0B6] font-semibold" : "text-black font-semibold"
              }
            >
              My Habits
            </NavLink>
            <NavLink
              to="/publicHabits"
              className={({ isActive }) =>
                isActive ? "text-[#2EA0B6] font-semibold" : "text-black font-semibold"
              }
            >
              Public Habits
            </NavLink>

            <button className="ml-4 bg-[#2EA0B6] px-5 py-2 text-white rounded-lg hover:rounded-2xl hover:scale-105 transition-all duration-300">
              Sign Up
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center">
            <label
              htmlFor="mobile-drawer"
              className="cursor-pointer flex flex-col gap-1 p-2"
            >
              <span className="block w-6 h-0.5 bg-black"></span>
              <span className="block w-6 h-0.5 bg-black"></span>
              <span className="block w-6 h-0.5 bg-black"></span>
            </label>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <input id="mobile-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side md:hidden">
        <label htmlFor="mobile-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-64 bg-base-200 flex flex-col gap-3 ml-auto">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? "text-[#2EA0B6] font-semibold" : "text-black font-semibold"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/addHabits"
              className={({ isActive }) =>
                isActive ? "text-[#2EA0B6] font-semibold" : "text-black font-semibold"
              }
            >
              Add Habit
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/myHabits"
              className={({ isActive }) =>
                isActive ? "text-[#2EA0B6] font-semibold" : "text-black font-semibold"
              }
            >
              My Habits
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/publicHabits"
              className={({ isActive }) =>
                isActive ? "text-[#2EA0B6] font-semibold" : "text-black font-semibold"
              }
            >
              Public Habits
            </NavLink>
          </li>
          <li className="mt-4">
            <button className="bg-[#2EA0B6] px-5 py-3 text-white w-full rounded-lg hover:rounded-2xl hover:scale-105 transition-all duration-300">
              Sign Up
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
