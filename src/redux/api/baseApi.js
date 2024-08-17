import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
   baseUrl: "https://portfolio-server-lilac-five.vercel.app/api",
   credentials: "include",
   prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
         headers.set("authorization", token);
      }
      return headers;
   },
});

export const baseApi = createApi({
   reducerPath: "baseApi",
   baseQuery: baseQuery,
   tagTypes: ["User", "Blog", "Experience", "Project", "Skill"],
   endpoints: () => ({}),
});
