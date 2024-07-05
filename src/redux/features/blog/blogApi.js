import { baseApi } from "../../api/baseApi";

const blogApi = baseApi.injectEndpoints({
   endpoints: (builder) => ({
      getAllBlogs: builder.query({
         query: () => ({
            url: "/blogs",
            method: "GET",
         }),
         providesTags: ["Blog"],
      }),
      getSingleBlog: builder.query({
         query: (id) => ({
            url: `/blogs/${id}`,
            method: "GET",
         }),
         providesTags: ["Blog"],
      }),
      createBlog: builder.mutation({
         query: (data) => ({
            url: "/blogs/create",
            method: "POST",
            body: data,
         }),
         invalidatesTags: ["Blog"],
      }),
      editBlog: builder.mutation({
         query: ({ id, data }) => ({
            url: `/blogs/edit/${id}`,
            method: "PUT",
            body: data,
         }),
         invalidatesTags: ["Blog"],
      }),
   }),
});

export const {
   useGetAllBlogsQuery,
   useGetSingleBlogQuery,
   useCreateBlogMutation,
   useEditBlogMutation,
} = blogApi;
