/** biome-ignore-all lint/suspicious/noArrayIndexKey: It's Okay */
import { Skeleton } from "@heroui/react";

export function CalculatorSkeleton() {
  return (
    <div className="flex items-center justify-center w-full h-full p-2">
      <div className="w-full max-w-50 flex flex-col gap-2">
        <Skeleton className="w-full h-6 rounded-lg" />
        <div className="grid grid-cols-4 gap-1.5">
          {Array.from({ length: 16 }).map((_, i) => (
            <Skeleton key={i} className="h-5 rounded" />
          ))}
        </div>
      </div>
    </div>
  );
}
