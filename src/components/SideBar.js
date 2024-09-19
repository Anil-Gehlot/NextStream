import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RiVideoFill } from "react-icons/ri";
import {
  MdSubscriptions,
  MdVideoLibrary,
  MdHistory,
  MdOutlineWatchLater,
} from "react-icons/md";
import { AiFillHome, AiFillLike } from "react-icons/ai";


// Element for side button.
const SideBtn = ({ icon, btnName }) => {
  return (
    <button className="flex items-center p-2 px-5 w-full my-2 justify-start hover:bg-gray-200 rounded-lg">
      <span className="mr-2">{icon}</span> {btnName}
    </button>
  );
};


const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.hamburger.isMenuOpen);

  // All buttons.
  const btnList = [
    { icon: <AiFillHome />, name: "Home" },
    { icon: <MdSubscriptions />, name: "Subscriptions", to: "/" },
    { icon: <MdVideoLibrary />, name: "Library", to: "/" },
    { icon: <MdHistory />, name: "History", to: "/" },
    { icon: <RiVideoFill />, name: "Your Videos", to: "/" },
    { icon: <MdOutlineWatchLater />, name: "Watch Later", to: "/" },
    { icon: <AiFillLike />, name: "Liked Videos", to: "/" },
  ];

  // Early Return (when sidebar is closed.)
  if (!isMenuOpen) return null;


  return (
    <div
      className={`w-60 p-1 absolute z-10 bg-white sm:static md:static md:block ${
        !isMenuOpen && "hidden"
      }`}
    >
      {btnList.map((btn, index) => {
        return (
          <Link key={index} to={btn.to}>
            <SideBtn icon={btn.icon} btnName={btn.name} />
          </Link>
        );
      })}
    </div>
  );
};

export default SideBar;
