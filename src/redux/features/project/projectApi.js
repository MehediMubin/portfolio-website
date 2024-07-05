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
      addProject: builder.mutation({
         query: (body) => ({
            url: "/projects/create",
            method: "POST",
            body,
         }),
         invalidatesTags: ["Project"],
      }),
   }),
});

export const { useGetAllProjectsQuery, useAddProjectMutation } = projectApi;
