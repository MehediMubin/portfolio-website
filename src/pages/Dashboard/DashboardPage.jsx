import { Link } from "react-router-dom";

const DashboardPage = () => {
   return (
      <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
         <h1 className="text-4xl font-semibold text-gray-800 mb-2">
            Welcome to Dashboard Admin!
         </h1>
         <p className="text-gray-600 mb-4">
            Manage your application smoothly and efficiently.
         </p>
         <div className="flex justify-between items-center">
            <Link
               to="/dashboard/overview"
               className="btn text-primary hover:bg-customPurple hover:text-white shadow-md shadow-indigo-500/40 ease-in-out duration-500 px-8 py-4 mb-5"
            >
               Get Started
            </Link>
         </div>
      </div>
   );
};

export default DashboardPage;
