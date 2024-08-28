import { configureStore } from "@reduxjs/toolkit";
import exerciseSlice from "./features/exercise/exerciseSlice";
import { apiSlice } from "./features/api/apiSlice";

export const store = () => {
  return configureStore({
    reducer: {
      [apiSlice.reducerPath]: apiSlice.reducer,
      exercises: exerciseSlice,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiSlice.middleware),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
