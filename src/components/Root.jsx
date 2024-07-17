import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";

const Root = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Nav />
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
