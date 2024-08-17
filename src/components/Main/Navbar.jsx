import { Link } from "react-router-dom";
import image from "../../assets/signature.png";

const Navbar = () => {
   return (
      <div className="w-full">
         <div className="navbar bg-base-100 font-semibold fixed top-0 z-50 w-full shadow-lg shadow-indigo-500/50">
            <div className="navbar-start">
               <div className="dropdown">
                  <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
                  <ul
                     tabIndex={0}
                     className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                  >
                     <li>
                        <Link
                           className="hover:text-[#FF2E00] mb-1"
                           to="/#header"
                        >
                           Home
                        </Link>
                     </li>
                     <li>
                        <Link
                           className="hover:text-[#FF2E00] mb-1"
                           to="/#skills"
                        >
                           Skills
                        </Link>
                     </li>
                     <li>
                        <Link
                           className="hover:text-[#FF2E00] mb-1"
                           to="/#education"
                        >
                           Education
                        </Link>
                     </li>
                     <li>
                        <Link
                           className="hover:text-[#FF2E00] mb-1"
                           to="/#experience"
                        >
                           Experience
                        </Link>
                     </li>
                     <li>
                        <Link
                           className="hover:text-[#FF2E00] mb-1"
                           to="/#achievement"
                        >
                           Achievement
                        </Link>
                     </li>
                     <li>
                        <Link className="hover:text-[#FF2E00]" to="/#contact">
                           Contact Me
                        </Link>
                     </li>
                  </ul>
               </div>
               <a className="normal-case text-xl hover:cursor-pointer" href="/">
                  <img className="w-60" src={image} alt="" />
               </a>
            </div>
            <div className="navbar-center hidden lg:flex">
               <ul className="menu menu-horizontal px-1 text-[15px]">
                  <li>
                     <Link className="hover:text-[#FF2E00]" to="/#header">
                        Home
                     </Link>
                  </li>
                  <li>
                     <Link className="hover:text-[#FF2E00]" to="/#skills">
                        Skills
                     </Link>
                  </li>
                  <li>
                     <Link className="hover:text-[#FF2E00]" to="/#education">
                        Education
                     </Link>
                  </li>
                  <li>
                     <Link className="hover:text-[#FF2E00]" to="/#experience">
                        Experience
                     </Link>
                  </li>
                  <li>
                     <Link className="hover:text-[#FF2E00]" to="/#achievement">
                        Achievement
                     </Link>
                  </li>
                  <li>
                     <Link className="hover:text-[#FF2E00]" to="/#contact">
                        Contact Me
                     </Link>
                  </li>
               </ul>
            </div>
            <div className="navbar-end">
               <a
                  className="btn text-[#FF2E00] hover:bg-purple-700 hover:text-white"
                  href="https://drive.google.com/file/d/1aVklg_60__EWEKt7ho7E0wK2sGOZY-Wy/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
               >
                  Download CV
               </a>
            </div>
         </div>
      </div>
   );
};

export default Navbar;
