import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Help from "../../CommonPages/help/Help.home";

function TeacherHelp() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex-wrap ml-40 md:ml-64  p-4 ">
        <Header />
        <Help url={"/teacherprofile"} />
      </div>
    </div>
  );
}

export default TeacherHelp;
