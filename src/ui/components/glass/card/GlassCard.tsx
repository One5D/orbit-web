import LiquidGlass from "../Glass";

export function LiquidGlassCard({
  children,
  className = "",
  title,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
  title?: string;
}>) {
  return (
    <LiquidGlass
      className={`w-full flex-col items-stretch justify-start p-7 ${className}`}
    >
      <div className="flex items-center gap-2">
        <span className="size-3.5 rounded-full bg-[#ff5f57] shadow-[0_0_0_1px_rgba(0,0,0,0.25)_inset]" />
        <span className="size-3.5 rounded-full bg-[#febc2e] shadow-[0_0_0_1px_rgba(0,0,0,0.25)_inset]" />
        <span className="size-3.5 rounded-full bg-[#28c840] shadow-[0_0_0_1px_rgba(0,0,0,0.25)_inset]" />

        {title ? (
          <div className="w-full ml-3 text-sm font-medium tracking-wide text-end text-white/80">
            {title}
          </div>
        ) : null}
      </div>

      <div className="flex-1 mt-6 overflow-auto text-white">{children}</div>
    </LiquidGlass>
  );
}
