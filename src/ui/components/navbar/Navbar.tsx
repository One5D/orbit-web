import { ArrowUpRightFromSquare } from "@gravity-ui/icons";

const NAV_ITEMS = [
  { label: "Product", href: "#product", isInternal: true },
  { label: "Features", href: "#features", isInternal: true },
  { label: "About", href: "#about", isInternal: true },
  { label: "FAQs", href: "#faqs", isInternal: true },
  { label: "Roadmap", href: "https://orbitmacos.featurebase.app/en/roadmap", isInternal: false },
];

export function Navbar({ className = "" }: { className?: string; }) {
  return (
    <div
      className={`fixed inset-x-0 top-3.5 z-50 flex justify-center ${className}`}
    >
      <nav
        aria-label="Primary"
        className={
          "relative flex justify-around md:min-w-md lg:min-w-lg items-center gap-2 rounded-full border border-white/20 " +
          "bg-black/70 px-3 py-1.5 text-xs font-medium text-neutral-200 " +
          "shadow-[0_0_12px_rgba(160,110,240,0.25),0_0_24px_rgba(160,110,240,0.12)] " +
          "backdrop-blur-md " +
          "before:absolute before:inset-0 before:opacity-100 " +
          "before:rounded-full " +
          "before:bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(160,110,240,0.18),transparent_70%)] " +
          "sm:gap-3 sm:px-4 sm:py-2 sm:text-sm"
        }
      >
        {NAV_ITEMS.map((item) => (
          <a
            key={item.href}
            href={item.href}
            target={item.isInternal ? "_self" : "_blank"}
            rel={item.isInternal ? undefined : "noopener noreferrer"}
            className="relative z-10 px-2 py-1 transition-all duration-200 rounded-full hover:text-white hover:scale-110"
          >
            <span className="inline-flex items-center gap-1">
              {item.label}
              {!item.isInternal && (
                <ArrowUpRightFromSquare className="w-4 h-4" />
              )}
            </span>
          </a>
        ))}
      </nav>
    </div>
  );
}
