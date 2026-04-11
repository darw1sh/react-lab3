import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Tasks from "./components/Tasks";
import TaskDetails from "./components/TaskDetails";
import Profile from "./components/Profile";
import "./App.css";

const App = () => {
  const isAuthenticated = Boolean(localStorage.getItem("authUser"));

  return (
    <HashRouter>
      <div className="auth-shell">
        <Routes>
          <Route
            path="/"
            element={<Navigate to={isAuthenticated ? "/home" : "/login"} replace />}
          />
          <Route
            path="/login"
            element={isAuthenticated ? <Navigate to="/home" replace /> : <LoginForm />}
          />
          <Route
            path="/signup"
            element={isAuthenticated ? <Navigate to="/home" replace /> : <SignupForm />}
          />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Navbar />
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/tasks"
            element={
              <ProtectedRoute>
                <Navbar />
                <Tasks />
              </ProtectedRoute>
            }
          />
          <Route
            path="/tasks/:id"
            element={
              <ProtectedRoute>
                <Navbar />
                <TaskDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Navbar />
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </div>
    </HashRouter>
  );
};

export default App;
