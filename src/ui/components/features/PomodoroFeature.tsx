import { Skeleton } from "@heroui/react";

export function PomodoroSkeleton() {
  return (
    <div className="flex items-center justify-center w-full h-full p-2">
      <div className="flex flex-col items-center gap-3">
        <Skeleton className="w-20 h-20 rounded-full" />
        <Skeleton className="w-16 h-3 rounded" />
        <div className="flex items-center gap-2">
          <Skeleton className="w-1.5 h-1.5 rounded-full" />
          <Skeleton className="w-1.5 h-1.5 rounded-full" />
          <Skeleton className="w-1.5 h-1.5 rounded-full" />
          <Skeleton className="w-1.5 h-1.5 rounded-full" />
        </div>
        <div className="flex gap-3 mt-1">
          <Skeleton className="w-7 h-7 rounded-full" />
          <Skeleton className="w-7 h-7 rounded-full" />
        </div>
      </div>
    </div>
  );
}
