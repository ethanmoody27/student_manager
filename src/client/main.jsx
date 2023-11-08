import React from "react";
import ReactDOM from "react-dom/client";

import "./index.less";

import { Provider } from "react-redux";
import store from "./store";
import Students from "./features/students/StudentsList.jsx";
import AuthForm from "./features/auth/AuthForm";
import Tasks from "./features/tasks/Tasks";
import Root from "./layout/Root.jsx";
import AddStudent from "./features/students/AddStudent.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SingleStudent from "./features/students/SingleStudent.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Tasks /> },
      { path: "/tasks", element: <Tasks /> },
      { path: "/login", element: <AuthForm /> },
      { path: "/students", element: <Students /> },
      { path: "/students/:id", element: <SingleStudent /> },
      { path: "/new", element: <AddStudent /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
