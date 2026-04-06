const Navbar = ({ currentPage, setCurrentPage }) => {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Task Manager</h1>
          <div className="flex gap-6">
            <button
              onClick={() => setCurrentPage("home")}
              className={`px-4 py-2 rounded font-medium transition ${
                currentPage === "home"
                  ? "bg-white text-blue-600"
                  : "hover:bg-blue-700"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => setCurrentPage("tasks")}
              className={`px-4 py-2 rounded font-medium transition ${
                currentPage === "tasks"
                  ? "bg-white text-blue-600"
                  : "hover:bg-blue-700"
              }`}
            >
              Tasks
            </button>
            <button
              onClick={() => setCurrentPage("profile")}
              className={`px-4 py-2 rounded font-medium transition ${
                currentPage === "profile"
                  ? "bg-white text-blue-600"
                  : "hover:bg-blue-700"
              }`}
            >
              Profile
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
