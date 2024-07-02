import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
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
