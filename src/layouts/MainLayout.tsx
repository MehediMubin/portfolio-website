import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Main/Footer";
import Navbar from "../components/Main/Navbar";
import ScrollToHash from '../components/ScrollToHash';
const MainLayout = () => {
   return (
      <div className="font-custom">
         <Navbar />
         <ScrollToHash/>
         <Outlet />
         <Footer />
      </div>
   );
};

export default MainLayout;
