import { Link } from "react-router-dom";

// Assuming ActionButton is defined in your project
const ActionButton = ({ color, text, url }) => {
   // Define a basic color mapping to CSS colors
   const colorMap = {
      green: "#4CAF50",
      yellow: "#FF2E00",
      blue: "#2196F3",
      purple: "#9C27B0",
   };

   // Determine button color from the color prop, default to gray if not found
   const buttonColor = colorMap[color] || "#9E9E9E";

   return (
      <Link
         to={url}
         style={{
            backgroundColor: buttonColor,
            color: "white",
            padding: "10px 15px",
            border: "none",
            borderRadius: "5px",
         }}
      >
         {text}
      </Link>
   );
};

export default ActionButton;
