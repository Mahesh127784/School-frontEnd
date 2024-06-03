import React from "react";
import CourseCard from "./classComponents/CourseCard";
import Schedule from "./classComponents/Schedule";
import Calendar from "./classComponents/Calendar";
import UpcomingEvents from "./classComponents/UpcomingEvents";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

function Classes() {
  // if (JSON.stringify(user) === "{}") {
  //   return (
  //     <div>
  //       Failed to fetch your data, please
  //       <a
  //         className="mx-1 underline font-medium text-blue-950"
  //         href="teacherClasses"
  //       >
  //         refresh
  //       </a>
  //       the page or
  //       <a className="mx-1 underline font-semibold text-blue-700" href="/login">
  //         login
  //       </a>
  //       again
  //     </div>
  //   );
  // }
  return (
    <div>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 flex-wrap ml-40 md:ml-64  p-4 ">
          <Header />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <CourseCard title="1 to 5th class" color="bg-blue-200" />
                <CourseCard title="6-7th class" color="bg-yellow-200" />
                <CourseCard title="8th class" color="bg-red-200" />
                <CourseCard title="9th class" color="bg-blue-100" />
                <CourseCard title="10th class" color="bg-orange-200" />
                <CourseCard title="PU class" color="bg-blue-100" />
              </div>
              <div className="p-10 px-20">
                <Schedule />
              </div>
            </div>
            <div>
              <Calendar />
              <UpcomingEvents />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Classes;
