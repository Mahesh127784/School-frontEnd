import React from "react";

const InfoCard = ({ title, count, description }) => {
  return (
    <div
      className={`min-w-[250px] max-w-[350px] my-8 mx-10  rounded overflow-hidden shadow-xl bg-sky-200  mt-4 h-[140px] md:h-[180px] `}
    >
      <div className="px-6 pt-4 pb-3 md:py-4">
        <div className="font-bold underline text-base lg:text-xl mb-2 text-pink-800">
          {title}
        </div>
        <p className="  text-gray-600 text-[15px] lg:text-base">
          {description}
        </p>
      </div>
      <div className=" px-6 md:py-4">
        <p className=" text-gray-500 mx-auto text-base lg:text-xl font-bold ">
          {count}
        </p>
      </div>
    </div>
  );
};

export default InfoCard;
