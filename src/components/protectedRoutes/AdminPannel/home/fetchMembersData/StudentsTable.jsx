import React, { useEffect } from "react";
import Calendar from "../adminHomeDashboard/Calender.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchStudent,
  deleteStudent,
  updateStudent,
} from "../../../../../redux/features/students/studentsSlice.js";
import RemoveMember from "../../../../../apis/removeMembers/RemoveMember.js";
import { useNavigate } from "react-router-dom";
import StudentsList from "./tableLists/StudentsList.jsx";
import { getAllUsers } from "../../../../../apis/getUsersData/allUsersData.js";

function StudentsTable() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { students } = useSelector((state) => state.students);
  const Delete = async (id) => {
    dispatch(deleteStudent(id));
    alert(await RemoveMember("students", id));
  };

  const Edit = (member) => {
    dispatch(updateStudent(""));
    dispatch(updateStudent(member));
    navigate("/UpdateStudent");
  };

  useEffect(() => {
    try {
      (async () => {
        const response = await getAllUsers("students");
        dispatch(fetchStudent(response.data.data));
      })();
    } catch (error) {
      alert(error.message);
    }
  }, []);

  return (
    <div className="md:flex gap-10 flex-wrap">
      <StudentsList members={students} deleteUser={Delete} updateUser={Edit} />
      <div className="w-full lg:w-[400px] flex  items-center justify-center">
        <div className=" md:mt-12 mx-center">
          <Calendar />
        </div>
      </div>
    </div>
  );
}

export default StudentsTable;
