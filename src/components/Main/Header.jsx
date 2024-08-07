import { AiFillGithub } from "react-icons/ai";
import { FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";
import MyPicture from "../../assets/images/my_picture.jpg";
import ConnectWithMe from "./ConnectWithMe";

const Header = () => {
   return (
      <div
         className="flex flex-col-reverse md:flex-row justify-center items-center gap-10 lg:h-screen mb-10 lg:mb-0"
         id="header"
      >
         <div className="text-center md:text-left w-full md:w-4/6 px-10">
            <h1 className="uppercase text-3xl font-bold tracking-wide text-gray-800 mb-5">
               Welcome to My <span className="text-[#FF2E00]">World</span>
            </h1>
            <p className="text-justify mb-5">
               Hello there! I am{" "}
               <span className="font-bold">Md. Mehedi Hasan</span>, a Full-Stack
               web developer with a strong love for creating web applications
               that not only look amazing but also perform seamlessly. Welcome
               to my digital showcase, where I invite you to explore my world of
               coding and creativity.
            </p>
            <a
               className="btn text-[#FF2E00] hover:bg-purple-700 hover:text-white shadow-md shadow-indigo-500/40 ease-in-out duration-500 px-8 py-4 mb-5"
               href="https://drive.google.com/file/d/1N5qjodC5td0-lQkVXs1GWIXbeqpyEUwC/view?usp=drive_link"
               target="_blank"
               rel="noreferrer"
            >
               Download My CV
            </a>
            <ConnectWithMe />
         </div>
         <div className="w-full md:w-3/6 p-1 flex justify-center items-center">
            <img
               src={MyPicture}
               alt="Md. Mehedi Hasan"
               className="rounded-full w-96 h-96 object-cover"
            />
         </div>
      </div>
   );
};

export default Header;
