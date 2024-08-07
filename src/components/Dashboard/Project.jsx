/* eslint-disable react/prop-types */
import { useState } from "react";
import { FiEdit, FiTrash } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useDeleteProjectMutation } from "../../redux/features/project/projectApi";
import DeleteConfirmationModal from "./DeleteConfirmationModal";

const Project = ({ id, title, description, githubRepo }) => {
   const navigate = useNavigate();
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [deleteProject] = useDeleteProjectMutation();

   const handleDeleteClick = () => {
      setIsModalOpen(true);
   };

   const handleCloseModal = () => {
      setIsModalOpen(false);
   };

   const handleDelete = () => {
      setIsModalOpen(false);
      const toastId = toast.loading("Deleting Project...");
      try {
         deleteProject(id);
         toast.success("Project deleted successfully", {
            id: toastId,
            duration: 2000,
         });
      } catch (error) {
         toast.error("Failed to delete Project", {
            id: toastId,
            duration: 2000,
         });
      }
   };
   const handleClick = () => {
      navigate(`/dashboard/projects/edit/${id}`);
   };

   return (
      <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out mb-5">
         <div className="p-4">
            <div className="flex justify-between items-start">
               <div>
                  <h2 className="text-lg md:text-xl font-bold text-gray-800">
                     {title}
                  </h2>
                  <p className="mt-2 text-sm md:text-base text-gray-600">
                     {description.length > 100
                        ? `${description.substring(0, 100)}...`
                        : description}
                  </p>
                  <p className="mt-2 text-sm md:text-base text-gray-600">
                     {githubRepo}
                  </p>
               </div>
               <div className="flex gap-2">
                  <button
                     onClick={handleClick}
                     className="text-blue-500 hover:text-blue-700"
                  >
                     <FiEdit size={20} />
                  </button>
                  <button
                     onClick={handleDeleteClick}
                     className="text-red-500 hover:text-red-700"
                  >
                     <FiTrash size={20} />
                  </button>
                  <DeleteConfirmationModal
                     isOpen={isModalOpen}
                     onClose={handleCloseModal}
                     onDelete={handleDelete}
                  />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Project;
