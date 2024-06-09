import React from "react";
import Sidebar from "../components/Sidebar";
import Help from "../../CommonPages/help/Help";
import Header from "../../CommonPages/teacherAndStudent/navbar/Header";

function TeacherHelp() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex-wrap ml-40 md:ml-64  p-4 ">
        <Header user="Teacher" />
        <Help url={"/teacherprofile"} />
      </div>
    </div>
  );
}

export default TeacherHelp;
