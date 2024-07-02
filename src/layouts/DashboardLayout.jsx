import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
   const handleSidebarLinkClick = () => {
      setIsSidebarOpen(false);
   };
   return (
      <div className="flex h-screen bg-gray-100">
         {/* Sidebar */}
         <div
            className={`bg-blue-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform ${
               isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            } md:relative md:translate-x-0 transition duration-200 ease-in-out`}
         >
            {/* Logo */}
            <a
               href="#"
               className="text-white flex items-center space-x-2 px-4"
               onClick={handleSidebarLinkClick}
            >
               <span className="text-2xl font-bold">Dashboard</span>
            </a>
            {/* Nav */}
            <nav>
               <a
                  href="#"
                  className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700"
                  onClick={handleSidebarLinkClick}
               >
                  Home
               </a>
               <a
                  href="#"
                  className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700"
                  onClick={handleSidebarLinkClick}
               >
                  About
               </a>
               <a
                  href="#"
                  className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700"
                  onClick={handleSidebarLinkClick}
               >
                  Services
               </a>
               <a
                  href="#"
                  className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700"
                  onClick={handleSidebarLinkClick}
               >
                  Contact
               </a>
            </nav>
         </div>

         {/* Content */}
         <div className="flex-1 flex flex-col overflow-hidden">
            <header className="flex justify-between items-center p-4 shadow-md">
               {/* Menu button */}
               <div className="flex justify-end w-full">
                  <button
                     onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                     className="p-2 text-gray-500 focus:outline-none md:hidden"
                     style={{ zIndex: 1000 }} // Ensure the button is not hidden behind other elements
                  >
                     {isSidebarOpen ? (
                        <FiX className="h-6 w-6 text-gray" /> // Ensure the icon is visible against the header
                     ) : (
                        <FiMenu className="h-6 w-6 text-gray" /> // Apply similar styling to the menu icon for consistency
                     )}
                  </button>
               </div>
            </header>
            <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
               <div className="container mx-auto px-6 py-8">
                  <h3 className="text-gray-700 text-3xl font-medium">
                     Dashboard
                  </h3>
                  <Outlet />
               </div>
            </main>
         </div>
      </div>
   );
};

export default DashboardLayout;
