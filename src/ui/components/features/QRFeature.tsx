import { Skeleton } from "@heroui/react";

export function QRSkeleton() {
  return (
    <div className="flex items-center justify-center w-full h-full p-2">
      <div className="flex flex-col items-center gap-3">
        <Skeleton className="w-24 h-24 rounded-lg" />
        <div className="flex gap-2">
          <Skeleton className="w-12 h-5 rounded" />
          <Skeleton className="w-12 h-5 rounded" />
        </div>
      </div>
    </div>
  );
}
