import { baseApi } from "../../api/baseApi";

const experienceApi = baseApi.injectEndpoints({
   endpoints: (builder) => ({
      getAllExperiences: builder.query({
         query: () => ({
            url: "/experiences",
            method: "GET",
         }),
         providesTags: ["Experience"],
      }),
      getSingleExperience: builder.query({
         query: (id) => ({
            url: `/experiences/${id}`,
            method: "GET",
         }),
         providesTags: ["Experience"],
      }),
      addExperience: builder.mutation({
         query: (data) => ({
            url: "/experiences/create",
            method: "POST",
            body: data,
         }),
         invalidatesTags: ["Experience"],
      }),
      editExperience: builder.mutation({
         query: ({ id, data }) => ({
            url: `/experiences/edit/${id}`,
            method: "PUT",
            body: data,
         }),
         invalidatesTags: ["Experience"],
      }),
      deleteExperience: builder.mutation({
         query: (id) => ({
            url: `/experiences/delete/${id}`,
            method: "DELETE",
         }),
         invalidatesTags: ["Experience"],
      }),
   }),
});

export const {
   useGetAllExperiencesQuery,
   useGetSingleExperienceQuery,
   useAddExperienceMutation,
   useEditExperienceMutation,
   useDeleteExperienceMutation,
} = experienceApi;
