import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ setLogger }) {
  const [signupToggler, setSignupToggler] = useState(true);
  const [toggle, setToggle] = useState(true);
  const [toggle2, setToggle2] = useState(false);
  const handleLoginClick = () => {
    setToggle(false);
    setToggle2(true);
  };
  const handleLogoutClick = () => {};

  return (
    <>
      <nav className="flex bg-orange-200 h-auto md:h-32 items-center justify-between  md:pl-10 md:pr-1">
        <div>
          <img
            className="w-auto h-16 ml-4 md:ml-10 md:h-28 "
            src="https://png.pngtree.com/png-vector/20230415/ourmid/pngtree-school-logo-design-template-vector-png-image_6705854.png"
            alt=""
          />
        </div>
        <ul className="flex justify-between w-[120px] font-semibold md:w-44 ml-1 md:ml-20 ">
          <li>
            <Link
              className="h-auto w-auto bg-slate-100 hover:bg-slate-300  p-1 md:p-2 text-[12px] md:text-[16px] rounded-md cursor-pointer "
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="h-auto w-auto bg-slate-100 hover:bg-slate-300  p-1 md:p-2 text-[12px] md:text-[16px] rounded-md cursor-pointer "
              to="/contactus"
            >
              Contact Us
            </Link>
          </li>
        </ul>
        <div className="flex gap-5 justify-end items-center w-fit md:w-[350px] ">
          <div className="flex flex-col gap-1 py-1  md:flex-row    md:gap-2 items-center">
            <div
              hidden={toggle}
              className="w-[100px] md:w-[2px]  h-[2px] md:h-[50px]  bg-black"
            ></div>
            <Link
              hidden={toggle}
              to="/login"
              onClick={() => {
                setLogger("Admin");
                setSignupToggler(false);
                setToggle(true);
              }}
              className="h-fit bg-blue-700 text-white px-2 py-1  text-[10px]  md:text-[13px] font-bold md:py-2 md:px-2  lg:px-3 rounded-xl hover:bg-blue-600  "
            >
              Admin
            </Link>
            <div
              hidden={toggle}
              className="w-[100px] md:w-[2px]  h-[2px] md:h-[50px]  bg-black"
            ></div>

            <Link
              onClick={() => {
                setLogger("Teacher");
                setSignupToggler(false);
                setToggle(true);
              }}
              hidden={toggle}
              to="/login"
              className="h-fit bg-blue-700 text-white px-2 py-1  text-[10px]  md:text-[13px] font-bold  md:py-2 md:px-2  lg:px-3 rounded-xl hover:bg-blue-600  "
            >
              Teacher
            </Link>
            <div
              hidden={toggle}
              className="w-[100px] md:w-[2px]  h-[2px] md:h-[50px]  bg-black"
            ></div>
            <Link
              onClick={() => {
                setLogger("Student");
                setSignupToggler(false);
                setToggle(true);
              }}
              hidden={toggle}
              to="/login"
              className="h-fit bg-blue-700 text-white px-2 py-1  text-[10px]  md:text-[13px] font-bold  md:py-2 md:px-2  lg:px-3 rounded-xl hover:bg-blue-600  "
            >
              Student
            </Link>
            {/* <div
              hidden={toggle}
              className="w-[100px] md:w-[2px]  h-[2px] md:h-[50px]  bg-black"
            ></div>
            <Link
              onClick={() => {
                setSignupToggler(false);
                setLogger("Parent");
                setToggle(true);
              }}
              hidden={toggle}
              to="/login"
              className="h-fit bg-blue-700 text-white px-2 py-1  text-[10px]  md:text-[13px] font-bold md:py-2 md:px-2  lg:px-3 rounded-xl hover:bg-blue-600  "
            >
              Parent
            </Link> */}
            <div
              hidden={toggle}
              className="w-[100px] md:w-[2px]  h-[2px] md:h-[50px]  bg-black"
            ></div>
          </div>
          <button
            hidden={toggle2}
            onClick={handleLoginClick}
            className="h-fit bg-blue-700 text-white px-3 py-1 text-sm  md:text-[17px] font-bold md:py-2 md:px-4 rounded-xl hover:bg-blue-600  "
          >
            Login
          </button>
          <Link
            hidden={signupToggler}
            to="/signup"
            onClick={() => {
              setSignupToggler(true);
              setToggle2(false);
            }}
            className="h-fit bg-blue-700 text-white px-3 py-1 text-sm  md:text-[17px] font-bold md:py-2 md:px-4 rounded-xl hover:bg-blue-600  "
          >
            Signup
          </Link>
          <button
            hidden={true}
            onClick={handleLogoutClick}
            className="h-fit bg-red-700 text-white px-3 py-1 text-sm  md:text-[17px] font-bold md:py-2 md:px-4 rounded-xl hover:bg-green-600  "
          >
            Logout
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
