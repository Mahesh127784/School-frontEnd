import React from "react";

const CourseCard = ({ title, color }) => {
  return (
    <div className={`p-4 rounded ${color}`}>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <button className="block mb-2">View Subject</button>
      <button className="block">View Teacher</button>
    </div>
  );
};

export default CourseCard;
