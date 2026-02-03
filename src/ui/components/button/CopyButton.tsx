"use client";

import { useState } from "react";

export function CopyButton({ licenseKey }: { licenseKey: string }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(licenseKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      type="button"
      onClick={copyToClipboard}
      className="w-full p-6 text-center transition-colors border rounded-xl bg-neutral-900 border-neutral-800 hover:border-neutral-700 group"
    >
      <p className="mb-2 text-xs tracking-widest uppercase text-neutral-500">
        Your License Key
      </p>
      <p className="font-mono text-lg font-semibold tracking-wider text-[rgb(160,110,240)]">
        {licenseKey}
      </p>
      <p className="mt-2 text-xs text-neutral-600 group-hover:text-neutral-400">
        {copied ? "Copied!" : "Click to copy"}
      </p>
    </button>
  );
}
