import React from "react";

function RecentlyCompletedTasks({ completedTasks }) {
  return (
    <div className=" max-w-md border-gray-600 border-2  rounded text-white bg-black bg-opacity-65 pb-5">
      <h3 className="text-lg mb-3 font-semibold bg-fuchsia-700 px-4 py-2 ">
        Your Recently completed tasks :
      </h3>
      <ul className="px-6 ">
        {completedTasks.length === 0 ? (
          <li>No data avalable!</li>
        ) : (
          completedTasks.map((ct, index) => {
            if (index > 2) return;

            return (
              <li className=" list-disc border-b py-2" key={index}>
                {ct}
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
}

export default RecentlyCompletedTasks;
