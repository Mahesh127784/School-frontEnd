import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MoreModal from "./MoreModal";
import handleApiError from "../../../../utils/errorHandler/ApiErrors";
import userImageUpload from "../../../../apis/profilePhotoUploading/UserImageUpload";
import { updateUser } from "../../../../redux/features/user/userSlice";

function TeacherProfile({ logout }) {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [submitting, setSubmitting] = useState(false);
  const [toggle, setToggle] = useState(true);
  const [file, setFile] = useState(null);

  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setSubmitting(true);
      const response = await userImageUpload({ file }, "users");
      dispatch(updateUser(response));
      setFile(null);
      formRef.current.reset();
    } catch (error) {
      handleApiError(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <div className=" flex h-screen  ">
        <div className=" w-full flex items-start justify-start ">
          <div className=" w-[80%] h-[600px] bg-blue-600 rounded-br-full "></div>
        </div>
        <div className="w-full flex items-end justify-end">
          <div className=" w-[80%] h-[600px] max-h-full bg-blue-600 rounded-tl-full "></div>
        </div>

        <div className=" w-full h-full absolute flex justify-center items-center ">
          <div className="  bg-white w-full max-w-fit pb-5">
            <div className=" w-full">
              <img
                className="w-[400px] "
                src="https://static.vecteezy.com/system/resources/thumbnails/009/209/212/small/neon-glowing-profile-icon-3d-illustration-vector.jpg"
                alt=""
              />

              <div className="rounded-lg shadow bg-white mx-5 relative top-[-150px] z-10">
                <img
                  className=" w-[120px] h-[120px] mx-auto top-[-70px]   rounded-full relative object-cover"
                  src={user.userImage}
                  alt=""
                />
                <h2 className=" absolute top-14 text-center font-bold text-lg w-full">
                  {user.name}
                </h2>
                <p className=" text-center mt-[-25px] w-full pb-3">
                  {user.about}
                </p>
                <div hidden={toggle}>
                  <MoreModal logout={logout} />
                </div>
                <div
                  onClick={() => setToggle(!toggle)}
                  className=" w-full text-center bg-gray-100 hover:bg-gray-300  cursor-pointer hover:transform  transition-all duration-500 ease-in-out"
                >
                  <i
                    style={{ display: !toggle && "none" }}
                    className="fa-solid fa-sort-down text-gray-400 "
                  ></i>
                  <i
                    style={{ display: toggle && "none" }}
                    className="fa-solid fa-sort-up text-gray-400 "
                  ></i>
                </div>
              </div>
              <div className="mt-[-200px] shadow bg-gray-300  w-[400px] h-fit absolute z-0">
                <div className=" mt-[80px] px-20">
                  <div className=" text-lg my-3">
                    TeacherID :{" "}
                    <span className=" font-semibold">{user.userId}</span>
                  </div>
                  <div className="text-lg my-3">
                    Email : <span className=" font-semibold">{user.email}</span>
                  </div>
                  <form ref={formRef} onSubmit={handleSubmit}>
                    <div>
                      Change Display Picture :
                      <input
                        className="mt-2 "
                        type="file"
                        onChange={(e) => setFile(e.target.files[0])}
                      />
                    </div>
                    <div className=" text-center">
                      <button
                        className="bg-blue-700 hover:bg-blue-800 text-sm py-1  px-2   text-white rounded-md my-2"
                        disabled={!file || submitting}
                        type="submit"
                      >
                        {submitting ? "Uploading..." : "Upload"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TeacherProfile;
