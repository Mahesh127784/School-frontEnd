import React from "react";

const InfoCard = ({ title, count, description }) => {
  return (
    <div
      className={`w-[79px] md:w-[200px] lg:w-[300px] rounded overflow-hidden shadow-lg bg-lime-600  mt-4 h-[95px] md:h-[180px]`}
    >
      <div className="p-2 md:px-6 md:py-4">
        <div className="font-bold underline text-[9px] md:text-[15px] lg:text-xl mb-1 md:mb-2 text-pink-800">
          {title}
        </div>
        <p className="text-white text-[8px] md:text-[11px] lg:text-base">
          {description}
        </p>
      </div>
      <div className=" px-2  md:px-6 md:py-4">
        <p className="text-yellow-300 mx-auto text-sm md:text-[base] lg:text-xl font-bold ">
          {count}
        </p>
      </div>
    </div>
  );
};

export default InfoCard;
