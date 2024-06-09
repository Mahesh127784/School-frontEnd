import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../../CommonPages/teacherAndStudent/navbar/Header";
import Notifications from "../../CommonPages/teacherAndStudent/notifications/Notifications";

function TeacherNotifications() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex-wrap ml-40 md:ml-64  p-4 ">
        <Header user="Student" />
        <Notifications />
      </div>
    </div>
  );
}

export default TeacherNotifications;
