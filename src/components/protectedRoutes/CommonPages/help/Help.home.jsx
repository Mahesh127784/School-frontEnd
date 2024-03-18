import React from "react";
import AdminNavbar from "../../AdminPannel/adminNavbar/AdminNavbar";
import { Link } from "react-router-dom";

function Help() {
  return (
    <div div className="pb-10 h-screen bg-green-200">
      <div>
        <AdminNavbar />
      </div>
      <div className=" md:mx-auto mx-5  bg-slate-400 h-[300px] md:h-[500px] md:w-[500px] text-center py-10 flex flex-col gap-5 font-semibold md:font-bold text-sm md:text-xl rounded-md ">
        <div>
          <Link
            className="border-2 bg-white rounded-2xl hover:bg-gray-200 border-black hover:border-white mx-5 md:mx-10 py-2 block "
            to="/adminProfile"
          >
            Profile
          </Link>
        </div>
        <div>
          <h5 className="border-2 bg-white rounded-2xl hover:bg-gray-200 border-black hover:border-white  mx-5 md:mx-10  py-2 cursor-pointer ">
            Have Any Querries?
          </h5>
        </div>
        <div>
          <h5 className="border-2 bg-white rounded-2xl hover:bg-gray-200 border-black hover:border-white  mx-5 md:mx-10  py-2 cursor-pointer text-red-600">
            Register any complaints...!
          </h5>
        </div>
      </div>
    </div>
  );
}
export default Help;
