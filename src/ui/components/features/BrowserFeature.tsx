import { Skeleton } from "@heroui/react";

export function BrowserSkeleton() {
  return (
    <div className="flex items-center justify-center w-full h-full p-2">
      <div className="w-full max-w-50 flex flex-col gap-2">
        <Skeleton className="w-full h-5 rounded-lg" />
        <div className="flex flex-col gap-2 mt-1">
          <Skeleton className="w-1/2 h-3 rounded" />
          <Skeleton className="w-full h-2 rounded" />
          <Skeleton className="w-5/6 h-2 rounded" />
          <Skeleton className="w-2/3 h-2 rounded" />
        </div>
      </div>
    </div>
  );
}
