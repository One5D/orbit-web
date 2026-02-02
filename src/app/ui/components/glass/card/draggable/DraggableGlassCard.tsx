"use client";

import { motion } from "motion/react";
import { useLayoutEffect, useMemo, useRef, useState } from "react";
import { Rnd } from "react-rnd";
import { LiquidGlassCard } from "../GlassCard";

export function DraggableResizableGlassCard({
  children,
  title,
  initialX = 40,
  initialY = 40,
}: Readonly<{
  children: React.ReactNode;
  title?: string;
  initialX?: number;
  initialY?: number;
}>) {
  const measureRef = useRef<HTMLDivElement>(null);
  const [minHeight, setMinHeight] = useState<number | null>(null);

  // Random animation variation per card instance
  const animationVariants = useMemo(() => {
    const duration = 6 + Math.random() * 4; // 6-10 seconds
    const yAmplitude = 8 + Math.random() * 8; // 8-16 pixels
    const rotateAmplitude = 0.2 + Math.random() * 0.4; // 0.2-0.6 degrees
    const midBounce = 0.4 + Math.random() * 0.3; // mid-point variation
    return {
      duration,
      y: [0, -yAmplitude, -yAmplitude * midBounce, -yAmplitude, 0],
      rotateZ: [
        -rotateAmplitude,
        rotateAmplitude * 0.4,
        rotateAmplitude,
        rotateAmplitude * 0.4,
        -rotateAmplitude,
      ],
    };
  }, []);

  useLayoutEffect(() => {
    if (measureRef.current && minHeight === null) {
      setMinHeight(measureRef.current.offsetHeight);
    }
  }, [minHeight]);

  // First render: measure natural content height
  if (minHeight === null) {
    return (
      <div
        ref={measureRef}
        className="absolute opacity-0 pointer-events-none"
        style={{ width: 280 }}
      >
        <LiquidGlassCard title={title}>{children}</LiquidGlassCard>
      </div>
    );
  }

  return (
    <Rnd
      default={{ x: initialX, y: initialY, width: 280, height: minHeight }}
      bounds="window"
      minWidth={280}
      minHeight={minHeight}
      className="pointer-events-auto z-[200]"
    >
      <motion.div
        className="w-full h-full"
        animate={{
          y: animationVariants.y,
          rotateZ: animationVariants.rotateZ,
        }}
        transition={{
          duration: animationVariants.duration,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <LiquidGlassCard className="w-full h-full" title={title}>
          {children}
        </LiquidGlassCard>
      </motion.div>
    </Rnd>
  );
}
