import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const apiHost = process.env.NEXT_PUBLIC_API_HOST;

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://exercisedb.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set("x-rapidapi-key", apiKey!);
      headers.set("x-rapidapi-host", apiHost!);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllExercises: builder.query({
      query: () => `/exercises?limit=0`,
    }),
  }),
});

// auto-generated based on the defined endpoints
export const { useGetAllExercisesQuery } = apiSlice;
