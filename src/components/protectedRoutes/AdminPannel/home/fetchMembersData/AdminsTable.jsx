import React, { useEffect } from "react";
import Calendar from "../adminHomeDashboard/Calender.jsx";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  deleteAdmin,
  fetchAdmin,
  updateAdmin,
} from "../../../../../redux/features/admins/adminsSlice";
import RemoveMember from "../../../../../apis/removeMembers/RemoveMember";
import AdminsList from "./tableLists/AdminsList";
import { getAllUsers } from "../../../../../apis/getUsersData/allUsersData";
import { toast } from "react-toastify";

function AdminsTable() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { admins } = useSelector((state) => state.admins);

  const Delete = async (id) => {
    dispatch(deleteAdmin(id));
    await RemoveMember("admins", id);
  };

  const Edit = (member) => {
    dispatch(updateAdmin(""));
    dispatch(updateAdmin(member));
    navigate("/updateadmin");
  };

  useEffect(() => {
    try {
      (async () => {
        const response = await getAllUsers("admins");
        dispatch(fetchAdmin(response.data.data));
      })();
    } catch (error) {
      toast.error(error.message);
    }
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-5">
      <AdminsList members={admins} deleteUser={Delete} updateUser={Edit} />
      {/* <div className="w-full lg:w-[400px] flex  items-center justify-center">
        <div className=" md:mt-12 mx-center m-15">
          <Calendar />
        </div>
      </div> */}
    </div>
  );
}

export default AdminsTable;
