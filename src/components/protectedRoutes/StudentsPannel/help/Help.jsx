import React from "react";
import Sidebar from "../components/Sidebar";
import Help from "../../CommonPages/help/Help";
import Header from "../../CommonPages/teacherAndStudent/navbar/Header";

function StudentHelp() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex-wrap ml-40 md:ml-64  p-4 ">
        <Header user="Student" />
        <Help url={"/studentprofile"} />
      </div>
    </div>
  );
}

export default StudentHelp;
