import Lottie from "lottie-react";
import achievement from "../../assets/achievement.json";

import { AiFillTrophy } from "react-icons/ai";

const Achievement = () => {
   return (
      <div
         id="achievement"
         className="flex flex-col-reverse md:flex-row justify-center items-center gap-10 lg:h-screen mb-16 lg:mb-0"
      >
         <div className="w-full md:w-3/6 p-1">
            <Lottie animationData={achievement} loop={false} />
         </div>
         <div className="text-center md:text-left w-full md:w-4/6 px-5 md:px-10">
            <h2 className="text-3xl uppercase rounded mb-5 font-semibold tracking-wide bg-gray-300 py-1 px-2 flex items-center gap-5">
               <p className=" mx-auto md:mx-0 flex space-x-4 justify-center items-center">
                  <span className="text-primary">Achievements</span>
                  <AiFillTrophy className="text-[#E3CA00]" />
               </p>
            </h2>

            <div className="mb-3">
               <h3 className="text-2xl tracking-wide font-semibold text-primary">
                  Champion
               </h3>
               <h4 className="text-xl tracking-wider">
                  ULAB Take Off Programming Contest
               </h4>
               <p className="text-md tracking-wide">June, 2021</p>
            </div>
            <div className="mb-3">
               <h3 className="text-2xl tracking-wide font-semibold text-primary">
                  Champion
               </h3>
               <h4 className="text-xl tracking-wider">
                  ULAB Take Off Programming Contest
               </h4>
               <p className="text-md tracking-wide">February, 2021</p>
            </div>
            <div>
               <h3 className="text-2xl font-semibold text-primary">
                  International Collegiate Programming Contest 2021 (Regional)
               </h3>
               <p className="text-xl tracking-wider">
                  Our Team (ULAB_Drifters) ranked 104th out of 161 teams in
                  Bangladesh.
               </p>
            </div>
         </div>
      </div>
   );
};

export default Achievement;
