import React from "react";

function AllTasksList({ tasks, setTasks, completedTasks, setCompletedTasks }) {
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

  return (
    <div className=" border-gray-600 border-2  rounded  w-full max-w-lg text-white bg-black bg-opacity-65">
      <h3 className="text-lg mb-3 font-semibold bg-fuchsia-700 px-4 py-2 text-white">
        Tasks :
      </h3>
      <ol className="px-6 pb-6">
        {tasks.length === 0 ? (
          <li className="py-2">No tasks to do !</li>
        ) : (
          tasks.map((task, index) => (
            <div className="flex" key={index}>
              <li className="list-decimal border-b w-full py-2">{task}</li>
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
  );
}

export default AllTasksList;
