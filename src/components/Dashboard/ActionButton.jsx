const ActionButton = ({ color, text }) => (
   <button
      className={`bg-${color}-500 hover:bg-${color}-700 text-white font-bold py-2 px-4 rounded`}
   >
      {text}
   </button>
);

export default ActionButton;
