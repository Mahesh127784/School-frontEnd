import React from "react";
import AdminNavbar from "../adminNavbar/AdminNavbar";

const Academics = () => {
  const datas = [
    {
      title: "Financial Records",
      color: "green",
      logo: "fa-money-bill-trend-up",
    },
    {
      title: "Exam",
      color: "orange",
      logo: "fa-file-signature",
    },
    {
      title: "Result",
      color: "red",
      logo: "fa-square-poll-vertical",
    },
    {
      title: "E-Courses",
      color: "yellow",
      logo: "fa-laptop-file",
    },
    {
      title: "School Documents",
      color: "blue",
      logo: "fa-folder-open",
    },
    {
      title: "Others",
      color: "purple",
      logo: "fa-mobile-screen-button",
    },
  ];

  const handleClick = (title) => {
    console.log(title);
  };

  return (
    <div className="pb-11 h-full bg-green-200">
      <div>
        <AdminNavbar />
      </div>

      <div className=" justify-center flex flex-wrap  ">
        {datas.map((data, i) => (
          <div
            key={i}
            onClick={() => handleClick(data.title)}
            className={`h-52 w-[320px] bg-slate-200 hover:bg-white mx-10 my-6  md:mx-16 md:my-12 border-[1px] border-b-[20px] border-${data.color}-500  rounded-2xl flex flex-col items-center justify-around hover:transform hover:scale-110    transition-all duration-500 ease-in-out cursor-pointer`}
          >
            <i
              className={`fa-solid  ${data.logo} w-28 text-center p-5 bg-${data.color}-500 text-[60px] rounded-full `}
            ></i>
            <p className=" text-[18px] font-semibold ">{data.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Academics;
