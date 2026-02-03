import { Skeleton } from "@heroui/react";

export function TranslateSkeleton() {
  return (
    <div className="flex items-center justify-center w-full h-full p-2">
      <div className="w-full max-w-50 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <Skeleton className="w-16 h-4 rounded" />
          <Skeleton className="w-5 h-5 rounded" />
          <Skeleton className="w-16 h-4 rounded" />
        </div>
        <Skeleton className="w-full h-10 rounded-lg" />
        <Skeleton className="w-full h-10 rounded-lg" />
      </div>
    </div>
  );
}
