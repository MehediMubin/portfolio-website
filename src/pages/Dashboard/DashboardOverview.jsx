const DashboardOverview = () => {
   return (
      <div className="p-8">
         <h2 className="text-2xl font-bold mb-4">Dashboard Overview</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {/* Quick Stats */}
            <div className="bg-white shadow rounded-lg p-4 flex flex-col items-center justify-center">
               <p className="text-gray-600">Total Blog Posts</p>
               <p className="text-xl font-semibold">120</p>
            </div>
            <div className="bg-white shadow rounded-lg p-4 flex flex-col items-center justify-center">
               <p className="text-gray-600">Posts This Month</p>
               <p className="text-xl font-semibold">8</p>
            </div>
            <div className="bg-white shadow rounded-lg p-4 flex flex-col items-center justify-center">
               <p className="text-gray-600">Total Experiences</p>
               <p className="text-xl font-semibold">35</p>
            </div>
            <div className="bg-white shadow rounded-lg p-4 flex flex-col items-center justify-center">
               <p className="text-gray-600">New Experiences This Month</p>
               <p className="text-xl font-semibold">3</p>
            </div>
            {/* Additional Stats for Projects and Skills */}
            <div className="bg-white shadow rounded-lg p-4 flex flex-col items-center justify-center">
               <p className="text-gray-600">Total Projects</p>
               <p className="text-xl font-semibold">10</p>
            </div>
            <div className="bg-white shadow rounded-lg p-4 flex flex-col items-center justify-center">
               <p className="text-gray-600">Total Skills</p>
               <p className="text-xl font-semibold">25</p>
            </div>
         </div>
         <div className="mb-8">
            {/* Quick Actions */}
            <h3 className="text-xl font-semibold mb-3">Quick Actions</h3>
            <div className="flex gap-4">
               <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Add Blog Post
               </button>
               <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                  Add Experience
               </button>
               {/* New Buttons for Adding Projects and Skills */}
               <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                  Add Project
               </button>
               <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                  Add Skill
               </button>
            </div>
         </div>
         <div>
            {/* Alerts or Notifications */}
            <h3 className="text-xl font-semibold mb-3">Alerts</h3>
            <div className="bg-white shadow rounded-lg p-4">
               <p>You have 2 comments awaiting approval.</p>
            </div>
         </div>
      </div>
   );
};

export default DashboardOverview;
