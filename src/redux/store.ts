import { configureStore } from "@reduxjs/toolkit";
import exerciseSlice from "./features/exercise/exerciseSlice";
import { exerciseApiSlice } from "./features/api/exerciseApiSlice";
import { youTubeApiSlice } from "./features/api/youTubeApiSlice";

export const store = () => {
  return configureStore({
    reducer: {
      [exerciseApiSlice.reducerPath]: exerciseApiSlice.reducer,
      [youTubeApiSlice.reducerPath]: youTubeApiSlice.reducer,
      exercises: exerciseSlice,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        exerciseApiSlice.middleware,
        youTubeApiSlice.middleware
      ),
    devTools: false,
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
