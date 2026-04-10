const Profile = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-blue-100 to-blue-50">
      <div className="w-full max-w-2xl bg-white border border-blue-200 rounded-xl p-6 shadow-lg">
        <h1 className="text-3xl font-bold text-blue-900 mb-4">Profile</h1>
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Name:</label>
            <p className="text-gray-600">Developer</p>
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Email:</label>
            <p className="text-gray-600">developer@example.com</p>
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">About:</label>
            <p className="text-gray-600">This is a React task management application for organizing daily tasks efficiently.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
