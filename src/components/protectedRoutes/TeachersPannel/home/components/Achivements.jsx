import React from "react";
import AchivementsBox from "../../../CommonPages/teacherAndStudent/HomePageItem/Achivements";

function Achivements() {
  const achievements = [
    "Teacher of the year winner - 2022,  2023",
    "Best teacher in the district award - 2023",
  ];
  return <AchivementsBox achievements={achievements} />;
}

export default Achivements;
