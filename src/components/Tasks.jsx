import { useState, useEffect } from "react";

const Tasks = () => {
  const [taskName, setTaskName] = useState("");
  const [filter, setFilter] = useState("all");
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [
      { id: 1, name: "Task 1", status: "In Progress" },
      { id: 2, name: "Task 2", status: "Completed" },
    ];
  });

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (event) => {
    event.preventDefault(); // to prevent page reload on form submit

    const trimmedTask = taskName.trim(); // handle validation
    if (!trimmedTask) return;

    const newTask = {
      id: Date.now(),
      name: trimmedTask,
      status: "In Progress",
    };

    setTasks((tasks) => [...tasks, newTask]);
    setTaskName("");
  };

  const handleDeleteTask = (taskId) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== taskId));
  };

  const handleToggleStatus = (taskId) => {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              status: task.status === "In Progress" ? "Completed" : "In Progress",
            }
          : task
      )
    );
  };

  const filteredTasks = filter === "completed" 
    ? tasks.filter((task) => task.status === "Completed") 
    : tasks;

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-blue-100 to-blue-50">
      <div className="w-full max-w-2xl bg-white border border-blue-200 rounded-xl p-6 shadow-lg">
        <h1 className="text-2xl font-bold text-blue-900 mb-4">Task Table</h1>

        <form className="flex flex-col sm:flex-row gap-2 mb-4" onSubmit={handleAddTask}>
          <input
            type="text"
            placeholder="Enter a task"
            value={taskName}
            onChange={(event) => setTaskName(event.target.value)}
            className="flex-1 border border-blue-300 rounded-lg px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg cursor-pointer hover:bg-blue-700 transition">Add Task</button>
        </form>

        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded font-medium transition ${
              filter === "all"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            All Tasks
          </button>
          <button
            onClick={() => setFilter("completed")}
            className={`px-4 py-2 rounded font-medium transition ${
              filter === "completed"
                ? "bg-green-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Completed Only
          </button>
        </div>

        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border-b border-blue-100 px-4 py-2 text-left text-blue-700 bg-blue-50 font-semibold">#</th>
              <th className="border-b border-blue-100 px-4 py-2 text-left text-blue-700 bg-blue-50 font-semibold">Task</th>
              <th className="border-b border-blue-100 px-4 py-2 text-left text-blue-700 bg-blue-50 font-semibold">Status</th>
              <th className="border-b border-blue-100 px-4 py-2 text-left text-blue-700 bg-blue-50 font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredTasks.length === 0 ? (
              <tr>
                <td colSpan="4" className="border-b border-blue-100 px-4 py-2 text-center text-gray-500 italic">
                  No tasks yet.
                </td>
              </tr>
            ) : (
              filteredTasks.map((task, index) => (
                <tr key={task.id} className={task.status === "Completed" ? "bg-green-50" : ""}>
                  <td className="border-b border-blue-100 px-4 py-2 text-left">{index + 1}</td>
                  <td className="border-b border-blue-100 px-4 py-2 text-left">{task.name}</td>
                  <td className="border-b border-blue-100 px-4 py-2 text-left">
                    <button
                      onClick={() => handleToggleStatus(task.id)}
                      className={`px-3 py-1 rounded font-medium text-sm transition ${
                        task.status === "Completed"
                          ? "bg-green-200 text-green-800 hover:bg-green-300"
                          : "bg-yellow-200 text-yellow-800 hover:bg-yellow-300"
                      }`}
                    >
                      {task.status}
                    </button>
                  </td>
                  <td className="border-b border-blue-100 px-4 py-2 text-left">
                    <button
                      onClick={() => handleDeleteTask(task.id)}
                      className="px-2 py-1 border border-red-500 text-red-500 rounded cursor-pointer hover:bg-red-50 transition text-sm font-medium"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tasks;
