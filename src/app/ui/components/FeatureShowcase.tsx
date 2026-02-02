"use client";

import "@vidstack/react/player/styles/default/layouts/video.css";
import "@vidstack/react/player/styles/default/theme.css";

import { HoverEffect } from "@ui/components/card/CardHoverEffect";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import {
  DefaultVideoLayout,
  defaultLayoutIcons,
} from "@vidstack/react/player/layouts/default";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FEATURE_SHOWCASE_CONTENT } from "@/data/showcaseContent";

type FeatureItem = (typeof FEATURE_SHOWCASE_CONTENT)[number];

export function FeatureShowcase() {
  const [activeFeature, setActiveFeature] = useState<FeatureItem | null>(null);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveFeature(null);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div className="w-full">
      <HoverEffect
        items={FEATURE_SHOWCASE_CONTENT}
        onSelect={(item) => {
          if (item.videoSrc || item.image) {
            setActiveFeature(item);
          }
        }}
      />

      {activeFeature ? (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-500 flex items-center justify-center px-4 py-10"
        >
          <button
            type="button"
            aria-label="Close feature overlay"
            className="absolute inset-0 z-0 h-full w-full bg-black/75 backdrop-blur-md"
            onClick={() => setActiveFeature(null)}
            onKeyDown={(event) => {
              if (
                event.key === "Escape" ||
                event.key === "Enter" ||
                event.key === " "
              ) {
                setActiveFeature(null);
              }
            }}
          />

          <div className="relative z-10 w-full max-w-5xl">
            <button
              type="button"
              aria-label="Close video overlay"
              className="absolute -right-2 -top-2 z-10 rounded-full bg-white/10 px-3 py-1 text-sm text-white shadow-lg transition hover:bg-white/20"
              onClick={() => setActiveFeature(null)}
            >
              ✕
            </button>

            {activeFeature.videoSrc ? (
              <MediaPlayer
                className="aspect-video w-full overflow-hidden rounded-2xl shadow-2xl"
                src={activeFeature.videoSrc}
                poster={activeFeature.poster ?? activeFeature.image}
                playsInline
              >
                <MediaProvider />
                <DefaultVideoLayout icons={defaultLayoutIcons} />
              </MediaPlayer>
            ) : activeFeature.image ? (
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black shadow-2xl">
                <Image
                  src={activeFeature.image}
                  alt={activeFeature.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
            ) : null}

            <div className="mt-4 text-center text-neutral-100">
              <h3 className="text-xl font-semibold">{activeFeature.title}</h3>
              <p className="mt-2 text-sm text-neutral-400">
                {activeFeature.description}
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
