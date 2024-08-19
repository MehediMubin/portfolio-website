import image from "../../assets/1511_logo.jpg";
import logo from "../../assets/logo.svg";

const Education = () => {
   return (
      <div
         id="education"
         className="mb-10 text-center md:text-left w-full px-5 md:px-10"
      >
         <h2 className="text-3xl uppercase rounded mb-5 font-semibold tracking-wide bg-gray-300 py-1 px-2 flex items-center gap-5">
            <span className="text-primary mx-auto md:mx-0">Education</span>
         </h2>
         <div className="md:flex items-center gap-10 shadow-md hover:shadow-blue-500/50 py-8 mb-6 pl-3 transition ease-in-out delay-400">
            <img
               className="w-28 md:w-40 md:h-28 mx-auto md:mx-0 mb-5 md:mb-0"
               src={logo}
               alt=""
            />
            <div>
               <h3 className="text-2xl font-semibold tracking-wide">
                  University of Liberal Arts Bangladesh
               </h3>
               <h4 className="text-xl font-semibold tracking-wider">
                  Bachelor of Science in Computer Science and Engineering
               </h4>
               <p className="text-md">Dhaka, Bangladesh</p>
            </div>
         </div>
         <div className="md:flex items-center gap-14 shadow-md hover:shadow-blue-500/50 py-8 transition ease-in-out delay-400">
            <img
               className="w-28 md:w-40 md:h-28 mx-auto md:mx-0 mb-5 md:mb-0"
               src={image}
               alt=""
            />
            <div>
               <h3 className="text-2xl font-semibold tracking-wide">
                  Dr. Yakub Sharif Degree College
               </h3>
               <h4 className="text-xl font-semibold tracking-wider">
                  Higher Secondary
               </h4>
               <p className="text-md">Barisal</p>
            </div>
         </div>
      </div>
   );
};

export default Education;
