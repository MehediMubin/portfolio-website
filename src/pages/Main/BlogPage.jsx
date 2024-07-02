import { Link } from "react-router-dom";
import Blog from "../../components/Dashboard/Blog";

const BlogPage = () => {
   return (
      <div className="min-h-screen mt-5">
         <Link
            to="/dashboard/create-blog-post"
            className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow transition duration-300 ease-in-out transform hover:-translate-y-1 mb-3"
         >
            Create New Blog
         </Link>
         <Blog
            title="How to be a Good Programmer"
            description="Blah Blah Blah"
         />
         <Blog
            title="How to be a Good Programmer"
            description="Blah Blah Blah"
         />
         <Blog
            title="How to be a Good Programmer"
            description="Blah Blah Blah"
         />
         <Blog
            title="How to be a Good Programmer"
            description="Blah Blah Blah"
         />
         <Blog
            title="How to be a Good Programmer"
            description="Blah Blah Blah"
         />
      </div>
   );
};

export default BlogPage;
