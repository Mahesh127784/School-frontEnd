import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
  const { user } = useSelector((state) => state.user);
  const [nav, setNav] = useState(true);

  return (
    <div className="m-2 ">
      <nav className="h-fit md:h-12 lg:h-16 px-3 md:px-6  lg:px-10 bg-black text-white flex justify-between  items-center    rounded-3xl">
        <div
          hidden={!nav}
          className=" text-center text-[10px] md:text-base lg:text-2xl text-lime-300 font-semibold lg:font-bold "
        >
          Admin Dashboard
        </div>
        <div
          onClick={() => setNav(!nav)}
          hidden={!nav}
          className=" md:hidden bg-gray-800 px-1.5 rounded-sm"
        >
          <i className="fa-solid fa-bars  8text-[12px] cursor-pointer "></i>
        </div>
        <ul
          onClick={() => {
            if (!nav) setNav(!nav);
          }}
          hidden={nav}
          className="md:flex  lg:font-semibold md:gap-2 lg:gap-5 bg-green-950 px-2 my-1  md:px-5 md:py-[7px] lg:px-16 lg:py-3 rounded-2xl"
        >
          <li>
            <Link
              className="  hover:bg-green-800 rounded-3xl py-1 px-1 md:px-3  text-[10px] md:text-[14px] lg:text-[16px] cursor-pointer "
              to="/adminHome"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="  hover:bg-green-800 rounded-3xl py-1 px-1 md:px-3 text-[10px] md:text-[14px] lg:text-[16px] cursor-pointer "
              to="/academics"
            >
              Academic
            </Link>
          </li>
          <li>
            <Link
              to="/notifications"
              className="  hover:bg-green-800  rounded-3xl py-1 px-1 md:px-3  text-[10px] md:text-[14px] lg:text-[16px] cursor-pointer "
            >
              Notifications
            </Link>
          </li>
          <li>
            <Link
              to="/help"
              className="  hover:bg-green-800  rounded-3xl py-1 px-1 md:px-3  text-[10px] md:text-[14px] lg:text-[16px] cursor-pointer "
            >
              Help
            </Link>
          </li>
        </ul>
        <div className="flex gap-1 lg:gap-3 items-end">
          <p className=" text-[10px]  text-center md:text-sm lg:text-base ">
            {user?.adminName}
          </p>
          <Link to="/adminProfile">
            <img
              className=" m-1 md:m-0 h-7 w-7 md:h-10  md:w-10 lg:h-12 lg:w-12 object-cover  cursor-pointer  rounded-full hover:transform hover:scale-105  transition-all duration-100  ease-in-out "
              src={user?.adminImage}
              alt=""
            />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default AdminNavbar;
