"use client";

import CategoryItems from "../CategoryItems/CategoryItems";
import { useEffect, useState } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { filterExercisesByCategory } from "@/redux/features/exercise/exerciseSlice";

export default function Category() {
  const dispatch = useAppDispatch();
  const [selectCategory, setSelectCategory] = useState<string>("");

  const handleSelectCategory = (categoryName: string) => {
    setSelectCategory(categoryName);
  };

  useEffect(() => {
    if (selectCategory) {
      dispatch(filterExercisesByCategory(selectCategory));
    }
  }, [selectCategory, dispatch]);

  return (
    <div className="py-10">
      <CategoryItems
        selectCategory={selectCategory}
        handleSelectCategory={handleSelectCategory}
      />
    </div>
  );
}
