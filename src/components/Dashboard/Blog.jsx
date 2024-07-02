/* eslint-disable react/prop-types */
import { FiEdit, FiTrash } from "react-icons/fi";

const Blog = ({ title, description }) => {
   return (
      <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out mb-5">
         <div className="p-4">
            <div className="flex justify-between items-start">
               <div>
                  <h2 className="text-lg md:text-xl font-bold text-gray-800">
                     {title}
                  </h2>
                  <p className="mt-2 text-sm md:text-base text-gray-600">
                     {/* show only the first 100 characters of description */}
                     {description.length > 100
                        ? `${description.substring(0, 100)}...`
                        : description}
                  </p>
               </div>
               <div className="flex gap-2">
                  <button className="text-blue-500 hover:text-blue-700">
                     <FiEdit size={20} />
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                     <FiTrash size={20} />
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Blog;
