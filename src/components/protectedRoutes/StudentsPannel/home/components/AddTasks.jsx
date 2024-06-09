import React, { useState } from "react";

function AddTasks({ setTasks, tasks }) {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTasks = [...tasks, todo];
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    setTodo("");
  };

  return (
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
  );
}

export default AddTasks;
