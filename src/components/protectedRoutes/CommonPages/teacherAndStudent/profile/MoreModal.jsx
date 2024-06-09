import { Button, Modal } from "flowbite-react";
import React, { useState } from "react";
import ChangePassWord from "./changePassword/ChangePassword";

function MoreModal({ logout }) {
  const [logoutConfirm, setLogoutConfirm] = useState(false);
  const [changePassword, setChangePassword] = useState(false);

  return (
    <>
      <div className=" text-black  text-center relative  border-t-2 rounded-xl">
        <div className="p-2">
          <p className="hover:text-blue-700 font-medium py-2  text-sm   border-b-[1px] border-black cursor-pointer">
            Privacy
          </p>
          <p
            onClick={() => setChangePassword(true)}
            className="hover:text-blue-700 font-medium py-2  text-sm   border-b-[1px] border-black cursor-pointer"
          >
            Change Password
          </p>
          <ChangePassWord
            changePassword={changePassword}
            setChangePassword={setChangePassword}
          />
          <p
            onClick={() => setLogoutConfirm(true)}
            className="hover:text-red-700 text-orange-500 font-medium py-2  text-sm   border-b-[1px] border-black cursor-pointer"
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
    </>
  );
}

export default MoreModal;
