import React from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ user }) => {
  const navigate = useNavigate();
  return (
    <header className="flex justify-between items-center p-2 py-4 md:p-4 bg-blue-500 mb-2 rounded shadow">
      <div className="text-center text-base lg:text-3xl  font-semibold lg:font-bold text-white">
        {user}s Dashboard
      </div>
      <div className="flex items-center ">
        <button
          onClick={() => {
            navigate(
              user === "Teacher"
                ? "/teachernotifications"
                : "/studentnotifications"
            );
          }}
          className="md:mr-4 mr-1 p-2 rounded text-xs md:text-base hover:bg-gray-200 bg-gray-300"
        >
          Notifications
          <i class="fa-solid fa-bell mx-1 md:mx-2 text-xs md:text-xl  "></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
