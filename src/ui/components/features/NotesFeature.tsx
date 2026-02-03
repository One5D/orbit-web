import { Skeleton } from "@heroui/react";

export function NotesSkeleton() {
  return (
    <div className="flex items-center justify-center w-full h-full p-2">
      <div className="w-full max-w-50 flex flex-col gap-2">
        <Skeleton className="w-3/4 h-2.5 rounded" />
        <Skeleton className="w-full h-2 rounded" />
        <Skeleton className="w-11/12 h-2 rounded" />
        <Skeleton className="w-5/6 h-2 rounded" />
        <Skeleton className="w-2/3 h-2 rounded" />
        <div className="flex items-center justify-between mt-2">
          <Skeleton className="w-14 h-2 rounded" />
          <Skeleton className="w-10 h-2 rounded" />
        </div>
      </div>
    </div>
  );
}
