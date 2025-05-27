import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="dashboard-wrapper flex h-screen overflow-hidden">
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full bg-blue-900 text-white z-10">
        <Navbar />
      </div>
      {/* Sidebar */}
      <div className="fixed top-0 left-0 h-screen w-[235px] pt-[80px] bg-blue-900 text-white z-10">
        <Sidebar />
      </div>
      {/* Main Content */}
      <div className="ml-[235px] pt-[80px] h-screen overflow-y-auto bg-blue-50 flex-1">
        <div className="dashboard-content p-4 text-sm leading-6 max-w-full overflow-x-hidden">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
