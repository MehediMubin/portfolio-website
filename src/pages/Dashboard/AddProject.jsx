import { useForm } from "react-hook-form";

const AddProject = () => {
   const { register, handleSubmit } = useForm();

   const onSubmit = (data) => {
      console.log(data);
   };

   return (
      <div className="max-w-lg mx-auto my-10 p-8 bg-white shadow-lg rounded-lg">
         <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
            Add Projects
         </h2>
         <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
                  className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  {...register("title", { required: true })}
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
                  rows="3"
                  className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  {...register("description", { required: true })}
                  required
               ></textarea>
            </div>
            <div>
               <label
                  htmlFor="githubRepo"
                  className="block text-sm font-medium text-gray-700"
               >
                  GitHub Repository URL
               </label>
               <input
                  type="url"
                  name="githubRepo"
                  id="githubRepo"
                  className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  {...register("githubRepo", { required: true })}
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
