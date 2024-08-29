"use client";
import { useGetSimilarTargetExercisesQuery } from "@/redux/services/exercisesApi";
import HorizontalScrollBar from "@/shared/HorizontalScrollBar/HorizontalScrollBar";
import React from "react";

const TargetExercise = ({ target }: { target: string }) => {
  const { data } = useGetSimilarTargetExercisesQuery(target, {
    skip: !target,
  });

  return (
    <div className="py-10">
      <h2 className="text-black text-[32px] font-semibold">
        Similar <span className="text-[#272424]">Target Muscle</span> exercise
      </h2>
      {/* --- Horizontal Scroll bar  --- */}
      {data && <HorizontalScrollBar data={data} />}
      {/* --- Horizontal Scroll bar  --- */}
    </div>
  );
};

export default TargetExercise;
