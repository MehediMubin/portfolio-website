import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Project from "../../components/Dashboard/Project";
import Loading from "../../components/Loading";
import { useGetAllProjectsQuery } from "../../redux/features/project/projectApi";

const ProjectPage = () => {
   const { data, isLoading } = useGetAllProjectsQuery();
   const [projects, setProjects] = useState([]);

   useEffect(() => {
      if (data) {
         setProjects(data.data);
      }
   }, [data]);
   return (
      <div className="min-h-screen mt-5">
         <div className="flex justify-end">
            <Link
               to="/dashboard/add-project"
               className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mb-3"
            >
               Add New Project
            </Link>
         </div>
         {isLoading ? (
            <Loading />
         ) : (
            projects.map((project) => (
               <Project
                  key={project._id}
                  id={project._id}
                  title={project.title}
                  description={project.description}
                  githubRepo={project.githubRepo}
               />
            ))
         )}
      </div>
   );
};

export default ProjectPage;
