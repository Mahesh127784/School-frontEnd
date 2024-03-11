import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AdminLogin,
  UserLogin,
} from "../../apis/handle_Login_Logout/HandleLoginLogout";
import handleApiError from "../../utils/errorHandler/ApiErrors";

function Login({ logger }) {
  const navigate = useNavigate();

  const [creds, setCreds] = useState({
    userId: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if the user is logging in as an Admin
    if (logger === "Admin") {
      try {
        const response = await AdminLogin(creds);
        console.log(response.message);
        const tokens = {
          refreshToken: response.data.accessToken,
          accessToken: response.data.refreshToken,
        };
        localStorage.setItem("tokens", JSON.stringify(tokens));
        navigate("/adminHome");
      } catch (error) {
        handleApiError(error);
      }
    } else {
      try {
        const response = await UserLogin(creds);
        const user = response.data?.user?.user;
        console.log(response.message);
        const tokens = {
          refreshToken: response.data.accessToken,
          accessToken: response.data.refreshToken,
        };
        localStorage.setItem("tokens", JSON.stringify(tokens));
        if (user === "Student") {
          navigate("/studentsHome");
        }
        if (user === "Teacher") {
          navigate("/teachersHome");
        }
      } catch (error) {
        handleApiError(error);
      }
    }
  };

  return (
    <>
      <div className="py-10 md:py-20 flex flex-col items-center justify-center bg-gray-400">
        <div className="bg-pink-300 p-8 md:p-10 rounded-md shadow-md w-72  md:w-96 hover:transform hover:scale-105  transition-all duration-1000  ease-in-out ">
          <h2 className="text-xl underline   md:text-2xl font-bold mb-6">
            {logger} Login
          </h2>
          <form onSubmit={handleSubmit}>
            {logger === "Admin" && (
              <div className="mb-2 md:mb-4">
                <label
                  htmlFor="userId"
                  className="block text-gray-700 font-medium mb:font-semibold mt-2"
                >
                  Admin ID *
                </label>
                <input
                  onChange={(e) =>
                    setCreds({ ...creds, userId: e.target.value })
                  }
                  value={creds.userId}
                  type="number"
                  id="userId"
                  name="userId"
                  className="w-full px-4 py-1 md:py-2 border rounded-md focus:outline-none focus:border-blue-950"
                />
              </div>
            )}

            <div className="mb-2 md:mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb:font-semibold mt-2"
              >
                {logger} Email *
              </label>
              <input
                onChange={(e) => setCreds({ ...creds, email: e.target.value })}
                value={creds.email}
                type="text"
                id="email"
                name="email"
                className="w-full px-4 py-1 md:py-2 border rounded-md focus:outline-none focus:border-blue-950"
              />
            </div>

            <div className="mb-2 md:mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 font-medium mb:font-semibold mt-2"
              >
                Password *
              </label>
              <input
                onChange={(e) =>
                  setCreds({ ...creds, password: e.target.value })
                }
                value={creds.password}
                type="password"
                id="password"
                name="password"
                className="w-full px-4 py-1 md:py-2 border rounded-md focus:outline-none focus:border-blue-950"
              />
            </div>

            <button
              type="submit"
              className="mt-5  w-full bg-blue-500 text-white py-1 md:py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Login
            </button>
          </form>
        </div>
        <div className=" mt-5 text-sm  md:text-[20px]">
          New to our application?
          <Link
            to="/signup"
            className=" px-1 text-blue-950 underline  font-bold hover:text-blue-900 "
          >
            Signup
          </Link>
        </div>
      </div>
    </>
  );
}

export default Login;
