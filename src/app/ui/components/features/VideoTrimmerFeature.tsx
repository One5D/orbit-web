import { Skeleton } from "@heroui/react";

export function VideoTrimmerSkeleton() {
  return (
    <div className="flex items-center justify-center w-full h-full p-2">
      <div className="w-full max-w-50 flex flex-col gap-2">
        <Skeleton className="w-full h-14 rounded-lg" />
        <div className="flex items-center gap-1">
          <Skeleton className="w-6 h-3 rounded" />
          <Skeleton className="flex-1 h-4 rounded-full" />
          <Skeleton className="w-6 h-3 rounded" />
        </div>
        <div className="flex justify-center gap-2">
          <Skeleton className="w-6 h-6 rounded-full" />
          <Skeleton className="w-6 h-6 rounded-full" />
          <Skeleton className="w-6 h-6 rounded-full" />
        </div>
      </div>
    </div>
  );
}
