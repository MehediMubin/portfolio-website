import { FaFacebookF, FaGithub } from "react-icons/fa";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const ConnectWithMe = () => {
   return (
      <div>
         <h3 className="mb-4 font-bold ms-1">
            Connect With Me
         </h3>
         <a
            className="btn text-[#0866FF] hover:bg-purple-700 hover:text-white shadow-md shadow-indigo-500/40 ease-in-out duration-500 px-5 py-3 rounded mr-3"
            href="https://www.facebook.com/mehedihasan.mubin"
            target="_blank"
            rel="noreferrer"
         >
            <FaFacebookF className="text-md" />
         </a>
         <a
            className="btn text-[#1f2328] hover:bg-purple-700 hover:text-white shadow-md shadow-indigo-500/40 ease-in-out duration-500 px-5 py-3 rounded mr-3"
            href="https://github.com/MehediMubin/"
            target="_blank"
            rel="noreferrer"
         >
            <FaGithub className="text-md" />
         </a>
         <a
            className="btn text-[#0a66c2] hover:bg-purple-700 hover:text-white shadow-md shadow-indigo-500/40 ease-in-out duration-500 px-5 py-3 rounded mr-3"
            href="https://www.linkedin.com/in/mehedi1998/"
            target="_blank"
            rel="noreferrer"
         >
            <FaLinkedinIn className="text-md" />
         </a>
         <a
            className="btn text-black hover:bg-purple-700 hover:text-white shadow-md shadow-indigo-500/40 ease-in-out duration-500 px-5 py-3 rounded"
            href="https://twitter.com/hasanmubin98"
            target="_blank"
            rel="noreferrer"
         >
            <FaXTwitter className="text-md" />
         </a>
      </div>
   );
};

export default ConnectWithMe;
