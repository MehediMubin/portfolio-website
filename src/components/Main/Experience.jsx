import Lottie from "lottie-react";
import experience from "../../assets/Experience.json";

const Experience = ({
   id,
   title,
   companyName,
   location,
   employmentType,
   locationType,
   startDate,
   endDate,
}) => {
   return (
      <div className="">
         <div className="mb-3">
            <h3 className="text-2xl tracking-wide font-semibold text-[#FF2E00]">
               {title}
            </h3>
            <h4 className="text-xl tracking-wider">{companyName}</h4>
            <h4 className="text-lg tracking-wider">{location}</h4>
            <p className="text-md tracking-wide">
               {" "}
               {employmentType} - {locationType}{" "}
            </p>
            <p className="text-md tracking-wide">
               {" "}
               {startDate.month}, {startDate.year} -{" "}
               {endDate.month === "Please Select"
                  ? "Present"
                  : endDate.month + ", " + endDate.year}
            </p>
         </div>
      </div>
   );
};

export default Experience;
