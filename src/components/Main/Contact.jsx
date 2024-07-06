import Lottie from "lottie-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import contact from "../../assets/contact.json";
import ConnectWithMe from "./ConnectWithMe";

const Contact = () => {
   const handleSubmit = (e) => {
      e.preventDefault();
      toast.success("Message Sent Successfully!", {
         position: "top-center",
         autoClose: 3000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: "light",
      });
   };

   return (
      <div
         id="contact"
         className="flex flex-col md:flex-row justify-center items-center gap-10 mb-10 lg:mb-0"
      >
         <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
         />
         <div className="text-center md:text-left w-full md:w-4/6 px-10">
            <h2 className="text-3xl uppercase rounded text-[#FF2E00] mb-20 font-semibold tracking-wide bg-gray-300 py-1 px-2">
               Contact Me
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
