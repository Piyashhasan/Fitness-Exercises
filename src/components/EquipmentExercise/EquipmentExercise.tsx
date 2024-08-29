"use client";

import { useGetSimilarEquipmentExercisesQuery } from "@/redux/services/exercisesApi";
import HorizontalScrollBar from "@/shared/HorizontalScrollBar/HorizontalScrollBar";
import React from "react";

const EquipmentExercise = ({ equipment }: { equipment: string }) => {
  const { data } = useGetSimilarEquipmentExercisesQuery(equipment, {
    skip: !equipment,
  });
  return (
    <div className="py-10">
      <h2 className="text-black text-[32px] font-semibold">
        Similar <span className="text-[#FF2625]">Equipment</span> exercise
      </h2>
      {/* --- Horizontal Scroll bar  --- */}
      {data && <HorizontalScrollBar data={data} />}
      {/* --- Horizontal Scroll bar  --- */}
    </div>
  );
};

export default EquipmentExercise;
