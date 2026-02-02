import { Skeleton } from "@heroui/react";

export function ImageConverterSkeleton() {
  return (
    <div className="flex items-center justify-center w-full h-full p-2">
      <div className="w-full max-w-50 flex flex-col gap-2">
        <div className="flex items-center justify-center gap-3">
          <Skeleton className="w-12 h-12 rounded-lg" />
          <Skeleton className="w-4 h-4 rounded" />
          <Skeleton className="w-12 h-12 rounded-lg" />
        </div>
        <div className="flex justify-center gap-2 mt-2">
          <Skeleton className="w-14 h-5 rounded" />
          <Skeleton className="w-14 h-5 rounded" />
          <Skeleton className="w-14 h-5 rounded" />
        </div>
        <Skeleton className="w-full h-6 mt-1 rounded-lg" />
      </div>
    </div>
  );
}
