import { Skeleton } from "@heroui/react";

export function SystemMonitorSkeleton() {
  return (
    <div className="flex items-center justify-center w-full h-full p-2">
      <div className="w-full max-w-50 flex flex-col gap-2">
        <Skeleton className="w-12 h-2.5 rounded" />
        {["CPU", "MEM", "DISK", "NET"].map((label, i) => (
          <div key={label} className="flex items-center gap-2">
            <Skeleton className="w-7 h-2 rounded" />
            <div className="flex-1 h-2.5 overflow-hidden rounded-full bg-neutral-800/50">
              <Skeleton
                className="h-full rounded-full"
                style={{ width: `${30 + i * 18}%` }}
              />
            </div>
            <Skeleton className="w-5 h-2 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}
