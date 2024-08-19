import { Link } from "react-router-dom";

const menuItems = (
   <>
      <li>
         <Link className="hover:text-primary mb-1" to="/#header">
            Home
         </Link>
      </li>
      <li>
         <Link className="hover:text-primary mb-1" to="/#skills">
            Skills
         </Link>
      </li>
      <li>
         <Link className="hover:text-primary mb-1" to="/#education">
            Education
         </Link>
      </li>
      <li>
         <Link className="hover:text-primary mb-1" to="/#experience">
            Experience
         </Link>
      </li>
      <li>
         <Link className="hover:text-primary mb-1" to="/#achievement">
            Achievement
         </Link>
      </li>
      <li>
         <Link className="hover:text-primary" to="/#contact">
            Contact Me
         </Link>
      </li>
   </>
);

export default menuItems;
