import { Exercise } from "@/types/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// --- initial state type ---
export interface InitialState {
  allExercises: Exercise[];
  filterExercises: Exercise[];
  similarTargetExercises: Exercise[];
  similarEquipmentExercises: Exercise[];
}

// --- initial state ---
const initialState: InitialState = {
  allExercises: [],
  filterExercises: [],
  similarTargetExercises: [],
  similarEquipmentExercises: [],
};

// --- Exercise slice ---
export const exerciseSlice = createSlice({
  name: "exercise",
  initialState,
  reducers: {
    addExercises: (state, action: PayloadAction<Exercise[]>) => {
      state.allExercises = action.payload;
      state.filterExercises = action.payload;
    },

    searchExercises: (state, action: PayloadAction<string>) => {
      const filterCriteria = action.payload;
      state.filterExercises = state.allExercises?.filter(
        (exercise) =>
          exercise.name.includes(filterCriteria) ||
          exercise.bodyPart.includes(filterCriteria) ||
          exercise.target.includes(filterCriteria) ||
          exercise.equipment.includes(filterCriteria)
      );
    },

    filterExercisesByCategory: (state, action: PayloadAction<string>) => {
      const category = action.payload;
      if (category === "all") {
        state.filterExercises = state.allExercises;
      } else {
        state.filterExercises = state.allExercises.filter((exercise) =>
          exercise.bodyPart.includes(category)
        );
      }
    },

    similarTargetExercises: (state, action: PayloadAction<string>) => {
      const targetExerciseName = action.payload;
      state.similarTargetExercises = state.allExercises.filter(
        (exercise) => exercise.target === targetExerciseName
      );
    },
    similarEquipmentExercises: (state, action: PayloadAction<string>) => {
      const similarExerciseName = action.payload;
      console.log("--- similar exercise---", similarExerciseName);
    },
  },
});

// --- export actions ---
export const {
  addExercises,
  searchExercises,
  filterExercisesByCategory,
  similarEquipmentExercises,
  similarTargetExercises,
} = exerciseSlice.actions;

// --- export reducer ---
export default exerciseSlice.reducer;
