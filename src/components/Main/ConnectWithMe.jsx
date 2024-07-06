import { AiFillGithub } from "react-icons/ai";
import { FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";

const ConnectWithMe = () => {
   return (
      <div>
         <h3 className="mb-3">Connect With Me</h3>
         <a
            className="btn text-[#0866ff] hover:bg-purple-700 hover:text-white shadow-md shadow-indigo-500/40 ease-in-out duration-500 px-5 py-3 rounded mr-3"
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
            <AiFillGithub className="text-md" />
         </a>
         <a
            className="btn text-[#0a66c2] hover:bg-purple-700 hover:text-white shadow-md shadow-indigo-500/40 ease-in-out duration-500 px-5 py-3 rounded mr-3"
            href="https://www.linkedin.com/in/mehedi1998/"
            target="_blank"
            rel="noreferrer"
         >
            <FaLinkedin className="text-md" />
         </a>
         <a
            className="btn text-[#1da1f2] hover:bg-purple-700 hover:text-white shadow-md shadow-indigo-500/40 ease-in-out duration-500 px-5 py-3 rounded"
            href="https://twitter.com/hasanmubin98"
            target="_blank"
            rel="noreferrer"
         >
            <FaTwitter className="text-md" />
         </a>
      </div>
   );
};

export default ConnectWithMe;
