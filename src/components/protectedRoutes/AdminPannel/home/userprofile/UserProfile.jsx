import React, { useRef, useState } from "react";
import AdminNavbar from "../AdminNavbar";
import { useDispatch, useSelector } from "react-redux";
import userImageUpload from "../../../../../apis/profilePhotoUploading/UserImageUpload";
import { updateUser } from "../../../../../redux/features/user/userSlice";
import handleApiError from "../../../../../utils/errorHandler/ApiErrors";

const UserProfile = ({ logout }) => {
  const [file, setFile] = useState(null);

  const formRef = useRef(null);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  if (!user || Object.keys(user).length === 0) {
    return <div>Loading...</div>;
  }
  const userName = Object.keys(user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await userImageUpload({ file });
      dispatch(updateUser(response));
      setFile(null);
      formRef.current.reset();
    } catch (error) {
      handleApiError(error);
    }
  };
  return (
    <div className="bg-green-200 h-screen">
      <AdminNavbar />
      <div className="  m-auto rounded-2xl bg-white w-[800px] py-5 ">
        <div className=" flex justify-between mb-5">
          <div></div>
          <h2 className="  text-3xl font-bold text-center underline ml-8">
            Admin Profile
          </h2>
          <i class="fa-solid fa-bars p-2 bg-gray-200 text-2xl rounded-md border-[2px]  border-gray-300 hover:bg-gray-300 cursor-pointer mr-5 "></i>
        </div>
        <div className=" flex flex-col  items-center   ">
          <img
            className="w-72 h-72 object-cover rounded-full"
            src={user?.adminImage}
            alt=""
          />
          <div>
            {userName.map((key, i) => {
              if (i === 1 || i === 4 || i === 3)
                return (
                  <div key={i} className=" font-bold text-xl m-5">
                    {userName[i]?.toUpperCase()} :-{" "}
                    <span className="text-red-700 font-semibold ">
                      {user[userName[i]]}
                    </span>
                  </div>
                );
            })}
          </div>
          <div>
            <form ref={formRef} className="inline" onSubmit={handleSubmit}>
              <label className=" font-semibold">
                Change Display Picture :-
              </label>

              <input
                className=" w-56"
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
              />

              <button
                className="bg-green-500 hover:bg-green-700 font-semibold p-1 px-3 text-white rounded-md"
                disabled={!file}
                type="submit"
              >
                Upload
              </button>
            </form>
            <button
              onClick={logout}
              className="rounded-md mt-5 mb-3 p-1 px-2 font-semibold  text-white bg-red-500 hover:bg-red-700 ml-10 "
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
