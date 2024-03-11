import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import handleApiError from "../../utils/errorHandler/ApiErrors";
const apiKey = process.env.REACT_APP_API_KEY;

function Signup(props) {
  const navigate = useNavigate();
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
    try {
      await axios.post(`${apiKey}/users/register`, formData);
      alert(`${logger} regestered successfully..Please login to continue....`);
      navigate("/login");
    } catch (error) {
      handleApiError(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-400">
      <form
        className="bg-pink-200 p-5 md:p-8 rounded shadow-md w-76 md:w-96 hover:transform hover:scale-105  transition-all duration-1000  ease-in-out"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-medium md:font-bold mb-2"
            htmlFor="name"
          >
            {logger} Name *
          </label>
          <input
            className="border rounded w-full py-1 md:py-2 px-3"
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
            className="border rounded w-full py-1 md:py-2 px-3"
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
            className="border rounded w-full py-1 md:py-2 px-3"
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
            className="border rounded w-full py-1 md:py-2 px-3"
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
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;
