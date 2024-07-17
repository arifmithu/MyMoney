import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root.jsx";
import RegisterType from "./components/RegisterType.jsx";
import UserRegistration from "./components/UserRegistration.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: (
          <h1 className="flex-1 w-full flex items-center justify-center text-6xl text-black font-bold">
            Welcome to My Money
          </h1>
        ),
      },
      {
        path: "/registerType",
        element: <RegisterType />,
      },
      {
        path: "/userRegistration",
        element: <UserRegistration />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
