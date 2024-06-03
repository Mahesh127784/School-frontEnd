import React, { useState } from "react";
import { Button, Modal } from "flowbite-react";

const ToggleAndHeading = ({ logout, userName }) => {
  const [toggle, setToggle] = useState(true);
  const [logoutConfirm, setLogoutConfirm] = useState(false);

  return (
    <div className=" flex  ">
      <div className={userName ? "lg:w-64" : "lg:w-72 md:w-36 w-16"}></div>
      <h2 className="  md:text-3xl font-bold  underline mr-2 md:mr-8 lg:mr-40 ">
        {userName ? userName : "Admin"} Profile
      </h2>
      {toggle && (
        <div className="text-end  md:w-28 lg:w-36 w-[70px]">
          <i
            onClick={() => setToggle(!toggle)}
            className="fa-solid fa-bars p-1 md:p-2 bg-gray-200 text-[10px] md:text-base lg:text-2xl rounded-md border-[2px]  border-gray-300 hover:bg-gray-300 cursor-pointer right-[380px]  "
          ></i>
        </div>
      )}
      <div
        hidden={toggle}
        className=" rounded-sm text-black border-[1px] border-gray-700 bg-gray-300  lg:mr-2"
      >
        <i
          onClick={() => setToggle(!toggle)}
          className="fa-solid fa-circle-chevron-left text-sm md:text-xl text-gray-600 cursor-pointer hover:text-gray-800 px-2 md:pt-3"
        ></i>
        <div className="w-full mt-1 bg-black h-[1px] md:h-0.5"></div>
        <div className=" pb-0 p-1 lg:p-2">
          <p className="hover:text-blue-700 md:font-semibold py-1 md:py-2 text-[9px] lg:text-base md:text-sm  border-b-[1px] border-black cursor-pointer">
            Privacy
          </p>
          <p className="hover:text-blue-700 md:font-semibold py-1 md:py-2 lg:text-base md:text-sm text-[9px]   border-b-[1px] border-black cursor-pointer">
            Change Password
          </p>
          <p
            onClick={() => setLogoutConfirm(true)}
            className="hover:text-red-700 text-orange-500 md:font-semibold  py-1 md:py-2 cursor-pointer lg:text-base md:text-sm text-[9px] "
          >
            Logout
          </p>
          <Modal
            show={logoutConfirm}
            size="md"
            onClose={() => setLogoutConfirm(false)}
            popup
          >
            <Modal.Header />
            <Modal.Body>
              <div className="text-center ">
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                  Are you sure you want to logout?
                </h3>
                <div className="flex justify-center gap-4">
                  <Button color="failure" onClick={() => logout()}>
                    Yes
                  </Button>
                  <Button color="gray" onClick={() => setLogoutConfirm(false)}>
                    cancel
                  </Button>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default ToggleAndHeading;
