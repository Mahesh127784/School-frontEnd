import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-blue-500 mb-2 rounded shadow">
      <div className="text-center text-base lg:text-3xl  font-semibold lg:font-bold text-white">
        Teachers Dashboard
      </div>
      <div className="flex items-center">
        <button className="mr-4 p-2 rounded hover:bg-gray-200 bg-gray-300">
          Notifications
          <i class="fa-solid fa-bell mx-2 text-xl  "></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
