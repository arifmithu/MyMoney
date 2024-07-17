import React from "react";
import { TbCoinTakaFilled } from "react-icons/tb";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="flex justify-between items-center bg-blue-700 text-white px-10 py-4 shadow-lg">
      <div className="flex items-center gap-2">
        <TbCoinTakaFilled className="text-2xl" />
        <span className="text-xl font-bold animate-bounce">Dashboard</span>
      </div>
      <div className="flex items-center gap-4">
        <Link
          to={"/registerType"}
          className={
            "text-lg text-white font-bold border border-white rounded px-2 shadow-2xl "
          }
        >
          Register
        </Link>
        <Link
          to={"/login"}
          className={
            "text-lg text-white font-bold border border-white rounded px-2 shadow-2xl"
          }
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Nav;
