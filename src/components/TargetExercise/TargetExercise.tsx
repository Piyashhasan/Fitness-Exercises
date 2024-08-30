"use client";
import { useGetSimilarTargetExercisesQuery } from "@/redux/services/exercisesApi";
import HorizontalScrollBar from "@/shared/HorizontalScrollBar/HorizontalScrollBar";
import ExerciseItemSkeleton from "@/shared/Skeleton/ExerciseItemSkeleton";

interface Props {
  target: string;
  loading: boolean;
}

const TargetExercise = ({ target, loading }: Props) => {
  const { data, isLoading } = useGetSimilarTargetExercisesQuery(target, {
    skip: !target,
  });

  return (
    <div className="py-10">
      <h2 className="text-black text-[32px] font-semibold">
        Similar <span className="text-[#FF2625]">Target Muscle</span> exercise
      </h2>
      {/* --- Horizontal Scroll bar  --- */}
      {loading || isLoading ? (
        <div className="grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-3 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div className="p-3 shadow-md rounded-md min-h-[400px] mt-[40px] mb-[35px]">
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

export default TargetExercise;
