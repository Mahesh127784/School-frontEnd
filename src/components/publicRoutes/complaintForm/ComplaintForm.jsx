import React from "react";

function ComplaintForm({ handleSubmit, popup }) {
  return (
    <div
      className={`flex flex-col items-center justify-center ${
        !popup && "min-h-screen"
      }  `}
    >
      <h2 className=" underline md:text-xl lg:text-3xl font-bold mb-5 md:mb-8">
        {popup ? "Any Complaint?" : "Any suggestions/querries"}
      </h2>
      <form
        className={`bg-white flex flex-col justify-center items-center p-8 md:p-10 rounded-md shadow-xl w-72  md:w-96 ${
          !popup && "hover:transform hover:scale-105"
        } transition-all duration-1000  ease-in-out`}
        onSubmit={handleSubmit}
      >
        <div className="md:mb-4">
          <label className="block text-gray-700  font-medium md:font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="p-2 border border-gray-500 rounded-lg mb-4 focus:outline-none focus:border-gray-600 w-full "
          />
        </div>

        {!popup && (
          <div className="md:mb-4">
            <label className="block text-gray-700  font-medium md:font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="p-2 border border-gray-500 rounded-lg mb-4 focus:outline-none focus:border-gray-600 "
            />
          </div>
        )}

        <div className="md:mb-4">
          <label className="block text-gray-700  font-medium md:font-bold mb-2">
            About
          </label>
          <input
            type="text"
            name="subject"
            className="p-2 border border-gray-500 rounded-lg mb-4 focus:outline-none focus:border-gray-600 "
          />
        </div>

        <div className="md:mb-6 mb-3">
          <label className="block text-gray-700  font-medium md:font-bold mb-2">
            Message
          </label>
          <textarea
            placeholder="Write your thoughts breefly.."
            name="message"
            rows={3}
            className="w-full px-2 md:px-4  md:py-2 py-1 border rounded-md focus:outline-none focus:border-blue-950"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-1 md:py-2  px-4 rounded-md hover:bg-blue-800 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ComplaintForm;
