import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useAddExperienceMutation } from "../../redux/features/experience/experienceApi";
import { months } from "../../utils/months";

const AddExperience = () => {
   const [isCurrentRole, setIsCurrentRole] = useState(true);
   const { register, handleSubmit } = useForm();
   const [addExperience] = useAddExperienceMutation();
   const navigate = useNavigate();

   const currentYear = new Date().getFullYear();
   const years = Array.from({ length: 50 }, (_, index) => currentYear - index);

   const handleCurrentRoleChange = () => {
      setIsCurrentRole(!isCurrentRole);
   };

   const onSubmit = async (data) => {
      const experienceData = {
         title: data.title,
         employmentType: data.employmentType,
         companyName: data.companyName,
         location: data.location,
         locationType: data.locationType,
         startDate: {
            month: data.startMonth,
            year: Number(data.startYear),
         },
         endDate: {
            month: isCurrentRole ? "Present" : data.endMonth,
            year: isCurrentRole ? currentYear : Number(data.endYear),
         },
         description: data.description,
      };
      const toastId = toast.loading("Adding experience...");
      try {
         await addExperience(experienceData);
         toast.success("Experience added successfully", {
            id: toastId,
            duration: 2000,
         });
         navigate("/dashboard/experiences");
      } catch (error) {
         toast.error("Failed to add experience", {
            id: toastId,
            duration: 2000,
         });
      }
   };

   return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
         <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-2xl bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
         >
            <h2 className="block text-gray-700 text-xl font-bold mb-5">
               Add Experience
            </h2>

            {/* Title */}
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
                  placeholder="Title"
                  {...register("title", { required: true })}
                  required
               />
            </div>

            {/* Employment Type */}
            <div className="mb-4">
               <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="employmentType"
               >
                  Employment Type
               </label>
               <select
                  className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="employmentType"
                  {...register("employmentType", { required: true })}
                  required
               >
                  <option>Please Select</option>
                  <option>Full-time</option>
                  <option>Part-time</option>
                  <option>Contract</option>
                  <option>Internship</option>
               </select>
            </div>

            {/* Company Name */}
            <div className="mb-4">
               <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="companyName"
               >
                  Company Name
               </label>
               <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="companyName"
                  type="text"
                  placeholder="Company Name"
                  {...register("companyName", { required: true })}
                  required
               />
            </div>

            {/* Location */}
            <div className="mb-4">
               <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="location"
               >
                  Location
               </label>
               <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="location"
                  type="text"
                  placeholder="Location"
                  {...register("location", { required: true })}
                  required
               />
            </div>

            {/* Location Type */}
            <div className="mb-4">
               <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="locationType"
               >
                  Location Type
               </label>
               <select
                  className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="locationType"
                  {...register("locationType", { required: true })}
                  required
               >
                  <option>Please Select</option>
                  <option>On-site</option>
                  <option>Hybrid</option>
                  <option>Remote</option>
               </select>
            </div>

            {/* Current Role Checkbox */}
            <div className="mb-4">
               <label className="inline-flex items-center">
                  <input
                     type="checkbox"
                     checked={isCurrentRole}
                     className="form-checkbox text-blue-500"
                     onChange={handleCurrentRoleChange}
                  />
                  <span className="ml-2 text-gray-700">
                     I am currently working in this role
                  </span>
               </label>
            </div>

            {/* Start Date and End Date */}
            {/* Implement similar to Employment Type with month and year options */}
            <div className="mb-4 flex flex-wrap justify-between">
               <div className="w-full sm:w-1/2 pr-2 mb-4 sm:mb-0">
                  <label
                     className="block text-gray-700 text-sm font-bold mb-2"
                     htmlFor="startMonth"
                  >
                     Start Month
                  </label>
                  <select
                     className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                     id="startMonth"
                     {...register("startMonth", { required: true })}
                     required
                  >
                     {months.map((month, index) => (
                        <option key={index} value={month}>
                           {month}
                        </option>
                     ))}
                  </select>
               </div>
               <div className="w-full sm:w-1/2 pl-2">
                  <label
                     className="block text-gray-700 text-sm font-bold mb-2"
                     htmlFor="startYear"
                  >
                     Start Year
                  </label>
                  <select
                     className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                     id="startYear"
                     {...register("startYear", { required: true })}
                     required
                  >
                     {years.map((year) => (
                        <option key={year} value={year}>
                           {year}
                        </option>
                     ))}
                  </select>
               </div>
            </div>

            {/* End Date */}
            <div
               className={`mb-4 flex flex-wrap justify-between ${
                  isCurrentRole ? "opacity-50" : ""
               }`}
            >
               <div className="w-full sm:w-1/2 pr-2 mb-4 sm:mb-0">
                  <label
                     className="block text-gray-700 text-sm font-bold mb-2"
                     htmlFor="endMonth"
                  >
                     End Month
                  </label>
                  <select
                     className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                     id="endMonth"
                     {...register("endMonth")}
                     disabled={isCurrentRole}
                  >
                     {months.map((month, index) => (
                        <option key={index} value={month}>
                           {month}
                        </option>
                     ))}
                  </select>
               </div>
               <div className="w-full sm:w-1/2 pl-2">
                  <label
                     className="block text-gray-700 text-sm font-bold mb-2"
                     htmlFor="endYear"
                  >
                     End Year
                  </label>
                  <select
                     className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                     id="endYear"
                     {...register("endYear")}
                     disabled={isCurrentRole}
                  >
                     {years.map((year) => (
                        <option key={year} value={year}>
                           {year}
                        </option>
                     ))}
                  </select>
               </div>
            </div>

            {/* Description */}
            <div className="mb-6">
               <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="description"
               >
                  Description
               </label>
               <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="description"
                  placeholder="Description"
                  {...register("description")}
               ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex items-center justify-between">
               <button
                  className="bg-indigo-600 hover:bg-indigo-700  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
               >
                  Add Experience
               </button>
            </div>
         </form>
      </div>
   );
};

export default AddExperience;
