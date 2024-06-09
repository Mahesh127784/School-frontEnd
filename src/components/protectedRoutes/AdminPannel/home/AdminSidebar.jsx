import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showTeacher } from "../../../../redux/features/teachers/teachersSlice";
import { showStudent } from "../../../../redux/features/students/studentsSlice";
import { showAdmin } from "../../../../redux/features/admins/adminsSlice";

function AdminSidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [categories, setCategories] = useState([
    {
      type: "student",
      hidden: true,
      openedSidebar: "none",
      closedSidebar: "inline-block",
      bg: "",
    },
    {
      type: "teacher",
      hidden: true,
      openedSidebar: "none",
      closedSidebar: "inline-block",
      bg: "",
    },
    {
      type: "admin",
      hidden: true,
      openedSidebar: "none",
      closedSidebar: "inline-block",
      bg: "",
    },
  ]);

  const handleClick = (type) => {
    setCategories((prevCategories) =>
      prevCategories.map((category) => {
        if (category.type !== type) {
          return {
            ...category,
            hidden: true,
            closedSidebar: "inline-block",
            openedSidebar: "none",
            bg: "",
          };
        } else {
          return {
            ...category,
            hidden: false,
            closedSidebar: "none",
            openedSidebar: "inline-block",
            bg: "bg-slate-800",
          };
        }
      })
    );
  };

  const getData = (user) => {
    if (user === "student") {
      dispatch(showStudent(true));
      dispatch(showTeacher(false));
      dispatch(showAdmin(false));
    }
    if (user === "teacher") {
      dispatch(showStudent(false));
      dispatch(showTeacher(true));
      dispatch(showAdmin(false));
    }
    if (user === "admin") {
      dispatch(showStudent(false));
      dispatch(showTeacher(false));
      dispatch(showAdmin(true));
    }
  };
  const addNew = (user) => {
    if (user === "student") navigate("/newstudent");
    if (user === "teacher") navigate("/newteacher");
    if (user === "admin") navigate("/newadmin");
  };

  return (
    <>
      <div className="bg-green-700 fixed h-full w-[150px] md:w-[250px] text-white text-center">
        <div className="my-6">
          <h2 className="font-bold text-2xl md:text-5xl px-[1%] text-red-300">
            <i className="fa-solid fa-book-open text-slate-300 text-xl md:text-3xl mr-3 md:mr-4 "></i>
            GIIS
            <i className="fa-solid fa-hands-praying text-gray-400 text-xl md:text-3xl ml-3 md:ml-4"></i>
          </h2>

          <p className="font-bold text-[10px] md:text-base text-yellow-300 my-2">
            Welcome to our School
          </p>
        </div>

        <div className="bg-yellow-300 h-[1px] mb-1"></div>
        <div className="bg-yellow-300 h-[1px] "></div>
        <h5 className="my-3 md:my-6 md:mt-8 font-bold text-[15px] md:text-[18px] underline">
          Admin Panel
        </h5>

        {categories.map((category) => (
          <div
            key={category.type}
            onClick={() => handleClick(category.type)}
            className={`${category.bg} hover:bg-slate-800  py-2 md:py-5 flex flex-col gap-1 my-1`}
          >
            <p
              className={`font-medium text-[12px] md:text-base cursor-pointer ${category.type} hover:text-blue-400`}
            >
              {category.type === "teacher" && "Teacher's Data"}
              {category.type === "student" && "Students Data"}
              {category.type === "admin" && "Admin Data"}
              <i
                style={{ display: category.openedSidebar }}
                className="fa-solid fa-circle-chevron-up ml-1 md:text-sm"
              ></i>
              <i
                style={{ display: category.closedSidebar }}
                className="fa-solid fa-circle-chevron-down ml-1  md:text-sm"
              ></i>
            </p>
            <p
              onClick={() => addNew(category.type)}
              hidden={category.hidden}
              className="text-[12px] md:text-base cursor-pointer hover:bg-slate-500  py-1 lg:py-2"
            >
              Add
            </p>
            <p
              onClick={() => getData(category.type)}
              hidden={category.hidden}
              className="text-[12px] md:text-base cursor-pointer hover:bg-slate-500 py-1 lg:py-2"
            >
              Data
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default AdminSidebar;
