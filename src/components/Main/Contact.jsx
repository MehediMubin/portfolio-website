import Lottie from "lottie-react";
import contact from "../../assets/contact.json";
import ConnectWithMe from "./ConnectWithMe";

const Contact = () => {
   return (
      <div
         id="contact"
         className="flex flex-col md:flex-row justify-center items-center gap-10 mb-10 lg:mb-0"
      >
         <div className="text-center md:text-left w-full md:w-4/6 px-5 md:px-10">
            <h2 className="text-3xl uppercase rounded mb-5 font-semibold tracking-wide bg-gray-300 py-1 px-2 flex items-center gap-5">
               <span className="text-primary mx-auto md:mx-0">Contact</span>
            </h2>
            <ConnectWithMe />
         </div>
         <div className="w-full md:w-3/6 p-1">
            <Lottie animationData={contact} loop={false} />
         </div>
      </div>
   );
};

export default Contact;
