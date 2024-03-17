import React, { useRef, useState } from "react";
import AdminNavbar from "../AdminPannel/adminNavbar/AdminNavbar";
import { useDispatch, useSelector } from "react-redux";
import userImageUpload from "../../../apis/profilePhotoUploading/UserImageUpload";
import { updateUser } from "../../../redux/features/user/userSlice";
import handleApiError from "../../../utils/errorHandler/ApiErrors";
import ToggleAndHeading from "./ToggleAndHeading";

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
    <div className="bg-green-200 h-screen md:h-full md:pb-10">
      <AdminNavbar />
      <div className="  m-auto rounded-2xl bg-white w-64 md:w-[500px] lg:w-[800px] py-5 ">
        <ToggleAndHeading logout={logout} />
        <div className=" flex flex-col  items-center   ">
          <img
            className=" w-40 h-44 md:w-72 md:h-[335px] object-cover rounded-full"
            src={user?.adminImage}
            alt=""
          />
          <div>
            {userName.map((key, i) => {
              if (i === 1 || i === 4 || i === 3)
                return (
                  <div
                    key={i}
                    className=" md:font-bold font-semibold text-sm md:text-xl m-5"
                  >
                    {userName[i]?.toUpperCase()} :-{" "}
                    <span className="text-red-700 font-semibold ">
                      {user[userName[i]]}
                    </span>
                  </div>
                );
            })}
          </div>
          <form ref={formRef} className="inline px-2" onSubmit={handleSubmit}>
            <div className="pl-5 md:inline">
              <label className=" text-[12px] md:text-base font-semibold">
                Change Display Picture :-
              </label>

              <input
                className=" text-[12px] md:text-base  md:ml-0 md:w-56 "
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
            <div className=" lg:inline text-center">
              <button
                className="bg-green-500 hover:bg-green-700 md:font-semibold py-[2px] md:py-1 px-1  md:px-3 text-white rounded-md mt-5"
                disabled={!file}
                type="submit"
              >
                Upload
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
