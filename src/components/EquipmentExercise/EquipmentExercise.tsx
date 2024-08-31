"use client";
import { useGetSimilarEquipmentExercisesQuery } from "@/redux/services/exercisesApi";
import HorizontalScrollBar from "@/shared/HorizontalScrollBar/HorizontalScrollBar";
import ExerciseItemSkeleton from "@/shared/Skeleton/ExerciseItemSkeleton";
import { useEffect, useState } from "react";

interface Props {
  equipment: string;
  loading: boolean;
}

const EquipmentExercise = ({ equipment, loading }: Props) => {
  const { data, isLoading } = useGetSimilarEquipmentExercisesQuery(equipment, {
    skip: !equipment,
  });

  // --- skeleton items handle based on Screen size ---
  const [skeletonItem, setSkeletonItem] = useState<number>(3);
  useEffect(() => {
    const updateItemsCount = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1024) {
        setSkeletonItem(3);
      } else if (screenWidth >= 640) {
        setSkeletonItem(2);
      } else {
        setSkeletonItem(1);
      }
    };
    updateItemsCount();
    window.addEventListener("resize", updateItemsCount);
    return () => {
      window.removeEventListener("resize", updateItemsCount);
    };
  }, []);

  return (
    <div className="py-10">
      <h2 className="text-black text-pretty text-[26px] sm:text-[32px] font-semibold capitalize">
        Similar <span className="text-[#FF2625]">Equipment</span> exercise
      </h2>
      {/* --- Horizontal Scroll bar  --- */}
      {loading || isLoading ? (
        <div className="grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: skeletonItem }).map((_, index) => (
            <div
              key={index}
              className="p-3 shadow-md rounded-md min-h-[400px] mt-[40px] mb-[35px]"
            >
              <ExerciseItemSkeleton key={index} />
            </div>
          ))}
        </div>
      ) : (
        data && <HorizontalScrollBar data={data} />
      )}
      {/* --- Horizontal Scroll bar  --- */}
    </div>
  );
};

export default EquipmentExercise;
