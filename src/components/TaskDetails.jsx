import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const TaskDetails = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      const tasks = JSON.parse(savedTasks);
      const foundTask = tasks.find((t) => t.id === parseInt(id));
      setTask(foundTask);
    }
  }, [id]);

  if (!task) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-blue-100 to-blue-50">
        <div className="w-full max-w-2xl bg-white border border-blue-200 rounded-xl p-6 shadow-lg">
          <h1 className="text-2xl font-bold text-blue-900 mb-4">Task Not Found</h1>
          <Link
            to="/tasks"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            ← Back to Tasks
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-blue-100 to-blue-50">
      <div className="w-full max-w-2xl bg-white border border-blue-200 rounded-xl p-6 shadow-lg">
        <Link
          to="/tasks"
          className="text-blue-600 hover:text-blue-800 font-medium mb-4 inline-block"
        >
          ← Back to Tasks
        </Link>
        
        <h1 className="text-3xl font-bold text-blue-900 mb-6 mt-4">{task.name}</h1>
        
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Task ID:</label>
            <p className="text-gray-600">{task.id}</p>
          </div>
          
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Status:</label>
            <div className="inline-block">
              <span
                className={`px-4 py-2 rounded font-medium text-sm ${
                  task.status === "Completed"
                    ? "bg-green-200 text-green-800"
                    : "bg-yellow-200 text-yellow-800"
                }`}
              >
                {task.status}
              </span>
            </div>
          </div>
          
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Description:</label>
            <p className="text-gray-600">
              This is task "{task.name}" with status "{task.status}". 
              You can update this task from the Tasks page.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
