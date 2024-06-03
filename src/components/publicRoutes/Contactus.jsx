import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import ComplaintForm from "./complaintForm/ComplaintForm.jsx";

function Contactus() {
  const handleSubmit = (e) => {
    // e.preventdefault;
    toast("this option is stll not complete");
  };
  return (
    <div className="bg-gray-400 ">
      <div className="p-5 md:p-12 ">
        <div className=" bg-red-500 h-52 md:h-80  text-white text-center py-2 md:py-16 ">
          <h1 className="text-[20px] md:text-4xl my-4 md:my-auto md:mb-6 font-bold">
            Contect us...!
          </h1>
          <p className="w-[200px] md:w-[500px] mx-auto text-[11px] md:text-lg">
            Have any questions? We'd love to hear from you! Here's how to get in
            touch with us. <br />
            We are always ready to make our organization much more strong by
            your good thoughts....
          </p>
        </div>
      </div>

      <ComplaintForm handleSubmit={handleSubmit} />
      <div className="text-center p-20">
        <Link
          className="bg-lime-600 p-3 text-white md:text-2xl font-bold  hover:bg-lime-500  rounded-md  border-slate-950 border-2 "
          to="/AdmissionForm"
        >
          Apply For New Admission
        </Link>
      </div>
    </div>
  );
}

export default Contactus;
