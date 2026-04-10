const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-blue-100 to-blue-50">
      <div className="w-full max-w-2xl bg-white border border-blue-200 rounded-xl p-6 shadow-lg">
        <h1 className="text-3xl font-bold text-blue-900 mb-4">Welcome to Task Manager</h1>
        <p className="text-gray-700 text-lg mb-4">
          A simple and elegant task management application built with React.
        </p>
        <div className="space-y-3 text-gray-600">
          <p className="flex items-center">
            <span className="mr-3 text-blue-600">✓</span>
            Add and manage your daily tasks
          </p>
          <p className="flex items-center">
            <span className="mr-3 text-blue-600">✓</span>
            Toggle task status between In Progress and Completed
          </p>
          <p className="flex items-center">
            <span className="mr-3 text-blue-600">✓</span>
            Filter tasks by status
          </p>
          <p className="flex items-center">
            <span className="mr-3 text-blue-600">✓</span>
            Automatically save tasks to your browser
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
