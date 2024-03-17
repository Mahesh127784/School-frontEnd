import React from "react";
import InfoCard from "./adminHomeDashboard/InfoCard";
import StudentsTable from "./fetchMembersData/StudentsTable.jsx";
import TeachersTable from "./fetchMembersData/TeachersTable.jsx";
import AdminsTable from "./fetchMembersData/AdminsTable.jsx";
import { useSelector } from "react-redux";
import AdminNavbar from "../adminNavbar/AdminNavbar.jsx";

function AdminDashboard() {
  const { students, student } = useSelector((state) => state.students);
  const { teachers, teacher } = useSelector((state) => state.teachers);
  const { admin } = useSelector((state) => state.admins);
  return (
    <div className="w-full pb-14 ">
      <AdminNavbar />
      <div className=" flex justify-evenly flex-wrap h-fit gap-2 ">
        <InfoCard
          title="Total Students"
          count={students.length}
          description="Number of enrolled students in the institution."
        />
        <InfoCard
          title="Total Teachers"
          count={teachers.length}
          description="Teachers in all the differnt subjects in the institution."
        />
        <InfoCard
          title="Total staffs"
          count={50}
          description="Total staffs working  in the institution."
        />
      </div>
      {teacher && <TeachersTable />}
      {student && <StudentsTable />}
      {admin && <AdminsTable />}
    </div>
  );
}

export default AdminDashboard;
