export type FeatureShowcaseItem = {
  title: string;
  description: string;
  image?: string;
  videoSrc?: string;
  poster?: string;
};

export const FEATURE_SHOWCASE_CONTENT: FeatureShowcaseItem[] = [
  {
    title: "Notes",
    description:
      "Quick notes in a floating window with rich text formatting. Create, search, and switch between notes instantly without leaving your workflow.",
    videoSrc: "https://media.orbit.o5d.app/notes.mp4",
  },
  {
    title: "Browser",
    description:
      "Lightweight floating browser for quick searches, links, and previews. Always available, never in the way.",
    videoSrc: "https://media.orbit.o5d.app/browser.mp4",
  },
  {
    title: "Terminal",
    description:
      "Built-in terminal with customizable font and colors. Run commands instantly without switching apps.",
    videoSrc: "https://media.orbit.o5d.app/terminal.mp4",
  },
  {
    title: "Preview",
    description:
      "Quickly preview images, PDFs, and text files in a floating window. Supports drag-and-drop for instant access.",
    videoSrc: "https://media.orbit.o5d.app/preview.mp4",
  },
  {
    title: "Clipboard",
    description:
      "Access your clipboard history in a floating window. Quickly paste previous items without interrupting your flow.",
    videoSrc: "https://media.orbit.o5d.app/clipboard.mp4",
  },
  {
    title: "Color Picker",
    description:
      "Floating color picker for instant access to color codes. Pick colors from anywhere on your screen without switching apps.",
    videoSrc: "https://media.orbit.o5d.app/color-picker.mp4",
  },
  {
    title: "Pomodoro",
    description:
      "Built-in Pomodoro timer in a floating window. Stay focused with customizable work and break intervals always within reach.",
    videoSrc: "https://media.orbit.o5d.app/pomodoro.mp4",
  },
  {
    title: "QR Code",
    description:
      "Generate and scan QR codes in a floating window. Quickly share links and information without leaving your workflow.",
    videoSrc: "https://media.orbit.o5d.app/qr-code.mp4",
  },
  {
    title: "Media Tools",
    description:
      "Image converter and video trimmer in a floating window. Edit media files quickly without switching apps.",
    videoSrc: "https://media.orbit.o5d.app/media-tools.mp4",
  },
];
