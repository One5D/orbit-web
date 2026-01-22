import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";
import Background from "./ui/components/background/Background";
import { StarsBackground } from "./ui/components/starsBackground/StartBackground";
import { ShootingStars } from "./ui/components/shootingStars/ShootingStart";

const onest = Onest({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-onest",
});

export const metadata: Metadata = {
  title: "Orbit — macOS Floating Utility Launcher",
  description:
    "Orbit is a macOS floating utility launcher that gives you instant access to many productivity tools through a global hotkey. Designed with liquid glass, smooth animations, and full keyboard control, Orbit keeps essential tools always within reach—without breaking your workflow.",
  keywords: [
    "Orbit",
    "macOS utility launcher",
    "macOS floating launcher",
    "productivity launcher",
    "global hotkey launcher",
    "floating windows macOS",
    "liquid glass macOS app",
    "always on top macOS app",
    "macOS productivity tools",
    "utility toolkit macOS",
    "notes app macOS",
    "clipboard manager macOS",
    "pomodoro timer macOS",
    "color picker macOS",
    "qr code generator macOS",
    "system monitor macOS",
    "floating productivity app",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${onest.variable} min-h-screen antialiased bg-black`}>
        <div className="relative min-h-screen">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Background />
            <StarsBackground />
            <ShootingStars />
          </div>

          <main className="relative z-10">{children}</main>
        </div>
      </body>
    </html>
  );
}
