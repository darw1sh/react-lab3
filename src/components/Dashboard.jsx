import { Link, useLocation, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = location.state?.user || localStorage.getItem("authUser") || "User";
  const source = location.state?.source || "login";

  const sourceText = source === "signup" ? "account created" : "login successful";

  return (
    <section className="auth-card dashboard-card">
      <h1 className="auth-title">Welcome, {user}</h1>
      <p className="dashboard-text">
        Redirect complete: {sourceText}. You reached the protected page after submit.
      </p>
      <button
        className="secondary-btn"
        type="button"
        onClick={() => {
          localStorage.removeItem("authUser");
          navigate("/login", { replace: true });
        }}
      >
        Logout
      </button>
      <p className="auth-footer">
        Need a new account? <Link className="auth-link" to="/signup">Signup here</Link>
      </p>
    </section>
  );
};

export default Dashboard;
