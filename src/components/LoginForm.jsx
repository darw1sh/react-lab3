import { Formik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";

const loginSchema = Yup.object({
  email: Yup.string().email("Enter a valid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const LoginForm = () => {
  const navigate = useNavigate();

  return (
    <section className="auth-card">
      <h1 className="auth-title">Login</h1>
      <p className="auth-subtitle">Sign in to continue.</p>

      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={loginSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            localStorage.setItem("authUser", values.email);
            setSubmitting(false);
            navigate("/home", {
              state: {
                user: values.email,
                source: "login",
              },
            });
          }, 450);
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <form className="auth-form" onSubmit={handleSubmit} noValidate>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={touched.email && errors.email ? "field-error" : ""}
              />
              {touched.email && errors.email ? <p className="error-text">{errors.email}</p> : null}
            </div>

            <div className="field">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={touched.password && errors.password ? "field-error" : ""}
              />
              {touched.password && errors.password ? (
                <p className="error-text">{errors.password}</p>
              ) : null}
            </div>

            <button className="submit-btn" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Signing in..." : "Login"}
            </button>
          </form>
        )}
      </Formik>

      <p className="auth-footer">
        New here? <Link className="auth-link" to="/signup">Create an account</Link>
      </p>
    </section>
  );
};

export default LoginForm;
