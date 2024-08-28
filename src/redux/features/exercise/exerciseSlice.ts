import { Exercise } from "@/types/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// --- initial state type ---
export interface InitialState {
  allExercises: Exercise[] | null;
}

// --- initial state ---
const initialState: InitialState = {
  allExercises: null,
};

// --- Exercise slice ---
export const exerciseSlice = createSlice({
  name: "exercise",
  initialState,
  reducers: {
    addExercises: (state, action: PayloadAction<Exercise[]>) => {
      state.allExercises = action.payload;
    },
  },
});

// --- export actions ---
export const { addExercises } = exerciseSlice.actions;

// --- export reducer ---
export default exerciseSlice.reducer;
