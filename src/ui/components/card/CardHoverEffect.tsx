/** biome-ignore-all lint/style/useConst: AceternityUI */
import { cn } from "@heroui/react";
import { AnimatePresence, motion } from "motion/react";

import type { ReactNode } from "react";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
  onSelect,
}: {
  items: {
    title: string;
    description: string;
    image?: string;
    videoSrc?: string;
    poster?: string;
  }[];
  className?: string;
  onSelect?: (item: {
    title: string;
    description: string;
    image?: string;
    videoSrc?: string;
    poster?: string;
  }) => void;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-20 pt-10",
        className,
      )}
    >
      {items.map((item, idx) => (
        <button
          key={item.title}
          type="button"
          className="relative block w-full h-full p-2 text-left group hover:cursor-pointer"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={() => onSelect?.(item)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 block w-full h-full dark:bg-[rgb(160,110,240)]/20 rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card backgroundImage={item.image ?? item.poster}>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </button>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
  backgroundImage,
}: {
  className?: string;
  children: ReactNode;
  backgroundImage?: string;
}) => {
  return (
    <div
      className={cn(
        "relative z-20 h-full w-full overflow-hidden rounded-2xl border border-transparent bg-black dark:border-white/20 group-hover:border-slate-700",
        className,
      )}
    >
      <div className="absolute inset-0 bg-white/5" />
      {backgroundImage ? (
        <div
          className="absolute inset-0 bg-center bg-cover rounded-2xl opacity-70"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      ) : null}
      {backgroundImage ? (
        <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-black/60 via-black/50 to-black/80" />
      ) : null}
      <div className="relative z-10 p-4">
        <div className="p-2">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className,
      )}
    >
      {children}
    </p>
  );
};
