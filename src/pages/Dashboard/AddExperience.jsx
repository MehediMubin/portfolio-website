import { useState } from "react";

const AddExperience = () => {
   const [isCurrentRole, setIsCurrentRole] = useState(true);
   const [startDate, setStartDate] = useState({ month: "", year: "" });
   const [endDate, setEndDate] = useState({ month: "", year: "" });

   const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
   ];

   // Example: Generate years dynamically or use a static range
   const currentYear = new Date().getFullYear();
   const years = Array.from({ length: 50 }, (_, index) => currentYear - index);

   const handleCurrentRoleChange = () => {
      setIsCurrentRole(!isCurrentRole);
   };

   // Add other state and handlers as needed

   return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
         <form className="w-full max-w-2xl bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
                     value={startDate.month}
                     onChange={(e) =>
                        setStartDate({ ...startDate, month: e.target.value })
                     }
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
                     value={startDate.year}
                     onChange={(e) =>
                        setStartDate({ ...startDate, year: e.target.value })
                     }
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
                     value={endDate.month}
                     onChange={(e) =>
                        setEndDate({ ...endDate, month: e.target.value })
                     }
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
                     value={endDate.year}
                     onChange={(e) =>
                        setEndDate({ ...endDate, year: e.target.value })
                     }
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
               ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex items-center justify-between">
               <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
