/** biome-ignore-all lint/suspicious/noArrayIndexKey: It's okay */
import { Skeleton } from "@heroui/react";

export function ClipboardSkeleton() {
  return (
    <div className="flex items-center justify-center w-full h-full p-2">
      <div className="w-full max-w-50 flex flex-col gap-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="w-full h-4 rounded" />
        ))}
      </div>
    </div>
  );
}
