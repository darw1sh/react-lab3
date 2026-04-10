import { Formik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";

const signupSchema = Yup.object({
  fullName: Yup.string().min(2, "Name must be at least 2 characters").required("Name is required"),
  email: Yup.string().email("Enter a valid email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Please confirm your password"),
});

const SignupForm = () => {
  const navigate = useNavigate();

  return (
    <section className="auth-card">
      <h1 className="auth-title">Signup</h1>
      <p className="auth-subtitle">Create your account to start using the app.</p>

      <Formik
        initialValues={{ fullName: "", email: "", password: "", confirmPassword: "" }}
        validationSchema={signupSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            localStorage.setItem("authUser", values.fullName);
            setSubmitting(false);
            navigate("/home", {
              state: {
                user: values.fullName,
                source: "signup",
              },
            });
          }, 450);
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <form className="auth-form" onSubmit={handleSubmit} noValidate>
            <div className="field">
              <label htmlFor="fullName">Full Name</label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Your name"
                value={values.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
                className={touched.fullName && errors.fullName ? "field-error" : ""}
              />
              {touched.fullName && errors.fullName ? (
                <p className="error-text">{errors.fullName}</p>
              ) : null}
            </div>

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
                placeholder="Create a password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={touched.password && errors.password ? "field-error" : ""}
              />
              {touched.password && errors.password ? (
                <p className="error-text">{errors.password}</p>
              ) : null}
            </div>

            <div className="field">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                className={touched.confirmPassword && errors.confirmPassword ? "field-error" : ""}
              />
              {touched.confirmPassword && errors.confirmPassword ? (
                <p className="error-text">{errors.confirmPassword}</p>
              ) : null}
            </div>

            <button className="submit-btn" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Creating account..." : "Signup"}
            </button>
          </form>
        )}
      </Formik>

      <p className="auth-footer">
        Already have an account? <Link className="auth-link" to="/login">Go to login</Link>
      </p>
    </section>
  );
};

export default SignupForm;
