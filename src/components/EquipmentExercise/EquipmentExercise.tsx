import HorizontalScrollBar from "@/shared/HorizontalScrollBar/HorizontalScrollBar";
import React from "react";

const EquipmentExercise = () => {
  return (
    <div className="py-10">
      <h2 className="text-black text-[32px] font-semibold">
        Similar <span className="text-[#FF2625]">Equipment</span> exercise
      </h2>
      {/* --- Horizontal Scroll bar  --- */}
      <HorizontalScrollBar />
      {/* --- Horizontal Scroll bar  --- */}
    </div>
  );
};

export default EquipmentExercise;
