import React, { useState } from "react";
import { Button, Modal } from "flowbite-react";

function DeleteUser({ deleteUser, member }) {
  const [logoutConfirm, setLogoutConfirm] = useState(false);
  return (
    <>
      <i
        onClick={() => setLogoutConfirm(true)}
        className="fa-solid fa-trash-can ml-2 text-orange-300 cursor-pointer hover:transform hover:scale-125 transition-all duration-300 ease-in-out "
      ></i>
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
              Are you sure you want to delete this members data?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={() => deleteUser(member._id)}>
                Yes
              </Button>
              <Button color="blue" onClick={() => setLogoutConfirm(false)}>
                cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default DeleteUser;
