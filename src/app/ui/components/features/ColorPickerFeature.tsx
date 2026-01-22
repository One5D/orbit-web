import { Skeleton } from "@heroui/react";

export function ColorPickerSkeleton() {
  return (
    <div className="flex items-center justify-center w-full h-full p-2">
      <div className="w-full max-w-50 flex flex-col gap-2">
        <Skeleton className="w-full h-14 rounded-lg" />
        <div className="grid grid-cols-3 gap-2">
          <Skeleton className="h-4 rounded" />
          <Skeleton className="h-4 rounded" />
          <Skeleton className="h-4 rounded" />
        </div>
        <Skeleton className="w-1/3 h-2.5 rounded" />
      </div>
    </div>
  );
}
