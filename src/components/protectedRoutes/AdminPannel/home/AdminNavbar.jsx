import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <div className="m-2 ">
      <div className="h-8 md:h-16 px-3  md:px-12 bg-green-900 text-white flex justify-between  items-center    rounded-3xl">
        <div className=" md:text-2xl text-lime-300 font-bold ">
          Admin Dashboard
        </div>
        <ul className="flex font-semibold gap-10 bg-green-700 px-20 py-3 rounded-2xl">
          <li>
            <Link
              className="  hover:bg-green-800 rounded-3xl py-1 px-3 text-[12px] md:text-[16px] cursor-pointer "
              to="/adminHome"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="  hover:bg-green-800 rounded-3xl py-1 px-3 text-[12px] md:text-[16px] cursor-pointer "
              to="/academics"
            >
              Academic
            </Link>
          </li>
          <li>
            <Link className="  hover:bg-green-800  rounded-3xl py-1 px-3 text-[12px] md:text-[16px] cursor-pointer ">
              Notifications
            </Link>
          </li>
          <li>
            <Link className="  hover:bg-green-800  rounded-3xl py-1 px-3 text-[12px] md:text-[16px] cursor-pointer ">
              Help
            </Link>
          </li>
        </ul>
        <div className="flex gap-3 items-end">
          <p>{user.adminName}</p>
          <Link to="/adminProfile">
            <img
              className="h-12 w-12 object-cover  cursor-pointer  rounded-full hover:transform hover:scale-105  transition-all duration-100  ease-in-out "
              src={user?.adminImage}
              alt=""
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
