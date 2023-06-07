import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const location = useLocation();
  function pathMatchRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }
  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50">
      <header
        className="flex justify-between items-center px-3 max-w-6xl mx-auto
    "
      >
        <div>
          <img
            src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
            alt="logo"
            className="h-5 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
        <div>
          <ul className="flex space-x-10 ">
            <li
              className={` cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-transparent border-b-[3px] ${
                pathMatchRoute("/") && " border-b-green-400 text-slate-700"
              }`}
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-transparent border-b-[3px] ${
                pathMatchRoute("/offers") &&
                " border-b-green-400 text-slate-700"
              }`}
              onClick={() => navigate("/offers")}
            >
              Offers
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-transparent border-b-[3px] ${
                pathMatchRoute("/sign-in") &&
                " border-b-green-400 text-slate-700"
              }`}
              onClick={() => navigate("/sign-in")}
            >
              Sign in
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
