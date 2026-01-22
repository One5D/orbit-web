export function seededShuffle<T>(array: T[], seed: number): T[] {
  const result = [...array];
  let s = seed;

  for (let i = result.length - 1; i > 0; i--) {
    s = Math.sin(s) * 10000;
    const j = Math.floor((s - Math.floor(s)) * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}

export function fromViewport({ xPct, yPct }: { xPct: number; yPct: number }) {
  if (typeof window === "undefined") {
    return { x: 0, y: 0 };
  }
  return {
    x: Math.round(window.innerWidth * xPct),
    y: Math.round(window.innerHeight * yPct),
  };
}
