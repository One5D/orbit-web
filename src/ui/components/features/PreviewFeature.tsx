import { Skeleton } from "@heroui/react";

export function PreviewSkeleton() {
  return (
    <div className="flex items-center justify-center w-full h-full p-2">
      <div className="w-full max-w-50 flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Skeleton className="w-4 h-4 rounded" />
          <Skeleton className="w-14 h-2.5 rounded" />
        </div>
        <Skeleton className="w-full h-16 rounded-lg" />
        <div className="flex justify-center gap-2">
          <Skeleton className="w-5 h-5 rounded" />
          <Skeleton className="w-5 h-5 rounded" />
          <Skeleton className="w-5 h-5 rounded" />
        </div>
      </div>
    </div>
  );
}
