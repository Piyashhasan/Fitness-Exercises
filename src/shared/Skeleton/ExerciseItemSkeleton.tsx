import { Skeleton } from "primereact/skeleton";

const ExerciseItemSkeleton = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <Skeleton width="80%" height="240px"></Skeleton>
      </div>
      <div className="mt-5">
        <div className="flex items-center justify-center gap-x-3 text-white">
          <Skeleton width="7rem" height="2rem" borderRadius="16px"></Skeleton>
          <Skeleton width="7rem" height="2rem" borderRadius="16px"></Skeleton>
        </div>
        <div className="flex items-center justify-center mt-8">
          <Skeleton width="10rem" className="mb-2"></Skeleton>
        </div>
      </div>
    </>
  );
};

export default ExerciseItemSkeleton;
