import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = ({ transference }) => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);

  const handleClick = () => {};
  return (
    <div
      className={`bg-blue-300 ${
        transference || ""
      } md:w-64 fixed  min-h-screen `}
    >
      <div className="text-center mb-6  p-4">
        <img
          onClick={() => navigate("/teacherprofile")}
          src={user.userImage}
          alt="Profile"
          className="rounded-full object-cover w-24 h-24 mx-auto cursor-pointer hover:border-2 border-fuchsia-700 "
        />

        <h2 className="mt-4 text-xl font-bold">
          {user?.name?.charAt(0).toUpperCase() + user?.name?.slice(1) ||
            "Guest"}
        </h2>
        <p>{user?.about || "guest"}</p>
      </div>

      <hr className=" border-black my-5 mx-4 " />
      <nav>
        <ul className="flex flex-col items-end font-bold ">
          <li className="mb-2 ">
            <Link
              to="/teacherhome"
              className="block ml-4 p-2 md:p-3 hover:bg-white rounded-l-2xl w-[150px] md:w-[230px] text-center"
            >
              Dashboard
            </Link>
          </li>
          <li className="mb-2">
            <Link
              to="/techersClasses"
              className="block ml-3 p-2 md:p-3 hover:bg-white rounded-l-2xl w-[150px] md:w-[230px] text-center"
            >
              Classes
            </Link>
          </li>
          <li className="mb-2">
            <Link
              to="#"
              className="block ml-3 p-2 md:p-3 hover:bg-white rounded-l-2xl w-[150px] md:w-[230px] text-center"
            >
              Exams
            </Link>
          </li>
          {/* <li className="mb-2">
            <Link
              to="#"
              className="block ml-3 p-2 md:p-3 hover:bg-white rounded-l-2xl w-[150px] md:w-[230px] text-center"
            >
              Homework
            </Link>
          </li> */}
          <li className="mb-2">
            <Link
              to="#"
              className="block ml-3 p-2 md:p-3 hover:bg-white rounded-l-2xl w-[150px] md:w-[230px] text-center"
            >
              Students
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
              Attendance
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
              to="/teacherhelp"
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
