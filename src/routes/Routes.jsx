import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import MainLayout from "../layouts/MainLayout";
import AddExperience from "../pages/Dashboard/AddExperience";
import CreateBlogPost from "../pages/Dashboard/CreateBlogPost";
import DashboardOverview from "../pages/Dashboard/DashboardOverview";
import DashboardPage from "../pages/Dashboard/DashboardPage";
import LoginPage from "../pages/LoginPage";
import BlogPage from "../pages/Main/BlogPage";
import HomePage from "../pages/Main/HomePage";

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
         {
            path: "/dashboard/create-blog-post",
            element: <CreateBlogPost />,
         },
         {
            path: "/dashboard/add-experience",
            element: <AddExperience />,
         },
      ],
   },
   {
      path: "/login",
      element: <LoginPage />,
   },
]);
