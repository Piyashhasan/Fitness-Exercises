import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiKey = process.env.NEXT_PUBLIC_API_KEY;

const youtubeApiHost = process.env.NEXT_PUBLIC_YOUTUBE_API_HOST;

export const youTubeApiSlice = createApi({
  reducerPath: "youTubeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://youtube-search-and-download.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set("x-rapidapi-key", apiKey!);
      headers.set("x-rapidapi-host", youtubeApiHost!);
      return headers;
    },
  }),

  endpoints: () => ({}),
});
