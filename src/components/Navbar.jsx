import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="top-nav">
      <div className="top-nav-inner">
        <h1 className="top-nav-title">Task Manager</h1>
        <div className="top-nav-links">
            <NavLink
              to="/home"
              className={({ isActive }) =>
                `top-nav-link ${
                  isActive
                    ? "top-nav-link-active"
                    : ""
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/tasks"
              className={({ isActive }) =>
                `top-nav-link ${
                  isActive
                    ? "top-nav-link-active"
                    : ""
                }`
              }
            >
              Tasks
            </NavLink>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `top-nav-link ${
                  isActive
                    ? "top-nav-link-active"
                    : ""
                }`
              }
            >
              Profile
            </NavLink>
            <button
              type="button"
              className="top-nav-logout"
              onClick={() => {
                localStorage.removeItem("authUser");
                navigate("/login", { replace: true });
              }}
            >
              Logout
            </button>
          </div>
        </div>
    </nav>
  );
};

export default Navbar;
