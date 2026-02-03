import { Skeleton } from "@heroui/react";

export function DropzoneSkeleton() {
  return (
    <div className="flex items-center justify-center w-full h-full p-2">
      <div className="w-full max-w-50 flex flex-col items-center gap-2">
        <div className="flex flex-col items-center justify-center w-full h-20 gap-2 border-2 border-dashed rounded-lg border-neutral-700">
          <Skeleton className="w-8 h-8 rounded" />
          <Skeleton className="w-20 h-2 rounded" />
        </div>
        <Skeleton className="w-24 h-5 rounded" />
      </div>
    </div>
  );
}
