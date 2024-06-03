import React from "react";
import AdminSidebar from "./AdminSidebar";
import AdminDashboard from "./AdminDashboard";

function Home() {
  return (
    <div>
      <div className="min-h-[100vh] max-h-[100%]    flex ">
        <AdminSidebar />
        <AdminDashboard />
      </div>
    </div>
  );
}

export default Home;
