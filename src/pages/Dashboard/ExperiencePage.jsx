import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Experience from "../../components/Dashboard/Experience";
import Loading from "../../components/Loading";
import { useGetAllExperiencesQuery } from "../../redux/features/experience/experienceApi";

const ExperiencePage = () => {
   const [experiences, setExperiences] = useState([]);
   const { data, isLoading } = useGetAllExperiencesQuery();

   useEffect(() => {
      if (data?.data) {
         setExperiences(data.data);
      }
   }, [data, experiences]);

   return (
      <div className="min-h-screen mt-5">
         <div className="flex justify-end">
            <Link
               to="/dashboard/add-experience"
               className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mb-3"
            >
               Add New Experience
            </Link>
         </div>
         {isLoading ? (
            <Loading />
         ) : (
            experiences.map((experience) => (
               <Experience
                  key={experience._id}
                  id={experience._id}
                  title={experience.title}
                  companyName={experience.companyName}
                  location={experience.location}
                  employmentType={experience.employmentType}
                  locationType={experience.locationType}
               />
            ))
         )}
      </div>
   );
};

export default ExperiencePage;
