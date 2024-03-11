import React, { useEffect } from "react";
import Calendar from "../home/adminHomeDashboard/Calender";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  deleteAdmin,
  fetchAdmin,
  updateAdmin,
} from "../../../../redux/features/admins/adminsSlice";
import RemoveMember from "../../../../apis/removeMembers/RemoveMember";
import AdminsList from "./tableLists/AdminsList";
import { getAllUsers } from "../../../../apis/getUsersData/allUsersData";

function AdminsTable() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { admins } = useSelector((state) => state.admins);

  const Delete = async (id) => {
    dispatch(deleteAdmin(id));
    alert(await RemoveMember("admins", id));
  };

  const Edit = (member) => {
    dispatch(updateAdmin(""));
    dispatch(updateAdmin(member));
    navigate("/UpdateAdmin");
  };

  useEffect(() => {
    try {
      (async () => {
        const response = await getAllUsers("admins");
        dispatch(fetchAdmin(response.data.data));
      })();
    } catch (error) {
      alert(error.message);
    }
  }, []);

  return (
    <div className="md:flex gap-10 flex-wrap">
      <AdminsList members={admins} deleteUser={Delete} updateUser={Edit} />
      <div className="w-full lg:w-[400px] flex  items-center justify-center">
        <div className=" md:mt-12 mx-center">
          <Calendar />
        </div>
      </div>
    </div>
  );
}

export default AdminsTable;
