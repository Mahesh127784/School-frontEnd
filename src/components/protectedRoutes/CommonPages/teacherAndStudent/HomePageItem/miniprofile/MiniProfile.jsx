import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function MiniProfile({ url }) {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  return (
    <div className="text-center mb-6  p-4">
      <img
        onClick={() => navigate(url)}
        src={user.userImage}
        alt="Profile"
        className="rounded-full object-cover w-24 h-24 mx-auto cursor-pointer hover:border-2 border-fuchsia-700 "
      />

      <h2 className="mt-4 text-xl font-bold">
        {user?.name?.charAt(0).toUpperCase() + user?.name?.slice(1) || "Guest"}
      </h2>
      <p>{user?.about || "guest"}</p>
    </div>
  );
}

export default MiniProfile;
