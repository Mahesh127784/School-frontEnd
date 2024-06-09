import React, { useState } from "react";

import { Link } from "react-router-dom";
import { Modal } from "flowbite-react";
import ComplaintForm from "../../../publicRoutes/complaintForm/ComplaintForm";

function Help({ url }) {
  const [logoutConfirm, setLogoutConfirm] = useState(false);
  const handleSubmit = (e) => {};
  return (
    <div className=" md:mx-auto mx-5  bg-slate-400 h-[300px] md:h-[500px] md:w-[500px] text-center py-10 flex flex-col gap-5 font-semibold md:font-bold text-sm md:text-xl rounded-md ">
      <div>
        <Link
          className="border-2 bg-white rounded-2xl hover:bg-gray-200 border-black hover:border-white mx-5 md:mx-10 py-2 block "
          to={url}
        >
          Profile
        </Link>
      </div>
      {/*  <div>
          <Link className="border-2 bg-white rounded-2xl hover:bg-gray-200 border-black hover:border-white  mx-5 md:mx-10  py-2 cursor-pointer block">
            Have Any Querries?
          </Link>
        </div> */}
      <div>
        <div
          onClick={() => setLogoutConfirm(true)}
          className="border-2 bg-white rounded-2xl hover:bg-gray-200 border-black hover:border-white  mx-5 md:mx-10  py-2 cursor-pointer text-red-600 block"
        >
          Register any complaints...!
        </div>
      </div>
      <Modal show={logoutConfirm} onClose={() => setLogoutConfirm(false)} popup>
        <Modal.Header />
        <Modal.Body>
          <ComplaintForm handleSubmit={handleSubmit} popup={true} />
        </Modal.Body>
      </Modal>
    </div>
  );
}
export default Help;
