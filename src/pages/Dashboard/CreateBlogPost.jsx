import { useState } from "react";

const CreateBlogPost = () => {
   const [title, setTitle] = useState("");
   const [description, setDescription] = useState("");

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log({ title, description });
      // Here you would typically send the data to a server
   };

   return (
      <div className="flex justify-center items-center min-h-screen w-full bg-gray-100">
         <form
            className="w-full bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" // Removed max-w-lg to allow full width usage
            onSubmit={handleSubmit}
         >
            <h2 className="block text-gray-700 text-xl font-bold mb-2">
               Create a Blog Post
            </h2>
            <div className="mb-4">
               <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="title"
               >
                  Title
               </label>
               <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="title"
                  type="text"
                  placeholder="Blog Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
               />
            </div>
            <div className="mb-6">
               <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="description"
               >
                  Description
               </label>
               <textarea
                  className="shadow appearance-none border rounded w-full py-4 min-h-[150px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="description"
                  placeholder="Blog Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
               />
            </div>
            <div className="flex items-center justify-between">
               <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-8 py-3 mb-5 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
               >
                  Post Blog
               </button>
            </div>
         </form>
      </div>
   );
};

export default CreateBlogPost;
