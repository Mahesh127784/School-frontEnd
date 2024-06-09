import React from "react";

function RecentActivities() {
  const activities = [
    { description: "Conducted Maths Exam", date: "Yesterday" },
    {
      description: "Scheduled parent-teacher meetings",
      date: "Today",
    },
  ];

  return (
    <div className=" bg-black bg-opacity-65 max-w-md border-2 text-white border-gray-600  rounded ">
      <h3 className="text-lg font-semibold  bg-fuchsia-700 px-4 py-2 ">
        Recent Activities :
      </h3>
      <ul className="px-4">
        {activities.map((activity, index) => (
          <li key={index} className="border-b py-2">
            {activity.description} - {activity.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecentActivities;
