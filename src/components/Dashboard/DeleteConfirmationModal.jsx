// Modal Component
const DeleteConfirmationModal = ({ isOpen, onClose, onDelete }) => {
   if (!isOpen) return null;

   return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
         <div className="bg-white p-4 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-lg font-bold mb-4">
               Do you really want to delete this blog?
            </h2>
            <div className="flex justify-around">
               <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={onDelete}
               >
                  Yes
               </button>
               <button
                  className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"
                  onClick={onClose}
               >
                  No
               </button>
            </div>
         </div>
      </div>
   );
};

export default DeleteConfirmationModal;
