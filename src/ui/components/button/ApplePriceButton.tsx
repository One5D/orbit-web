import AppleIcon from "@ui/components/icons/AppleIcon";

export function ApplePriceButton({
  price,
  onClick,
  className = "",
}: Readonly<{
  price: string;
  onClick?: () => void;
  className?: string;
}>) {
  return (
    <a
      href="https://macos.orbit.o5d.app/Orbit-v1.32.0.dmg"
      target="_blank"
      rel="noopener noreferrer"
      className={
        "relative inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/70 px-4 py-2 " +
        "text-sm font-medium text-white backdrop-blur-md overflow-hidden " +
        "transition-all duration-200 " +
        "hover:scale-110 active:scale-[0.97] " +
        "hover:shadow-[0_0_12px_rgba(160,110,240,0.25),0_0_24px_rgba(160,110,240,0.12)] " +
        "before:absolute before:inset-0 before:opacity-0 hover:before:opacity-100 " +
        "before:transition-opacity before:duration-200 " +
        "before:bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(160,110,240,0.18),transparent_70%)] " +
        className
      }
      onClick={onClick}
    >
      <AppleIcon className="w-4 h-4" />
      <span>{price}</span>
    </a>
  );
}
