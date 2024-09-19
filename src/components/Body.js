import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import Head from "./Head";

const Body = () => {

  return (
    <div className="overflow-x-hidden">
      <Head />
      <div className="flex">
      <SideBar />
      <div className="w-full justify-evenly transition-all duration-500">
        <Outlet />
      </div>
    </div>
    </div>
  );
};

export default Body;

