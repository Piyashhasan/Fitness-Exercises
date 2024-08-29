import { exerciseApiSlice } from "../features/api/exerciseApiSlice";

const exercisesApi = exerciseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllExercises: builder.query({
      query: () => `/exercises?limit=0`,
    }),
    getBodyPartList: builder.query({
      query: () => `/exercises/bodyPartList`,
    }),
    getExerciseDetails: builder.query({
      query: (id) => `/exercises/exercise/${id}`,
    }),
    getSimilarTargetExercises: builder.query({
      query: (target) => `/exercises/target/${target}?limit=20&offset=0`,
    }),
    getSimilarEquipmentExercises: builder.query({
      query: (equipment) =>
        `/exercises/equipment/${equipment}?limit=20&offset=0`,
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetAllExercisesQuery,
  useGetBodyPartListQuery,
  useGetExerciseDetailsQuery,
  useGetSimilarEquipmentExercisesQuery,
  useGetSimilarTargetExercisesQuery,
} = exercisesApi;
