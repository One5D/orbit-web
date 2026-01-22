"use client";

import { useMemo } from "react";
import { FlipWords } from "@ui/components/flipWords/FlipWords";
import { DraggableResizableGlassCard } from "@ui/components/glass/card/draggable/DraggableGlassCard";
import { BrowserSkeleton } from "@ui/components/features/BrowserFeature";
import { ClipboardSkeleton } from "@ui/components/features/ClipboardFeauture";
import { ColorPickerSkeleton } from "@ui/components/features/ColorPickerFeature";
import { NotesSkeleton } from "@ui/components/features/NotesFeature";
import { QRSkeleton } from "@ui/components/features/QRFeature";
import { TerminalSkeleton } from "@ui/components/features/TerminalFeature";
import { PomodoroSkeleton } from "@ui/components/features/PomodoroFeature";
import { CalculatorSkeleton } from "@ui/components/features/CalculatorFeature";
import { PreviewSkeleton } from "@ui/components/features/PreviewFeature";
import { SystemMonitorSkeleton } from "@ui/components/features/SystemMonitorFeature";
import { ApplePriceButton } from "@ui/components/button/ApplePriceButton";
import { fromViewport, seededShuffle } from "@/lib/utils";
import { WORDS } from "@/data/features";

function useHero({ seed }: { seed: number }) {
  const features = [
    { title: "Notes", component: <NotesSkeleton /> },
    { title: "Browser", component: <BrowserSkeleton /> },
    { title: "Terminal", component: <TerminalSkeleton /> },
    { title: "Color Picker", component: <ColorPickerSkeleton /> },
    { title: "Clipboard", component: <ClipboardSkeleton /> },
    { title: "Pomodoro", component: <PomodoroSkeleton /> },
    { title: "QR Code", component: <QRSkeleton /> },
    { title: "Calculator", component: <CalculatorSkeleton /> },
    { title: "Preview", component: <PreviewSkeleton /> },
    { title: "System Monitor", component: <SystemMonitorSkeleton /> },
  ];

  const shuffledWords = useMemo(() => seededShuffle(WORDS, seed), [seed]);
  const selectedFeatures = useMemo(() => {
    const shuffled = seededShuffle(features, seed + 1);
    return [shuffled[0], shuffled[1]];
  }, [seed]);

  const [leftFeature, rightFeature] = selectedFeatures;

  const leftPos = fromViewport({ xPct: 0.05, yPct: 0.09 });
  const rightPos = fromViewport({ xPct: 0.79, yPct: 0.18 });

  return { shuffledWords, leftFeature, rightFeature, leftPos, rightPos };
}

export default function Hero({
  seed,
}: Readonly<{
  seed: number;
}>) {
  const { shuffledWords, leftFeature, rightFeature, leftPos, rightPos } =
    useHero({ seed });

  return (
    <div className="relative">
      <div className="mx-auto">
        <div className="text-4xl font-normal text-center text-neutral-400">
          Keep your
          <FlipWords words={shuffledWords} /> <br />
          always visible while you work
        </div>

        <div className="mt-8 text-xl font-normal text-center text-neutral-500">
          <p>
            A persistent native floating panel for macOS that keeps your
            essential tools <br /> one click away — no context switching, no
            interruptions, no friction.
          </p>

          <div className="flex flex-col items-center gap-3 mt-4">
            <ApplePriceButton price="Start free trial" />

            <div className="text-xs text-neutral-500">
              No credit card required
            </div>

            <div className="flex gap-2 text-sm text-neutral-500">
              <span>$12.99 / year</span>
              <span>·</span>
              <span>7-day free trial</span>
              <span>·</span>
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="fixed inset-0 hidden lg:block">
        <DraggableResizableGlassCard
          title={leftFeature.title}
          initialX={leftPos.x}
          initialY={leftPos.y}
        >
          {leftFeature.component}
        </DraggableResizableGlassCard>
        <DraggableResizableGlassCard
          title={rightFeature.title}
          initialX={rightPos.x}
          initialY={rightPos.y}
        >
          {rightFeature.component}
        </DraggableResizableGlassCard>
      </div> */}
    </div>
  );
}
