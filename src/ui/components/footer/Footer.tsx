import { Separator } from "@heroui/react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="w-full px-4 py-8 mt-auto sm:px-10 lg:px-6">
      <Separator className="max-w-4xl mx-auto mb-8 bg-neutral-800" />

      <div className="flex flex-col items-center justify-between max-w-4xl gap-6 mx-auto sm:flex-row">
        {/* Logo + Company */}
        <div className="flex items-center gap-3">
          <Image src="/orbit.png" alt="Orbit" width={24} height={24} />
          <span className="text-sm text-neutral-500">
            Built by{" "}
            <a
              href="https://www.linkedin.com/company/o5d/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors text-neutral-400 hover:text-white"
            >
              O5D
            </a>
          </span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6">
          {/* Product Hunt - placeholder */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-200 group hover:scale-110"
            aria-label="Orbit on Product Hunt"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <title>Product Hunt</title>
              <circle
                cx="12"
                cy="12"
                r="12"
                className="transition-colors fill-neutral-500 group-hover:fill-[#DA552F]"
              />
              <path
                d="M13.337 6H8.5v12h2.5v-4h2.337c2.59 0 4.663-1.758 4.663-4s-2.073-4-4.663-4zm-.126 6H11V8h2.211c1.24 0 2.289.746 2.289 2s-1.049 2-2.289 2z"
                className="transition-colors fill-black group-hover:fill-white"
              />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/company/o5d/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-200 group hover:scale-110"
            aria-label="O5D on LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <title>LinkedIn</title>
              <rect
                width="24"
                height="24"
                rx="5"
                className="transition-colors fill-neutral-500 group-hover:fill-[#0A66C2]"
              />
              <path
                d="M8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                className="transition-colors fill-black group-hover:fill-white"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Support + Copyright */}
      <div className="mt-6 text-xs text-center text-neutral-600">
        <a
          href="mailto:support@one5d.dev"
          className="transition-colors hover:text-neutral-400"
        >
          support@one5d.dev
        </a>
        <span className="mx-2">·</span>© {new Date().getFullYear()} Orbit. All
        rights reserved.
      </div>
    </footer>
  );
}
