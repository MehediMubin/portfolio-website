import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import experience from "../../assets/Experience.json";
import Loading from "../../components/Loading";
import Experience from "../../components/Main/Experience";
import { useGetAllExperiencesQuery } from "../../redux/features/experience/experienceApi";

const ExperiencePage = () => {
   const [experiences, setExperiences] = useState([]);
   const { data, isLoading } = useGetAllExperiencesQuery();

   useEffect(() => {
      if (data?.data) {
         setExperiences(data.data);
      }
   }, [data]);

   return (
      <>
         {isLoading ? (
            <Loading />
         ) : (
            <div
               id="experience"
               className="flex flex-col-reverse md:flex-row justify-center items-center gap-10 lg:h-screen mb-16 lg:mb-0"
            >
               <div className="text-center md:text-left w-full md:w-4/6 px-2 md:px-10">
                  <h2 className="text-3xl uppercase rounded mb-5 font-semibold tracking-wide bg-gray-300 py-1 px-2 flex items-center gap-5">
                     <span className="text-primary mx-auto md:mx-0">
                        Experiences
                     </span>
                  </h2>
                  {experiences.map((experience) => (
                     <Experience
                        key={experience._id}
                        id={experience._id}
                        title={experience.title}
                        companyName={experience.companyName}
                        location={experience.location}
                        employmentType={experience.employmentType}
                        locationType={experience.locationType}
                        startDate={experience.startDate}
                        endDate={experience.endDate}
                     />
                  ))}
               </div>
               <div className="w-full md:w-4/6 p-1">
                  <Lottie animationData={experience} loop={false} />
               </div>
            </div>
         )}
      </>
   );
};

export default ExperiencePage;
