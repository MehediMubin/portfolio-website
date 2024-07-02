import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import BlogPage from "../pages/BlogPage";
import HomePage from "../pages/HomePage";
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
      path: "/login",
      element: <LoginPage />,
   },
]);
