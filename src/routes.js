import React from "react";
import { Navigate } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import MainLayout from "./layouts/MainLayout";
import LoginView from "./views/auth/LoginView";
import JobListView from "./views/job/JobListView";
import SecretListView from "./views/secret/SecretListView";
import NotFoundView from "./views/errors/NotFoundView";

const routes = [
  {
    path: "app",
    element: <DashboardLayout />,
    children: [
      { path: "jobs", element: <JobListView /> },
      { path: "secrets", element: <SecretListView /> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "login", element: <LoginView /> },
      { path: "404", element: <NotFoundView /> },
      { path: "/", element: <Navigate to="/login" /> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
];

export default routes;
