import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import handleApiError from "../../utils/errorHandler/ApiErrors";
import { toast } from "react-toastify";
import { UserSignup } from "../../apis/handle_Login_Logout/HandleLoginLogout";

function Signup(props) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  let { logger } = props;
  if (logger === "Admin") {
    logger = "Student";
  }
  const [formData, setFormData] = useState({
    name: "",
    userId: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await UserSignup(formData);
      toast.success(
        `${logger} regestered successfully..Please login to continue....`
      );
      navigate("/login");
    } catch (error) {
      handleApiError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-400">
      <form
        className="bg-pink-300 flex flex-col justify-center items-center p-8 md:p-10 rounded-md shadow-md w-72  md:w-96 hover:transform hover:scale-105  transition-all duration-1000  ease-in-out"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-5 ">Sign Up</h2>
        <div className="mb-4">
          <label
            className="block text-gray-700  font-medium md:font-bold mb-2"
            htmlFor="name"
          >
            {logger} Name *
          </label>
          <input
            className="p-2 border border-gray-500 rounded-lg mb-4 focus:outline-none focus:border-gray-600 "
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-medium md:font-bold mb-2"
            htmlFor="userId"
          >
            {logger === "Teacher" ? logger : "Student"} ID *
          </label>
          <input
            className="p-2 border border-gray-500 rounded-lg mb-4 focus:outline-none focus:border-gray-600 "
            type="text"
            id="userId"
            name="userId"
            value={formData.userId}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-medium md:font-bold mb-2"
            htmlFor="email"
          >
            Email *
          </label>
          <input
            className="p-2 border border-gray-500 rounded-lg mb-4 focus:outline-none focus:border-gray-600 "
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-medium md:font-bold mb-2"
            htmlFor="password"
          >
            Password *
          </label>
          <input
            className="p-2 border border-gray-500 rounded-lg mb-4 focus:outline-none focus:border-gray-600 "
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button
          className="bg-blue-500 text-white py-1 md:py-2 md:px-4 px-2 rounded hover:bg-blue-600"
          type="submit"
        >
          {loading ? "Processing..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
}

export default Signup;
