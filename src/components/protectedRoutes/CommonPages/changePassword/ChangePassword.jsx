import { Button, Modal } from "flowbite-react";
import React, { useState } from "react";
import { toast } from "react-toastify";
import changeUserPassword from "../../../../apis/changePassword/changePassword";

function ChangePass({ changePassword, setChangePassword }) {
  const [loading, setLoading] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");

  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
  });

  const [passwordShow, setPasswordShow] = useState(false);
  const [passwordShow2, setPasswordShow2] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwords.newPassword !== confirmPassword) {
      toast.error(
        "Mismatch between both the passwords, Please enter correctly"
      );
      // setConfirmPassword("");
      return;
    }
    setLoading(true);
    const response = changeUserPassword(passwords);

    if (response) {
      // setPasswords({
      //   currentPassword: "",
      //   newPassword: "",
      // });
      // setConfirmPassword("");

      setChangePassword(false);
    }
    setLoading(false);
  };

  return (
    <Modal
      show={changePassword}
      size="md"
      onClose={() => setChangePassword(false)}
      popup
    >
      <Modal.Header />
      <Modal.Body>
        <div className="bg-gray-100">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded shadow-md w-full max-w-sm"
          >
            <h2 className="text-2xl font-bold mb-6">Change Password</h2>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Current Password
              </label>
              <input
                type={passwordShow ? "text" : "password"}
                name="currentPassword"
                className="shadow appearance-none border rounded w-[90%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={passwords.currentPassword}
                onChange={(e) =>
                  setPasswords({
                    ...passwords,
                    currentPassword: e.target.value,
                  })
                }
                required
              />
              <i
                style={{ display: !passwordShow && "none" }}
                onClick={() => setPasswordShow(false)}
                className="fa-regular ml-2 fa-eye"
              ></i>
              <i
                style={{ display: passwordShow && "none" }}
                onClick={() => setPasswordShow(true)}
                className="fa-regular ml-2 fa-eye-slash"
              ></i>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                New Password
              </label>
              <input
                type={passwordShow2 ? "text" : "password"}
                name="newpassword"
                className="shadow appearance-none border rounded w-[90%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                value={passwords.newPassword}
                onChange={(e) =>
                  setPasswords({
                    ...passwords,
                    newPassword: e.target.value,
                  })
                }
                required
              />
              <i
                style={{ display: !passwordShow2 && "none" }}
                onClick={() => setPasswordShow2(false)}
                className="fa-regular ml-2 fa-eye"
              ></i>
              <i
                style={{ display: passwordShow2 && "none" }}
                onClick={() => setPasswordShow2(true)}
                className="fa-regular ml-2 fa-eye-slash"
              ></i>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Confirm New Password
              </label>
              <input
                type="password"
                className="shadow appearance-none border rounded w-[90%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <Button disabled={loading} type="submit">
                {!loading ? "Change Password" : "Processing..."}
              </Button>
            </div>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ChangePass;
