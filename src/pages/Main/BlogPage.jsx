import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Blog from "../../components/Dashboard/Blog";

const BlogPage = () => {
   const [blogs, setBlogs] = useState([]);

   useEffect(() => {
      const fetchBlogs = async () => {
         try {
            const token = localStorage.getItem("token");
            const response = await fetch("http://localhost:5000/api/blogs", {
               method: "GET",
               headers: {
                  Authorization: `${token}`,
               },
            });
            const data = await response.json();
            if (response.ok) {
               console.log(data);
               setBlogs(data.data);
            } else {
               throw new Error(data.message || "Failed to fetch blogs");
            }
         } catch (error) {
            console.error("Error fetching blogs:", error);
         }
      };

      fetchBlogs();
   }, []);

   return (
      <div className="min-h-screen mt-5">
         <Link
            to="/dashboard/create-blog-post"
            className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow transition duration-300 ease-in-out transform hover:-translate-y-1 mb-3"
         >
            Create New Blog
         </Link>
         {blogs.map((blog) => (
            <Blog
               key={blog._id} // Assuming each blog has a unique 'id'
               title={blog.title}
               description={blog.description}
            />
         ))}
      </div>
   );
};

export default BlogPage;
