import {
  ArrowsRotateLeft,
  Box,
  CreditCard,
  PlanetEarth,
  Receipt,
  ShoppingBag,
} from "@gravity-ui/icons";
import type { ReactNode } from "react";

export type FaqItem = {
  title: string;
  content: string;
  icon?: ReactNode;
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    title: "What do I get with the subscription?",
    icon: <CreditCard />,
    content:
      "Your subscription keeps Orbit evolving — ongoing macOS compatibility, improvements to existing tools, and new features added over time. Everything stays ad‑free and tracker‑free, and one license can be used on up to two Macs.",
  },
  {
    title: "Can I request new features?",
    icon: <Box />,
    content:
      "Yes. Feature requests are welcome and help shape the future of Orbit. You can send suggestions in the Roadmap website or contact support via email.",
  },
  {
    title: "What is Orbit and how does it work?",
    icon: <PlanetEarth />,
    content:
      "Orbit is a native macOS app that provides floating productivity tools that stay visible while you work. You can open multiple tools at once and keep them always on top, across apps and monitors.",
  },
  {
    title: "Which versions of macOS are supported?",
    icon: <Box />,
    content:
      "Orbit supports macOS 14 Sonoma and newer. Some features require macOS 26 or later.",
  },
  {
    title: "Can I use Orbit on multiple monitors and devices?",
    icon: <ShoppingBag />,
    content: "Yes. Orbit works across multiple monitors",
  },
  {
    title: "Does Orbit affect system performance?",
    icon: <Receipt />,
    content:
      "Orbit is lightweight and uses native macOS APIs only. Tasks like cropping/trimming a video can use more resources temporarily.",
  },
  {
    title: "Does Orbit require an internet connection?",
    icon: <PlanetEarth />,
    content:
      "No. Orbit works offline and does not rely on external services. Although The Translator tool uses Apple’s native translation API, which may use the internet by default. To force offline translation, enable On-Device Mode in System Settings → Language & Region → Translation Languages.",
  },
  {
    title: "Are all tools included?",
    icon: <Box />,
    content:
      "Yes. All tools are included in the subscription. New tools may be added over time, but none will be removed.",
  },
  {
    title: "Can I disable tools I don’t use?",
    icon: <CreditCard />,
    content:
      "You can choose which tools appear in the launcher and hide the ones you don’t need.",
  },
  {
    title: "Is Orbit sandboxed or does it require special permissions?",
    icon: <Receipt />,
    content:
      "Orbit is not sandboxed and does not require special permissions such as Accessibility or Screen Recording.",
  },
  {
    title: "Where is my data stored?",
    icon: <PlanetEarth />,
    content:
      "All data is stored locally on your Mac. Orbit does not sync data or send anything to external servers. You can export your notes in json format for backup or transfer.",
  },
  {
    title: "Can I cancel my subscription?",
    icon: <ArrowsRotateLeft />,
    content:
      "Yes. You can cancel at any time. Once your subscription expires, Orbit will stop working.",
  },
  {
    title: "How do I get support or report bugs?",
    icon: <ArrowsRotateLeft />,
    content: "You can contact support or report bugs through the Roadmap website or via email.",
  },
];
