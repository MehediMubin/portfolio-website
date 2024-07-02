import { useForm } from "react-hook-form";
import { toast } from "sonner";

const CreateBlogPost = () => {
   const { register, handleSubmit } = useForm();

   const onSubmit = async (data, e) => {
      try {
         const token = localStorage.getItem("token"); // Retrieve the token from localStorage
         const response = await fetch(
            "http://localhost:5000/api/blogs/create",
            {
               method: "POST",
               headers: {
                  "Content-Type": "application/json",
                  Authorization: `${token}`,
               },
               body: JSON.stringify(data),
            }
         );
         await response.json();
         e.target.reset();
         toast.success("Blog posted successfully!");
      } catch (error) {
         console.error("Error posting blog:", error);
      }
   };

   return (
      <div className="flex justify-center items-center min-h-screen w-full bg-gray-100">
         <form
            className="w-full bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={handleSubmit(onSubmit)}
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
                  {...register("title", { required: true })}
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
                  {...register("description", { required: true })}
                  required
               />
            </div>
            <div className="flex items-center justify-between">
               <button
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
