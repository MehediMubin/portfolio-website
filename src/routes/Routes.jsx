import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import MainLayout from "../layouts/MainLayout";
import BlogPage from "../pages/Main/BlogPage";
import DashboardOverview from "../pages/Dashboard/DashboardOverview";
import DashboardPage from "../pages/Dashboard/DashboardPage";
import HomePage from "../pages/Main/HomePage";
import LoginPage from "../pages/LoginPage";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <MainLayout />,
      children: [
         {
            path: "/",
            element: <HomePage />,
         },
         {
            path: "/blogs",
            element: <BlogPage />,
         },
      ],
   },
   {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
         {
            path: "/dashboard",
            element: <DashboardPage />,
         },
         {
            path: "/dashboard/overview",
            element: <DashboardOverview />,
         },
      ],
   },
   {
      path: "/login",
      element: <LoginPage />,
   },
]);
