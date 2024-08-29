import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const exercisesApiHost = process.env.NEXT_PUBLIC_EXERCISES_API_HOST;

export const exerciseApiSlice = createApi({
  reducerPath: "exerciseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://exercisedb.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set("x-rapidapi-key", apiKey!);
      headers.set("x-rapidapi-host", exercisesApiHost!);
      return headers;
    },
  }),

  endpoints: () => ({}),
});
