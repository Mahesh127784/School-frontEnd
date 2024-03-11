import React from "react";
import { Link } from "react-router-dom";

function Contactus() {
  const handleSubmit = (e) => {
    // e.preventdefault;
    alert("this option is stll not copmplete");
  };
  return (
    <>
      <div className=" bg-red-500 h-52 md:h-80  text-white m-5 md:m-12 text-center py-2 md:py-16 ">
        <h1 className="text-[20px] md:text-4xl my-4 md:my-auto md:mb-6 font-bold">
          Contect us...!
        </h1>
        <p className="w-[200px] md:w-[500px] mx-auto text-[11px] md:text-lg">
          Have any questions? We'd love to hear from you! Here's how to get in
          touch with us. <br />
          We are always ready to make our organization much more strong by your
          good thoughts....
        </p>
      </div>

      <div className="hover:transform hover:scale-105  transition-all duration-700  ease-in-out  max-w-xs    md:max-w-md mx-auto mt-8 px-6 py-3 md:py-6 bg-pink-300 rounded-md shadow-2xl hover:shadow-slate-900 mb-5">
        <h2 className="md:text-xl font-bold mb-2 md:mb-4">
          Any suggestion/querries
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="md:mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium    mt-2"
            >
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-1 md:px-4 md:py-2 py-1 border rounded-md focus:outline-none focus:border-blue-950"
            />
          </div>

          <div className="md:mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium    mt-2"
            >
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-1 md:px-4 md:py-2 py-1 border rounded-md focus:outline-none focus:border-blue-950"
            />
          </div>

          <div className="md:mb-4">
            <label
              htmlFor="subject"
              className="block text-gray-700 font-medium    mt-2"
            >
              Subject *
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full px-1 md:px-4 md:py-2 py-1 border rounded-md focus:outline-none focus:border-blue-950"
            />
          </div>

          <div className="md:mb-6 mb-3">
            <label
              htmlFor="message"
              className="block text-gray-700 font-medium    mt-2"
            >
              Message
            </label>
            <textarea
              placeholder="This option is still not completed"
              id="message"
              name="message"
              rows="4"
              className="w-full px-2 md:px-4  md:py-2 py-1 border rounded-md focus:outline-none focus:border-blue-950"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-1 md:py-2  px-4 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="text-center m-20">
        <Link
          className="bg-green-600 p-3 text-white md:text-2xl font-bold  hover:bg-green-700  rounded-md  "
          to="/AdmissionForm"
        >
          Apply For New Admission
        </Link>
      </div>
    </>
  );
}

export default Contactus;
