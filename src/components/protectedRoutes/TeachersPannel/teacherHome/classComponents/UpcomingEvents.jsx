import React from "react";

const UpcomingEvents = () => {
  return (
    <div className="p-4 bg-white shadow rounded">
      <h3 className="text-xl font-bold mb-4">Upcoming Events</h3>
      <ul>
        <li className="mb-2">
          <div className="flex items-center">
            <span className="inline-block w-2 h-2 bg-red-500 rounded-full mr-2"></span>
            <span>Homework Correction - Tommorrow - 11:00 - 12:00</span>
          </div>
        </li>
        <li className="mb-2">
          <div className="flex items-center">
            <span className="inline-block w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
            <span>
              10th class preperatory Exam - This Weeks last - 9:00 - 12:00
            </span>
          </div>
        </li>
        <li className="mb-2">
          <div className="flex items-center">
            <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            <span>10th Standared Workshop - Next week</span>
          </div>
        </li>
        <li className="mb-2">
          <div className="flex items-center">
            <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            <span>School Conference Meeting- Next Week </span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default UpcomingEvents;
