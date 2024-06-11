import Lottie from "lottie-react";
import { AiFillThunderbolt } from "react-icons/ai";
import skills from "../assets/Skills.json";

const Skills = () => {
   return (
      <div
         id="skills"
         className="lg:h-screen flex flex-col-reverse md:flex-row justify-center items-center gap-10 mb-20"
      >
         <div className=" w-full md:w-3/6 p-2">
            <Lottie animationData={skills} loop={true} />
         </div>
         <div className="text-center md:text-left w-full md:w-4/6 p-10">
            <h2 className="text-3xl uppercase rounded text-[#FF2E00] mb-5 font-semibold tracking-wide bg-gray-300 py-1 px-2 ">
               Skills
            </h2>
            <p className="mb-3">
               <span className="font-semibold tracking-wide">
                  Programming Languages:
               </span>{" "}
               <span className="tracking-wider">
                  C++ | JavaScript | TypeScript | Python
               </span>
            </p>
            <p className="mb-3">
               <span className="font-semibold tracking-wide">Frontend:</span>{" "}
               <span className="tracking-wider">
                  HTML | CSS | React | Next.js | Redux
               </span>
            </p>
            <p className="mb-3">
               <span className="font-semibold tracking-wide">Backend:</span>{" "}
               <span className="tracking-wider">
                  NodeJS | ExpressJS | Next.js
               </span>
            </p>
            <p className="mb-3">
               <span className="font-semibold tracking-wide">DBMS:</span>{" "}
               <span className="tracking-wider">MongoDB | PostgreSQL</span>
            </p>
            <p className="mb-3">
               <span className="font-semibold tracking-wide">ODM / ORM:</span>{" "}
               <span className="tracking-wider">Mongoose | Prisma</span>
            </p>
            <p className="mb-3">
               <span className="font-semibold tracking-wide">
                  Miscellaneous:
               </span>{" "}
               <span className="tracking-wider">
                  Git | GitHub | Firebase | Vercel
               </span>
            </p>
            <h3 className="mt-10 text-2xl text-[#FF2E00] mb-3 font-semibold tracking-wide">
               Proficient in
            </h3>
            <p className="mb-3 flex items-center gap-1 tracking-wider">
               <span className="text-[#e83923] w-5">
                  <AiFillThunderbolt />
               </span>
               C++
            </p>
            <p className="mb-3 flex items-center gap-1 tracking-wider">
               <span className="text-[#e83923] w-5">
                  <AiFillThunderbolt />
               </span>
               JavaScript
            </p>
            <p className="mb-3 flex items-center gap-1 tracking-wider">
               <span className="text-[#e83923] w-5">
                  <AiFillThunderbolt />
               </span>
               Algorithmic Problem Solving (Solved 2000+ problems on various
               online platforms)
            </p>
            <p className="mb-3 flex items-center gap-1 tracking-wider">
               <span className="text-[#e83923] w-5">
                  <AiFillThunderbolt />
               </span>
               Data Structure & Algorithms
            </p>
            <p className="mb-3 flex items-center gap-1 tracking-wider">
               <span className="text-[#e83923] w-5">
                  <AiFillThunderbolt />
               </span>
               Competitive Programming
            </p>
            <p className="mb-3 flex items-center gap-1 tracking-wider">
               <span className="text-[#e83923] w-5">
                  <AiFillThunderbolt />
               </span>
               Backend Engineering
            </p>
            <p className="flex items-center gap-1 tracking-wider">
               <span className="text-[#e83923] w-5">
                  <AiFillThunderbolt />
               </span>
               Full Stack Development
            </p>
         </div>
      </div>
   );
};

export default Skills;
