import { Skeleton } from "@heroui/react";

export function TerminalSkeleton() {
  return (
    <div className="flex items-center justify-center w-full h-full p-2">
      <div className="w-full max-w-50 flex flex-col gap-1.5 font-mono">
        <Skeleton className="w-1/3 h-2 rounded" />
        <Skeleton className="w-1/2 h-2 rounded" />
        <Skeleton className="w-2/3 h-2 rounded" />
        <Skeleton className="w-1/4 h-2 rounded" />
        <Skeleton className="w-1/3 h-2 rounded" />
        <Skeleton className="w-full h-5 mt-2 rounded-lg" />
      </div>
    </div>
  );
}
