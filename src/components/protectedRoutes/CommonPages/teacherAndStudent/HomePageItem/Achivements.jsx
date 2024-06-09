import React from "react";

function AchivementsBox({ data }) {
  return (
    <div className=" max-w-md border-gray-600 border-2  rounded text-white bg-black bg-opacity-65">
      <h3 className="text-lg mb-3 font-semibold bg-fuchsia-700 px-4 py-2 ">
        Your Achievements In Our School :
      </h3>
      <ul className="px-6">
        {data && data.length === 0 ? (
          data?.map((achieve, index) => (
            <li className=" list-disc border-b py-2" key={index}>
              {achieve}
            </li>
          ))
        ) : (
          <li className=" list-disc border-b py-2">
            No Achivements in the school
          </li>
        )}
      </ul>
    </div>
  );
}

export default AchivementsBox;
