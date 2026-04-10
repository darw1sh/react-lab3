# React Lab 3 - Auth Forms with Validation

A mini React project that includes login and signup forms using Formik + Yup, protected routing, and a task/profile flow after authentication.

## Live Demo

GitHub Pages URL:

https://darw1sh.github.io/react-lab3/

## Features

- Login form (Formik)
- Signup form (Formik)
- Form validation with Yup
- Inline validation error messages
- Redirect to protected home after successful submit
- Protected routes for Home, Tasks, Task Details, and Profile
- Navbar navigation (Home, Tasks, Profile)
- Task management with localStorage persistence

## Tech Stack

- React
- React Router
- Formik
- Yup
- Vite

## Project Structure

src/components/

- LoginForm.jsx
- SignupForm.jsx
- ProtectedRoute.jsx
- Navbar.jsx
- Home.jsx
- Tasks.jsx
- TaskDetails.jsx
- Profile.jsx

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

## Deployment (GitHub Pages)

This project is configured for deployment to:

- Repository: https://github.com/darw1sh/react-lab3
- Pages URL: https://darw1sh.github.io/react-lab3/

To deploy:

```bash
npm run deploy
```
