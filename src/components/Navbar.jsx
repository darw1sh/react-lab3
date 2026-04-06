import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Task Manager</h1>
          <div className="flex gap-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-4 py-2 rounded font-medium transition ${
                  isActive
                    ? "bg-white text-blue-600"
                    : "hover:bg-blue-700"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/tasks"
              className={({ isActive }) =>
                `px-4 py-2 rounded font-medium transition ${
                  isActive
                    ? "bg-white text-blue-600"
                    : "hover:bg-blue-700"
                }`
              }
            >
              Tasks
            </NavLink>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `px-4 py-2 rounded font-medium transition ${
                  isActive
                    ? "bg-white text-blue-600"
                    : "hover:bg-blue-700"
                }`
              }
            >
              Profile
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
