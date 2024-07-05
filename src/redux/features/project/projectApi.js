import { baseApi } from "../../api/baseApi";

const projectApi = baseApi.injectEndpoints({
   endpoints: (builder) => ({
      getAllProjects: builder.query({
         query: () => ({
            url: "/projects",
            method: "GET",
         }),
         providesTags: ["Project"],
      }),
      getSingleProject: builder.query({
         query: (id) => ({
            url: `/projects/${id}`,
            method: "GET",
         }),
         providesTags: ["Project"],
      }),
      addProject: builder.mutation({
         query: (body) => ({
            url: "/projects/create",
            method: "POST",
            body,
         }),
         invalidatesTags: ["Project"],
      }),
      editProject: builder.mutation({
         query: ({ id, data }) => ({
            url: `/projects/edit/${id}`,
            method: "PUT",
            body: data,
         }),
         invalidatesTags: ["Project"],
      }),
      deleteProject: builder.mutation({
         query: (id) => ({
            url: `/projects/delete/${id}`,
            method: "DELETE",
         }),
         invalidatesTags: ["Project"],
      }),
   }),
});

export const {
   useGetAllProjectsQuery,
   useAddProjectMutation,
   useGetSingleProjectQuery,
   useEditProjectMutation,
   useDeleteProjectMutation,
} = projectApi;
