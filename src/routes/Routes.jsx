import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import MainLayout from "../layouts/MainLayout";
import PrivateRoute from "../layouts/PrivateRoute";
import AddExperience from "../pages/Dashboard/AddExperience";
import AddProject from "../pages/Dashboard/AddProject";
import AddSkill from "../pages/Dashboard/AddSkill";
import BlogEdit from "../pages/Dashboard/BlogEdit";
import BlogPage from "../pages/Dashboard/BlogPage";
import CreateBlogPost from "../pages/Dashboard/CreateBlogPost";
import DashboardOverview from "../pages/Dashboard/DashboardOverview";
import DashboardPage from "../pages/Dashboard/DashboardPage";
import ExperienceEdit from "../pages/Dashboard/ExperienceEdit";
import ExperiencePage from "../pages/Dashboard/ExperiencePage";
import ProjectEdit from "../pages/Dashboard/ProjectEdit";
import ProjectPage from "../pages/Dashboard/ProjectPage";
import LoginPage from "../pages/LoginPage";
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
      element: (
         <PrivateRoute>
            <DashboardLayout />
         </PrivateRoute>
      ),
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
            path: "/dashboard/blogs",
            element: <BlogPage />,
         },
         {
            path: "/dashboard/blogs/edit/:id",
            element: <BlogEdit />,
         },
         {
            path: "/dashboard/experiences",
            element: <ExperiencePage />,
         },
         {
            path: "/dashboard/add-experience",
            element: <AddExperience />,
         },
         {
            path: "/dashboard/experiences/edit/:id",
            element: <ExperienceEdit />,
         },
         {
            path: "/dashboard/projects",
            element: <ProjectPage />,
         },
         {
            path: "/dashboard/projects/edit/:id",
            element: <ProjectEdit />,
         },
         {
            path: "/dashboard/add-project",
            element: <AddProject />,
         },
         {
            path: "/dashboard/add-skill",
            element: <AddSkill />,
         },
      ],
   },
   {
      path: "/login",
      element: <LoginPage />,
   },
]);
