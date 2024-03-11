import React from "react";

function Entrance() {
  const style = {
    backgroundImage:
      "url(https://img.freepik.com/premium-photo/luxurious-new-building-with-curb-appeal_1127-4448.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1704844800&semt=ais)",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <>
      <div className="w-auto h-[90vh]" style={style}>
        <div className="absolute  w-[100%] h-[90%]  opacity-75 bg-black flex flex-col items-center  text-white p-20  md:pt-32 md:px-60">
          <div className="w-80 md:w-[500px] h-[2px]  bg-white"></div>
          <h5 className="text-sm lg:text-[20px]  m-2 font-semibold">
            Great Indian International School
          </h5>
          <div className=" mx-center w-[320px]  md:w-[500px] h-[2px]  bg-white"></div>

          <h1 className="text-5xl font-bold m-2 ">GIIS</h1>
          <p className="text-sm lg:text-[15px]  text-center lg:mx-40    font-semibold">
            The Great Indian International School, Established in the year 2***
            and managed by -Indian- Welfare Trust is spread over the beautiful
            valley of -city- in -district-. Is a school with a difference poised
            to take on fresh challenges, leading the way to a better future and
            setting new standards in the field of education.
          </p>
        </div>
      </div>
    </>
  );
}

export default Entrance;
