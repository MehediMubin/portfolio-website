import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import Loading from "../../components/Loading";
import {
   useEditBlogMutation,
   useGetSingleBlogQuery,
} from "../../redux/features/blog/blogApi";

const BlogEdit = () => {
   const { id } = useParams();
   const { data, isLoading } = useGetSingleBlogQuery(id);
   const [editBlog] = useEditBlogMutation();
   const [blog, setBlog] = useState(null);
   const { register, handleSubmit } = useForm();
   const navigate = useNavigate();

   useEffect(() => {
      setBlog(data?.data);
   }, [data]);

   const onSubmit = async (data) => {
      const toastId = toast.loading("Updating blog post...");
      console.log(data);
      if (data.title === "") {
         data.title = blog.title;
      }
      if (data.description === "") {
         data.description = blog.description;
      }
      try {
         await editBlog({ id, data }).unwrap();
         toast.success("Blog post updated successfully", {
            id: toastId,
            duration: 2000,
         });
         navigate("/dashboard/blogs", { replace: true });
      } catch (error) {
         toast.error("Failed to update blog post", {
            id: toastId,
            duration: 2000,
         });
      }
   };

   return (
      <>
         {isLoading ? (
            <Loading />
         ) : (
            <div className="flex justify-center items-center min-h-screen w-full bg-gray-100">
               <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="w-full bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
               >
                  <h2 className="block text-gray-700 text-xl font-bold mb-2">
                     Update Blog Post
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
                        defaultValue={blog?.title}
                        {...register("title")}
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
                        defaultValue={blog?.description}
                        {...register("description")}
                        required
                     />
                  </div>
                  <div className="flex items-center justify-between">
                     <button
                        className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                     >
                        Update Blog
                     </button>
                  </div>
               </form>
            </div>
         )}
      </>
   );
};

export default BlogEdit;
