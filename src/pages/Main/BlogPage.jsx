import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Blog from "../../components/Dashboard/Blog";
import Loading from "../../components/Loading";
import { useGetAllBlogsQuery } from "../../redux/features/blog/blogApi";

const BlogPage = () => {
   const [blogs, setBlogs] = useState([]);
   const { data, isLoading } = useGetAllBlogsQuery();

   useEffect(() => {
      if (data?.data) {
         setBlogs(data.data);
      }
   }, [data]);

   return (
      <div className="min-h-screen mt-5">
         <div className="flex justify-end">
            <Link
               to="/dashboard/create-blog-post"
               className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mb-3"
            >
               Create New Blog
            </Link>
         </div>
         {isLoading ? (
            <Loading />
         ) : (
            blogs.map((blog) => (
               <Blog
                  key={blog.id}
                  title={blog.title}
                  description={blog.description}
               />
            ))
         )}
      </div>
   );
};

export default BlogPage;
