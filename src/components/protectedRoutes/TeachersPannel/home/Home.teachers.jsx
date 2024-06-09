import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { useSelector } from "react-redux";
import Achivements from "./components/Achivements";
import RecentActivities from "./components/RecentActivities";
import RecentlyCompletedTasks from "./components/RecentlyCompletedTasks";
import AddTask from "./components/AddTasks";
import AllTasksList from "./components/AllTasksList";
import Header from "../../CommonPages/teacherAndStudent/navbar/Header";

function Home() {
  const { user } = useSelector((state) => state.user);

  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const style = {
    backgroundImage:
      "url(https://img.freepik.com/premium-photo/luxurious-new-building-with-curb-appeal_1127-4448.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1704844800&semt=ais)",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  // Retrieving todos from localStorage
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasks(storedTasks);
    }

    const storedCompletedTasks = JSON.parse(
      localStorage.getItem("completedTasks")
    );
    if (storedCompletedTasks) {
      setCompletedTasks(storedCompletedTasks);
    }
  }, []);
  return (
    <div className="flex h-fit pb-10" style={style}>
      <Sidebar transference="  bg-opacity-50" />
      <div className="flex-1 flex-wrap ml-40 md:ml-64  p-4 ">
        <Header user="Teacher" />
        <div className="px-3 md:px-10">
          <div className=" justify-center flex flex-wrap gap-10 mb-10 mt-8">
            <div className="p-4 pr-5  inline-block bg-green-300 rounded-3xl border-4 border-gray-400 ">
              <h2 className="text-xl font-bold pb-1">Welcome, {user.name}!</h2>
              <p>All your works are now online.</p>
            </div>

            <div className="p-4 pr-5  inline-block bg-gray-500 rounded-3xl border-4 border-green-400 text-white">
              <h2 className="text-xl font-bold pb-1">Quote of the day...</h2>
              <p>" Well done is better than well said . . . "</p>
            </div>
          </div>

          <div className=" pt-5 justify-center flex gap-5 flex-wrap lg:gap-20 mb-10">
            <>
              <RecentActivities />
            </>
            <>
              <Achivements />
            </>
            <>
              <RecentlyCompletedTasks completedTasks={completedTasks} />
            </>
          </div>
          <div className=" flex md:gap-20  mt-20 flex-wrap">
            <>
              <AddTask tasks={tasks} setTasks={setTasks} />
            </>
            <>
              <AllTasksList
                tasks={tasks}
                setTasks={setTasks}
                completedTasks={completedTasks}
                setCompletedTasks={setCompletedTasks}
              />
            </>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
