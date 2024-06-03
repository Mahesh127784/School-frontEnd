import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTeacher,
  deleteTeacher,
  updateTeacher,
} from "../../../../../redux/features/teachers/teachersSlice.js";
import RemoveMember from "../../../../../apis/removeMembers/RemoveMember.js";
import { useNavigate } from "react-router-dom";
import TeachersList from "./tableLists/TeachersList.jsx";
import { getAllUsers } from "../../../../../apis/getUsersData/allUsersData.js";
import { toast } from "react-toastify";

function TeachersTable() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { teachers } = useSelector((state) => state.teachers);

  const Delete = async (id) => {
    dispatch(deleteTeacher(id));
    await RemoveMember("teachers", id);
  };

  const Edit = (member) => {
    dispatch(updateTeacher(""));
    dispatch(updateTeacher(member));
    navigate("/updateteacher");
  };

  useEffect(() => {
    try {
      (async () => {
        const response = await getAllUsers("teachers");
        dispatch(fetchTeacher(response.data.data));
      })();
    } catch (error) {
      toast.error(error.message);
    }
  }, [navigate]);

  return (
    <div className="max-w-4xl mx-auto px-5">
      <TeachersList members={teachers} deleteUser={Delete} updateUser={Edit} />
      {/* <div className="w-full lg:w-[400px] flex  items-center justify-center">
        <div className=" md:mt-12 mx-center">
          <Calendar />
        </div>
      </div> */}
    </div>
  );
}

export default TeachersTable;
