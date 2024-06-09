import React from "react";
import { Link } from "react-router-dom";
import MiniProfile from "../../CommonPages/teacherAndStudent/HomePageItem/miniprofile/MiniProfile";

const Sidebar = ({ transference }) => {
  return (
    <div
      className={`bg-blue-300 ${
        transference || ""
      } md:w-64 fixed  min-h-screen `}
    >
      <MiniProfile url={"/studentprofile"} />

      <hr className=" border-black my-5 mx-4 " />
      <nav>
        <ul className="flex flex-col items-end font-bold ">
          <li className="mb-2 ">
            <Link
              to="/studenthome"
              className="block ml-4 p-2 md:p-3 hover:bg-white rounded-l-2xl w-[150px] md:w-[230px] text-center"
            >
              Dashboard
            </Link>
          </li>
          <li className="mb-2">
            <Link
              to="/studentClasses"
              className="block ml-3 p-2 md:p-3 hover:bg-white rounded-l-2xl w-[150px] md:w-[230px] text-center"
            >
              Classes
            </Link>
          </li>
          <li className="mb-2"></li>
          <li className="mb-2">
            <Link
              to="#"
              className="block ml-3 p-2 md:p-3 hover:bg-white rounded-l-2xl w-[150px] md:w-[230px] text-center"
            >
              Homework
            </Link>
          </li>

          <li className="mb-2">
            <Link
              to="#"
              className="block ml-3 p-2 md:p-3 hover:bg-white rounded-l-2xl w-[150px] md:w-[230px] text-center"
            >
              Paid Courses
            </Link>
          </li>

          <li className="mb-2">
            <Link
              to="#"
              className="block ml-3 p-2 md:p-3 hover:bg-white rounded-l-2xl w-[150px] md:w-[230px] text-center"
            >
              Duties
            </Link>
          </li>
          <li className="mb-2">
            <Link
              to="/studenthelp"
              className="block ml-3 p-2 md:p-3 hover:bg-white rounded-l-2xl w-[150px] md:w-[230px] text-center"
            >
              Help
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
