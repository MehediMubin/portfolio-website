import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHash = () => {
   const { hash, pathname } = useLocation();

   useEffect(() => {
      // Function to handle scrolling to the element
      const scrollToElement = () => {
         if (hash) {
            const id = hash.replace("#", "");
            const element = document.getElementById(id);
            if (element) {
               element.scrollIntoView({ behavior: "smooth" });
            }
         }
      };

      // Scroll to element if hash is present
      scrollToElement();

      // Additionally, listen for the 'load' event to handle cases
      // where the component mounts before the target element is rendered
      window.addEventListener("load", scrollToElement);

      // Cleanup the event listener
      return () => window.removeEventListener("load", scrollToElement);
   }, [hash, pathname]); // Listen for changes in both hash and pathname

   return null;
};

export default ScrollToHash;
