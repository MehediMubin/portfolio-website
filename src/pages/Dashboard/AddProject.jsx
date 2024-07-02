import { useState } from "react";

const AddProject = () => {
   const [project, setProject] = useState({
      title: "",
      description: "",
      githubRepoUrl: "",
   });

   const handleChange = (e) => {
      setProject({ ...project, [e.target.name]: e.target.value });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log(project); // Here you would typically send the data to a server
   };

   return (
      <div className="max-w-lg mx-auto my-10 p-8 bg-white shadow-lg rounded-lg">
         <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
            Add Projects
         </h2>
         <form onSubmit={handleSubmit} className="space-y-6">
            <div>
               <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700"
               >
                  Title
               </label>
               <input
                  type="text"
                  name="title"
                  id="title"
                  value={project.title}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
               />
            </div>
            <div>
               <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
               >
                  Description
               </label>
               <textarea
                  name="description"
                  id="description"
                  value={project.description}
                  onChange={handleChange}
                  rows="3"
                  className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
               ></textarea>
            </div>
            <div>
               <label
                  htmlFor="githubRepoUrl"
                  className="block text-sm font-medium text-gray-700"
               >
                  GitHub Repository URL
               </label>
               <input
                  type="url"
                  name="githubRepoUrl"
                  id="githubRepoUrl"
                  value={project.githubRepoUrl}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
               />
            </div>
            <div>
               <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
               >
                  Submit
               </button>
            </div>
         </form>
      </div>
   );
};

export default AddProject;
