export default function LiquidGlass({
  children,
  className = "",
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <div
      className={
        "relative flex items-center justify-center rounded-3xl border border-white/10 bg-linear-to-br from-white/8 via-white/3 to-white/5" +
        "transition-transform duration-800 ease-[cubic-bezier(0.175,0.885,0.32,2.2)] " +
        className
      }
      style={{
        WebkitBackdropFilter: "url(#glass)",
        backdropFilter: "url(#glass)",
      }}
    >
      <span className="pointer-events-none absolute inset-0 z-1 opacity-[0.03] [background-image:url('data:image/svg+xml;utf8,<svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;100%&quot; height=&quot;100%&quot;><filter id=&quot;noise&quot;><feTurbulence type=&quot;fractalNoise&quot; baseFrequency=&quot;0.8&quot; numOctaves=&quot;4&quot; stitchTiles=&quot;stitch&quot;/></filter><rect width=&quot;100%&quot; height=&quot;100%&quot; filter=&quot;url(%23noise)&quot;/></svg>')]" />
      <div className="relative w-full h-full z-2">{children}</div>

      <svg width="0" height="0" className="absolute" aria-hidden>
        <title>Liquid Glass</title>
        <filter id="glass">
          <feTurbulence
            type="turbulence"
            baseFrequency="0.02"
            numOctaves="3"
            seed="2"
            result="turb"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="turb"
            scale="10"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>
    </div>
  );
}
