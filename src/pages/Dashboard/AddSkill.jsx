import { useState } from "react";

const AddSkill = () => {
   const [skill, setSkill] = useState({
      name: "",
      category: "",
   });

   const handleChange = (e) => {
      setSkill({ ...skill, [e.target.name]: e.target.value });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log(skill); // Here you would typically handle the form submission
   };

   return (
      <div className="flex justify-center items-center h-96 bg-gray-100">
         <form
            onSubmit={handleSubmit}
            className="w-full max-w-lg bg-white rounded-lg shadow-md p-6 space-y-4"
         >
            <h2 className="text-2xl font-semibold text-center text-gray-800">
               Add Skill
            </h2>
            <div>
               <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
               >
                  Name
               </label>
               <input
                  type="text"
                  name="name"
                  id="name"
                  value={skill.name}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
               />
            </div>
            <div>
               <label
                  htmlFor="category"
                  className="block text-sm font-medium text-gray-700"
               >
                  Category
               </label>
               <input
                  type="text"
                  name="category"
                  id="category"
                  value={skill.category}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
               />
            </div>
            <button
               type="submit"
               className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
               Submit
            </button>
         </form>
      </div>
   );
};

export default AddSkill;
