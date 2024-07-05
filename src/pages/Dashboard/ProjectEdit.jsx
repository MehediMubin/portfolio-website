import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import Loading from "../../components/Loading";
import {
   useEditProjectMutation,
   useGetSingleProjectQuery,
} from "../../redux/features/project/projectApi";

const ProjectEdit = () => {
   const { id } = useParams();
   const { data, isLoading } = useGetSingleProjectQuery(id);
   const [editProject] = useEditProjectMutation();
   const [project, setProject] = useState(null);
   const { register, handleSubmit } = useForm();
   const navigate = useNavigate();

   useEffect(() => {
      if (data) {
         setProject(data.data);
      }
   }, [data]);

   const onSubmit = async (data) => {
      const toastId = toast.loading("Updating project details...");
      console.log(data);
      if (data.title === "") {
         data.title = project.title;
      }
      if (data.description === "") {
         data.description = project.description;
      }
      if (data.githubRepo === "") {
         data.githubRepo = project.githubRepo;
      }
      try {
         await editProject({ id, data }).unwrap();
         toast.success("Project updated successfully", {
            id: toastId,
            duration: 2000,
         });
         navigate("/dashboard/projects", { replace: true });
      } catch (error) {
         toast.error("Failed to update project details", {
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
                     Update Project Details
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
                        defaultValue={project?.title}
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
                        defaultValue={project?.description}
                        {...register("description")}
                        required
                     />
                  </div>
                  <div className="mb-6">
                     <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="description"
                     >
                        Github Repository URL
                     </label>
                     <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="githubRepo"
                        type="text"
                        placeholder="Github Repository URL"
                        defaultValue={project?.title}
                        {...register("githubRepo")}
                        required
                     />
                  </div>
                  <div className="flex items-center justify-between">
                     <button
                        className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                     >
                        Update Project
                     </button>
                  </div>
               </form>
            </div>
         )}
      </>
   );
};

export default ProjectEdit;
