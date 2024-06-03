import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { useSelector } from "react-redux";
import Header from "../components/Header";

function Home() {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [todo, setTodo] = useState("");
  const { user } = useSelector((state) => state.user);

  const activities = [
    { description: "Conducted Maths Exam", date: "Yesterday" },
    {
      description: "Scheduled parent-teacher meetings",
      date: "Today",
    },
  ];
  const achievements = [
    "Teacher of the year winner - 2022,  2023",
    "Best teacher in the district award - 2023",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTasks = [...tasks, todo];
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    setTodo("");
  };

  const style = {
    backgroundImage:
      "url(https://img.freepik.com/premium-photo/luxurious-new-building-with-curb-appeal_1127-4448.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1704844800&semt=ais)",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const completeTodo = (task) => {
    const completed = [task, completedTasks[0], completedTasks[1]];
    setCompletedTasks(completed);
    localStorage.setItem("completedTasks", JSON.stringify(completed));
    deleteTodo(task);
  };

  const deleteTodo = (task) => {
    const newTasks = tasks.filter((tsks) => tsks !== task);
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
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
        <Header />
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
            <div className=" bg-black bg-opacity-65 max-w-md border-2 text-white border-gray-600  rounded ">
              <h3 className="text-lg font-semibold  bg-fuchsia-700 px-4 py-2 ">
                Recent Activities :
              </h3>
              <ul className="px-4">
                {activities.map((activity, index) => (
                  <li key={index} className="border-b py-2">
                    {activity.description} - {activity.date}
                  </li>
                ))}
              </ul>
            </div>
            <div className=" max-w-md border-gray-600 border-2  rounded text-white bg-black bg-opacity-65">
              <h3 className="text-lg mb-3 font-semibold bg-fuchsia-700 px-4 py-2 ">
                Your Achievements In Our School :
              </h3>
              <ul className="px-6">
                {achievements.map((achieve, index) => (
                  <li className=" list-disc border-b py-2" key={index}>
                    {achieve}
                  </li>
                ))}
              </ul>
            </div>
            <div className=" max-w-md border-gray-600 border-2  rounded text-white bg-black bg-opacity-65 pb-5">
              <h3 className="text-lg mb-3 font-semibold bg-fuchsia-700 px-4 py-2 ">
                Your Recently completed tasks :
              </h3>
              <ul className="px-6 ">
                {completedTasks.length === 0 ? (
                  <li>No data avalable!</li>
                ) : (
                  completedTasks.map((ct, index) => {
                    if (index > 2) return;

                    return (
                      <li className=" list-disc border-b py-2" key={index}>
                        {ct}
                      </li>
                    );
                  })
                )}
              </ul>
            </div>
          </div>
          <div className=" flex md:gap-20  mt-20 flex-wrap">
            <div className=" w-full max-w-md    h-fit  text-white border-2 rounded p-2 border-white">
              <h3 className="text-lg bg-black bg-opacity-60 font-bold px-4 py-2 rounded-lg w-fit mb-2">
                Any tasks for today?
              </h3>
              <form onSubmit={handleSubmit} className="flex gap-2 md:gap-5">
                <input
                  type="text"
                  name="todo"
                  onChange={(e) => setTodo(e.target.value)}
                  value={todo}
                  placeholder="Enter your tasks..."
                  className="w-full max-w-md px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 bg-black focus:ring-white  "
                />
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600  px-4 rounded-lg font-semibold "
                >
                  Add
                </button>
              </form>
            </div>

            <div className=" border-gray-600 border-2  rounded  w-full max-w-lg text-white bg-black bg-opacity-65">
              <h3 className="text-lg mb-3 font-semibold bg-fuchsia-700 px-4 py-2 text-white">
                Tasks :
              </h3>
              <ol className="px-6 pb-6">
                {tasks.length === 0 ? (
                  <li className="py-2" key="no-tasks">
                    No tasks to do !
                  </li>
                ) : (
                  tasks.map((task, index) => (
                    <div className="flex" key={index}>
                      <li className="list-decimal border-b w-full py-2">
                        {task}
                      </li>
                      <div className="flex gap-2 text-sm pl-1 mt-2">
                        <button
                          onClick={() => completeTodo(task)}
                          className=" h-fit bg-green-700 hover:bg-green-800 border-2 border-black px-1 rounded "
                        >
                          Completed
                        </button>
                        <button
                          onClick={() => deleteTodo(task)}
                          className=" h-fit hover:bg-red-800 bg-red-700 border-2 border-black px-1 rounded "
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
