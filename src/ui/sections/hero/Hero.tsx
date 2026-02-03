"use client";

import { ApplePriceButton } from "@ui/components/button/ApplePriceButton";
import { BrowserSkeleton } from "@ui/components/features/BrowserFeature";
import { CalculatorSkeleton } from "@ui/components/features/CalculatorFeature";
import { ClipboardSkeleton } from "@ui/components/features/ClipboardFeature";
import { ColorPickerSkeleton } from "@ui/components/features/ColorPickerFeature";
import { DropzoneSkeleton } from "@ui/components/features/DropzoneFeature";
import { ImageConverterSkeleton } from "@ui/components/features/ImageConverterFeature";
import { NotesSkeleton } from "@ui/components/features/NotesFeature";
import { PomodoroSkeleton } from "@ui/components/features/PomodoroFeature";
import { PreviewSkeleton } from "@ui/components/features/PreviewFeature";
import { QRSkeleton } from "@ui/components/features/QRFeature";
import { SystemMonitorSkeleton } from "@ui/components/features/SystemMonitorFeature";
import { TerminalSkeleton } from "@ui/components/features/TerminalFeature";
import { TranslateSkeleton } from "@ui/components/features/TranslateFeature";
import { VideoTrimmerSkeleton } from "@ui/components/features/VideoTrimmerFeature";
import { FlipWords } from "@ui/components/flipWords/FlipWords";
import { DraggableResizableGlassCard } from "@ui/components/glass/card/draggable/DraggableGlassCard";
import { useMemo } from "react";
import { WORDS } from "@/data/features";
import { fromViewport, seededShuffle } from "@/lib/utils";

const FEATURE_SKELETONS = [
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
  { title: "Image Converter", component: <ImageConverterSkeleton /> },
  { title: "Translate", component: <TranslateSkeleton /> },
  { title: "Dropzone", component: <DropzoneSkeleton /> },
  { title: "Video Trimmer", component: <VideoTrimmerSkeleton /> },
];

function useHero({ seed }: { seed: number }) {
  const shuffledWords = useMemo(() => seededShuffle(WORDS, seed), [seed]);
  const selectedFeatures = useMemo(() => {
    const shuffled = seededShuffle(FEATURE_SKELETONS, seed + 1);
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
              <span>$14.99 / year</span>
              <span>·</span>
              <span>7-day free trial</span>
              <span>·</span>
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed inset-0 hidden pointer-events-none lg:block z-300">
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
      </div>
    </div>
  );
}
