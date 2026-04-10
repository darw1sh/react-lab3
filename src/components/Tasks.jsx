import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const fallbackTasks = [
  { id: 1, name: "Task 1", status: "In Progress" },
  { id: 2, name: "Task 2", status: "Completed" },
];

const Tasks = () => {
  const [taskName, setTaskName] = useState("");
  const [filter, setFilter] = useState("all");
  const [tasks, setTasks] = useState(() => {
    try {
      const savedTasks = localStorage.getItem("tasks");
      if (!savedTasks) {
        return fallbackTasks;
      }

      const parsed = JSON.parse(savedTasks);
      return Array.isArray(parsed) ? parsed : fallbackTasks;
    } catch {
      return fallbackTasks;
    }
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
    <section className="tasks-page">
      <div className="tasks-card">
        <h1 className="tasks-title">Task Table</h1>

        <form className="tasks-form" onSubmit={handleAddTask}>
          <input
            type="text"
            placeholder="Enter a task"
            value={taskName}
            onChange={(event) => setTaskName(event.target.value)}
            className="tasks-input"
          />
          <button type="submit" className="tasks-add-btn">Add Task</button>
        </form>

        <div className="tasks-filters">
          <button
            type="button"
            onClick={() => setFilter("all")}
            className={filter === "all" ? "tasks-filter-btn active" : "tasks-filter-btn"}
          >
            All Tasks
          </button>
          <button
            type="button"
            onClick={() => setFilter("completed")}
            className={
              filter === "completed" ? "tasks-filter-btn tasks-filter-completed active" : "tasks-filter-btn"
            }
          >
            Completed Only
          </button>
        </div>

        <table className="tasks-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Task</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredTasks.length === 0 ? (
              <tr>
                <td colSpan="4" className="tasks-empty-row">
                  No tasks yet.
                </td>
              </tr>
            ) : (
              filteredTasks.map((task, index) => (
                <tr key={task.id} className={task.status === "Completed" ? "tasks-row-completed" : ""}>
                  <td>{index + 1}</td>
                  <td>
                    <Link
                      to={`/tasks/${task.id}`}
                      className="tasks-link"
                    >
                      {task.name}
                    </Link>
                  </td>
                  <td>
                    <button
                      type="button"
                      onClick={() => handleToggleStatus(task.id)}
                      className={
                        task.status === "Completed"
                          ? "tasks-status-btn tasks-status-completed"
                          : "tasks-status-btn tasks-status-progress"
                      }
                    >
                      {task.status}
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      onClick={() => handleDeleteTask(task.id)}
                      className="tasks-delete-btn"
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
    </section>
  );
};

export default Tasks;
