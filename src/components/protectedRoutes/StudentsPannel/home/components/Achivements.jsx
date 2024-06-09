import React from "react";
import AchivementsBox from "../../../CommonPages/teacherAndStudent/HomePageItem/Achivements";

function StudentAchivements() {
  const achievements = [
    "Student of the year winner - 2022,  2023",
    "School topper  - 2023",
  ];
  return <AchivementsBox achievements={achievements} />;
}

export default StudentAchivements;
