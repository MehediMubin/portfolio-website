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
   }),
});

export const { useGetAllExperiencesQuery } = experienceApi;
