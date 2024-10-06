import { Skeleton } from "./ui/skeleton";

const LoadingSkeletons = () => {
  return (
    <div className="flex flex-col gap-y-6">
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </div>
  );
};

const SkeletonCard = () => {
  return (
    <div className="border border-gray-200/75 rounded-md p-4 flex flex-col gap-y-14">
      <div className="grid grid-cols-2">
        <div className="flex items-center justify-start gap-x-4">
          <Skeleton className="w-10 h-10 rounded-md bg-gradient-to-r from-gray-200/75 to-gray-50" />
          <div className="flex flex-col items-start gap-y-3">
            <Skeleton className="w-24 h-[10px] rounded-full bg-gradient-to-r from-gray-200/75 to-white" />
            <Skeleton className="w-36 h-4 rounded-full bg-gradient-to-r from-gray-200/75 to-white" />
          </div>
        </div>
        <div className="flex items-end gap-x-20">
          <div className="flex flex-col items-start gap-y-3">
            <Skeleton className="w-20 h-[10px] rounded-full bg-gradient-to-r from-gray-200/75 to-white" />
            <Skeleton className="w-20 h-4 rounded-full bg-gradient-to-r from-gray-200/75 to-white" />
          </div>
          <Skeleton className="w-20 h-4 rounded-full bg-gradient-to-r from-gray-200/75 to-white" />
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className="flex items-center justify-start gap-x-4">
          <Skeleton className="w-10 h-10 rounded-md bg-gradient-to-r from-gray-200/75 to-gray-50" />
          <div className="flex flex-col items-start gap-y-3">
            <Skeleton className="w-24 h-[10px] rounded-full bg-gradient-to-r from-gray-200/75 to-white" />
            <div className="flex items-center gap-x-5">
              <Skeleton className="w-36 h-4 rounded-full bg-gradient-to-r from-gray-200/75 to-white" />
              <Skeleton className="w-10 h-3 rounded-full bg-gradient-to-r from-gray-200/75 to-white" />
            </div>
          </div>
        </div>
        <div className="flex items-end gap-x-20">
          <div className="flex flex-col items-start gap-y-3">
            <Skeleton className="w-20 h-[10px] rounded-full bg-gradient-to-r from-gray-200/75 to-white" />
            <Skeleton className="w-20 h-4 rounded-full bg-gradient-to-r from-gray-200/75 to-white" />
          </div>
          <Skeleton className="w-20 h-4 rounded-full bg-gradient-to-r from-gray-200/75 to-white" />
        </div>
      </div>
    </div>
  );
};

export default LoadingSkeletons;
