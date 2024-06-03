import React, { useState } from "react";
import { AdminNavbar } from "../../CommonPages/userNavbar/UserNavbar";

const Notifications = () => {
  const [open, setOpen] = useState({
    0: true,
    1: true,
    2: true,
    3: true,
  });

  const notificationItems = [
    "School's Announcement",
    "New Admission Forms",
    "General Notifications",
    "Complaints...!",
  ];

  const handleClick = (i) => {
    setOpen({
      ...open,
      [i]: !open[i],
    });
  };

  return (
    <div className=" h-screen bg-green-200">
      <header>
        <AdminNavbar />
      </header>
      <section className="flex flex-col gap-3 items-center py-3">
        {notificationItems.map((item, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className="bg-gray-200 border-2 border-gray-400  w-60 md:w-[700px] lg:w-[1200px] "
          >
            <div className="flex justify-between px-3 md:px-10 py-1">
              <h2
                className={`${
                  index === 3 ? "text-red-700" : ""
                } text-[12px] md:text-xl lg:text-2xl font-semibold`}
              >
                {item}
              </h2>
              {open[index] ? (
                <i className="fa-solid fa-circle-chevron-down text-gray-900 ml-1 md:text-xl lg:text-2xl"></i>
              ) : (
                <i className="fa-solid fa-circle-chevron-up ml-1 md:text-xl lg:text-2xl text-gray-900"></i>
              )}
            </div>
            <ul
              hidden={open[index]}
              className="  bg-blue-300 text-[12px] md:text-base lg:text-xl"
            >
              <li>No New Messages</li>
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Notifications;
