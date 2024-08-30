import { Skeleton } from "primereact/skeleton";

const CategorySkeleton = () => {
  return (
    <div className="flex items-center justify-between gap-[18px] mt-[40px] mb-[35px]">
      <div className="w-full h-[170px] shadow-md flex flex-col items-center justify-center gap-4">
        <Skeleton size="3rem" className="mr-2"></Skeleton>
        <Skeleton width="4rem" className="mb-2"></Skeleton>
      </div>
      <div className="w-full h-[170px] shadow-md flex flex-col items-center justify-center gap-4">
        <Skeleton size="3rem" className="mr-2"></Skeleton>
        <Skeleton width="4rem" className="mb-2"></Skeleton>
      </div>
      <div className="w-full h-[170px] shadow-md flex flex-col items-center justify-center gap-4">
        <Skeleton size="3rem" className="mr-2"></Skeleton>
        <Skeleton width="4rem" className="mb-2"></Skeleton>
      </div>
      <div className="w-full h-[170px] shadow-md flex flex-col items-center justify-center gap-4">
        <Skeleton size="3rem" className="mr-2"></Skeleton>
        <Skeleton width="4rem" className="mb-2"></Skeleton>
      </div>
    </div>
  );
};

export default CategorySkeleton;
