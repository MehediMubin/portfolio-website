import { useState } from "react";
import image from "../../assets/signature.png";
import menuItems from "./menuItems";

const Navbar = () => {
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

   const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
   };

   return (
      <div className="w-full">
         <div className="navbar bg-base-100 font-semibold fixed top-0 z-50 w-full shadow-md shadow-indigo-500/50">
            <div className="navbar-start">
               <div className="dropdown">
                  <label
                     tabIndex={0}
                     className="btn btn-ghost lg:hidden"
                     onClick={toggleMobileMenu}
                  >
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                     >
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth="2"
                           d="M4 6h16M4 12h8m-8 6h16"
                        />
                     </svg>
                  </label>
                  {isMobileMenuOpen && (
                     <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                     >
                        {menuItems}
                     </ul>
                  )}
               </div>
               <a className="normal-case text-xl hover:cursor-pointer mt-0.5" href="/">
                  <img className="w-60" src={image} alt="" />
               </a>
            </div>
            <div className="navbar-center hidden lg:flex">
               <ul className="menu menu-horizontal px-1 text-[15px]">
                  {menuItems}
               </ul>
            </div>
            <div className="navbar-end">
               <a
                  className="btn text-primary hover:bg-customPurple hover:text-white border border-gray-300 rounded"
                  href="https://drive.google.com/file/d/1aVklg_60__EWEKt7ho7E0wK2sGOZY-Wy/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
               >
                  Download Resume
               </a>
            </div>
         </div>
      </div>
   );
};

export default Navbar;
