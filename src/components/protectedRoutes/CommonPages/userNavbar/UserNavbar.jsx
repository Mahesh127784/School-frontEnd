import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const UserNavbar = ({ username }) => {
  const { user } = useSelector((state) => state.user);
  const [nav, setNav] = useState(true);

  return (
    <div className="my-2  ">
      <nav className="h-fit md:h-12 lg:h-20 px-3 md:px-6  lg:px-10 bg-blue-500 text-white flex justify-between overflow-hidden items-center">
        <div
          hidden={!nav}
          className=" text-center text-base lg:text-3xl py-4 md:py-0  font-semibold lg:font-bold "
        >
          {username.charAt(0).toUpperCase() + username.slice(1)} Dashboard
        </div>
        <div
          onClick={() => setNav(!nav)}
          hidden={!nav}
          className=" md:hidden bg-blue-800 border-2 border-gray-300 px-1.5 rounded-md"
        >
          <i className="fa-solid fa-bars  text-[16px] cursor-pointer "></i>
        </div>
        <ul
          onClick={() => {
            if (!nav) setNav(!nav);
          }}
          hidden={nav}
          className="md:flex font-semibold lg:font-bold  text-[14px] lg:text-[20px]"
        >
          <li>
            <Link
              className="  hover:bg-blue-300 hover:text-black md:py-7 sm:px-1 md:px-2 lg:px-3 cursor-pointer "
              to={`/${username}home`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="  hover:bg-blue-300 hover:text-black md:py-7 sm:px-1 md:px-2 lg:px-3 cursor-pointer "
              to="/academics"
            >
              Academic
            </Link>
          </li>
          <li>
            <Link
              to="/notifications"
              className="hover:text-black  hover:bg-blue-300 md:py-7 sm:px-1 md:px-2 lg:px-3 cursor-pointer "
            >
              Notifications
            </Link>
          </li>
          <li>
            <Link
              to="/help"
              className="hover:text-black  hover:bg-blue-300 md:py-7 sm:px-1 md:px-2 lg:px-3 cursor-pointer "
            >
              Help
            </Link>
          </li>
        </ul>
        <div className="flex gap-1 lg:gap-3 items-end">
          <p className=" text-[12px] md:font-semibold text-center text-black md:text-sm lg:text-base ">
            {user?.adminName || user?.name}
          </p>
          <Link to={user.user ? "/userprofile" : "/adminprofile"}>
            <img
              className="  h-9 w-9 md:h-12  md:w-12 lg:h-14 lg:w-14 object-cover  cursor-pointer  rounded-full hover:transform hover:scale-105  transition-all duration-100  ease-in-out "
              src={user?.adminImage || user?.userImage}
              alt=""
            />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export const AdminNavbar = () => <UserNavbar username={"admin"} />;

export const TeacherNavbar = () => <UserNavbar username={"teacher"} />;

export const StudentNavbar = () => <UserNavbar username={"student"} />;
