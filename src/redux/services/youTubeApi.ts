import { youTubeApiSlice } from "../features/api/youTubeApiSlice";

const youTubeApi = youTubeApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    suggestVideos: builder.query({
      query: (searchTxt) => `/search?query=${searchTxt}`,
    }),
  }),
});

export const { useSuggestVideosQuery } = youTubeApi;
