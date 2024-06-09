import React from "react";
import Help from "../../CommonPages/help/Help";
import AdminNavbar from "../adminNavbar/AdminNavbar";

function AdminHelp() {
  return (
    <div className=" h-screen bg-green-200">
      <header>
        <AdminNavbar />
      </header>
      <Help url={"/adminprofile"} />
    </div>
  );
}

export default AdminHelp;
