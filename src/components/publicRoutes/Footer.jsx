import React from "react";

function Footer() {
  return (
    <>
      <footer className="h-fit bg-indigo-950 text-white">
        <div className="px-6 py-3 flex flex-col md:flex-row justify-around items-center md:items-start flex-wrap gap-8 md:gap-auto">
          <div className="w-[250px] md:text-left text-center ">
            <h4 className=" md:text-xl font-bold  mb-4">Our Address</h4>
            <div className=" flex flex-col gap-2 text-sm font-thin md:font-normal ">
              <div>Great Indian International School -city-,India</div>
              <div>N.H 00, --city-- 581*** --mainCity-- Taluk, Karnataka.</div>
              <div>Mob: +91 91135*****, +91 77609*****</div>
              <div>Email:aourschool@gmail.com,</div>
              <div>info@giisschool.net</div>
            </div>
          </div>
          <div className=" w-[300px] text-center">
            <h4 className=" md:text-xl font-bold  mb-4">Our Privacy Policy</h4>
            <p>
              <a className="font-thin  text-sm md:text-base" href="/">
                Privacy Policy for Website Privacy Policy for App Terms
                Conditions
              </a>
            </p>
          </div>
          <div className="text-center ">
            <h4 className=" md:text-xl font-bold mb-2 md:mb-4">useful Links</h4>
            <ul>
              <li>
                <a className="hover:text-gray-400" href="/">
                  Home
                </a>
              </li>
              <li>
                <a className="hover:text-gray-400" href="/">
                  About
                </a>
              </li>
              <li>
                <a className="hover:text-gray-400" href="/">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="flex
        gap-4 text-xl  justify-center mt-3 "
        >
          <i className=" cursor-pointer hover:transform hover:scale-150 transition-all duration-300 ease-in-out fa-brands fa-square-facebook"></i>
          <i className=" cursor-pointer hover:transform hover:scale-150 transition-all duration-300 ease-in-out fa-brands fa-instagram"></i>
          <i className=" cursor-pointer hover:transform hover:scale-150 transition-all duration-300 ease-in-out fa-brands fa-square-x-twitter"></i>
          <i className=" cursor-pointer hover:transform hover:scale-150 transition-all duration-300 ease-in-out fa-brands fa-linkedin"></i>
          <i className=" cursor-pointer hover:transform hover:scale-150 transition-all duration-300 ease-in-out fa-brands fa-youtube"></i>
        </div>
        <div className="flex flex-col items-center  pb-2 md:p-2">
          <div className="w-80 md:w-[85%] h-[2px] m-3 bg-gray-500"></div>
          <p className="font-thin  text-[10px] md:text-sm">
            Copyright &copy; 20** Great Indian International School . All rights
            reserved
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
