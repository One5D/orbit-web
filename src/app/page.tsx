import { Separator } from "@heroui/react";
import { Accordion } from "@heroui/react";
import {
  ArrowsRotateLeft,
  Box,
  ChevronDown,
  CreditCard,
  PlanetEarth,
  Receipt,
  ShoppingBag,
} from "@gravity-ui/icons";
import Image from "next/image";
import Hero from "@ui/sections/hero/Hero";
import { StickyScroll } from "@ui/components/stickyScroll/StickyScroll";

export default function Home() {
  const seed = Math.random();

  const content = [
    {
      title: "Notes",
      description:
        "Quick notes in a floating window with rich text formatting. Create, search, and switch between notes instantly without leaving your workflow.",
      content: (
        <div className="relative w-full h-full">
          <Image
            src="/orbit-placeholder.png"
            alt="Orbit notes feature"
            fill
            className="object-cover"
          />
        </div>
      ),
    },
    {
      title: "Browser",
      description:
        "Lightweight floating browser for quick searches, links, and previews. Always available, never in the way.",
      content: (
        <div className="relative w-full h-full">
          <Image
            src="/orbit-browser.webp"
            alt="Orbit browser feature"
            fill
            className="object-cover"
          />
        </div>
      ),
    },
    {
      title: "Terminal",
      description:
        "Built-in terminal with customizable font and colors. Run commands instantly without switching apps.",
      content: (
        <div className="relative w-full h-full">
          <Image
            src="/orbit-terminal.webp"
            alt="Orbit terminal feature"
            fill
            className="object-cover"
          />
        </div>
      ),
    },
    {
      title: "Clipboard Manager",
      description:
        "Access your clipboard history instantly. Search, preview, and reuse previous copies with one shortcut.",
      content: (
        <div className="relative w-full h-full">
          <Image
            src="/orbit-clipboard.webp"
            alt="Orbit clipboard manager"
            fill
            className="object-cover"
          />
        </div>
      ),
    },
    {
      title: "Pomodoro Timer",
      description:
        "Stay focused with a built-in Pomodoro timer. Custom durations, sounds, and compact floating mode.",
      content: (
        <div className="relative w-full h-full">
          <Image
            src="/orbit-pomodoro.webp"
            alt="Orbit pomodoro timer"
            fill
            className="object-cover"
          />
        </div>
      ),
    },
    {
      title: "Color Picker",
      description:
        "Pick colors from anywhere on screen. Instantly copy HEX, RGB, or HSL values and access color history.",
      content: (
        <div className="relative w-full h-full">
          <Image
            src="/orbit-color-picker.webp"
            alt="Orbit color picker"
            fill
            className="object-cover"
          />
        </div>
      ),
    },
    {
      title: "QR Generator",
      description:
        "Generate QR codes instantly from URLs or text. Copy or save with different error correction levels.",
      content: (
        <div className="relative w-full h-full">
          <Image
            src="/orbit-qr.webp"
            alt="Orbit QR generator"
            fill
            className="object-cover"
          />
        </div>
      ),
    },
    {
      title: "Preview",
      description:
        "Quickly preview images, PDFs, and videos without opening separate apps. Fast, lightweight, and floating.",
      content: (
        <div className="relative w-full h-full">
          <Image
            src="/orbit-preview.webp"
            alt="Orbit file preview"
            fill
            className="object-cover"
          />
        </div>
      ),
    },
    {
      title: "System Monitor",
      description:
        "Monitor CPU, memory, disk, and network usage in real time from a floating window.",
      content: (
        <div className="relative w-full h-full">
          <Image
            src="/orbit-system-monitor.webp"
            alt="Orbit system monitor"
            fill
            className="object-cover"
          />
        </div>
      ),
    },
  ];

  const faqs = [
    {
      title: "Why is Orbit a yearly subscription?",
      icon: <CreditCard />,
      content:
        "Orbit is an actively maintained macOS product. A yearly subscription allows us to keep Orbit compatible with new macOS releases, improve existing tools, and add new features over time — without ads or tracking.",
    },
    {
      title: "Can I request new features?",
      icon: <Box />,
      content:
        "Yes. Feature requests are welcome and help shape the future of Orbit. You can send suggestions via email, and we regularly review and prioritize them.",
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
      content: "Orbit supports macOS 14 Sonoma and newer.",
    },
    {
      title: "Can I use Orbit on multiple monitors and devices?",
      icon: <ShoppingBag />,
      content:
        "Yes. Orbit works across multiple monitors, and each license can be used on up to three different Macs.",
    },
    {
      title: "Does Orbit affect system performance?",
      icon: <Receipt />,
      content:
        "Orbit is lightweight and uses native macOS APIs only. With many tools open at the same time, memory usage can peak around 350 MB.",
    },
    {
      title: "Does Orbit require an internet connection?",
      icon: <PlanetEarth />,
      content:
        "No. Orbit works 100% offline and does not rely on external services.",
    },
    {
      title: "Are all tools included?",
      icon: <Box />,
      content:
        "Yes. All tools are included in the subscription. New tools may be added over time, but none will be removed.",
    },
    {
      title: "Can I disable tools I don’t use?",
      icon: <ChevronDown />,
      content:
        "Yes. You can choose which tools appear in the launcher and hide the ones you don’t need.",
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
        "All data is stored locally on your Mac. Orbit does not sync data or send anything to external servers.",
    },
    {
      title: "What does the subscription include?",
      icon: <CreditCard />,
      content:
        "The annual subscription includes full access to all features and all updates while your subscription is active.",
    },
    {
      title: "Can I cancel my subscription?",
      icon: <ArrowsRotateLeft />,
      content:
        "Yes. You can cancel at any time. Once your subscription expires, Orbit will stop working.",
    },
    {
      title: "Do you offer student discounts?",
      icon: <Receipt />,
      content:
        "Yes. Verified students can receive a 15% discount using their academic email address.",
    },
    {
      title: "Can I use Orbit for work or commercial purposes?",
      icon: <Box />,
      content:
        "Yes. Orbit can be used for both personal and professional work.",
    },
    {
      title: "How do I get support or report bugs?",
      icon: <ArrowsRotateLeft />,
      content: "You can contact support or report issues via email.",
    },
    {
      title: "How does Orbit handle privacy?",
      icon: <PlanetEarth />,
      content:
        "Orbit is fully local. It does not collect, track, or transmit user data.",
    },
  ];

  return (
    <main className="z-20 flex flex-col min-h-screen p-4 lg:p-6 sm:p-10">
      <div className="flex items-center justify-center gap-4 mt-14 ">
        <Image src="/orbit.png" alt="Orbit" width={75} height={75} />
        <h1 className="font-semibold text-7xl ">Orbit</h1>
      </div>

      <div className="flex justify-center">
        <Separator className="max-w-lg my-4 bg-neutral-700" />
      </div>

      <Hero seed={seed} />

      {/* <div className="flex flex-col items-center mt-24 mb-16 text-center">
        <h2 className="text-3xl font-normal text-neutral-300">
          Work without switching apps
        </h2>

        <p className="max-w-2xl mt-4 text-lg text-neutral-500">
          Orbit keeps your essential tools in floating panels that stay visible
          while you work. No more jumping between windows or breaking your flow
          just to get things done.
        </p>
      </div> */}

      <div className="flex flex-col items-center mt-20">
        <h2 className="text-3xl font-normal text-center text-neutral-400">
          Explore Orbit's Features
        </h2>
        <h2 className="text-xl font-normal text-center text-neutral-500">
          Everything you need, always within reach
        </h2>

        <Separator className="max-w-lg mt-4 bg-neutral-700" />
      </div>

      <div className="w-full">
        <StickyScroll content={content} />
      </div>

      <div className="flex flex-col items-center mt-16 text-center">
        <h2 className="text-2xl font-normal text-neutral-300">
          How Orbit fits into your workflow
        </h2>

        <div className="grid max-w-4xl grid-cols-1 gap-10 mt-10 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-medium text-neutral-300">
              Always visible
            </h3>
            <p className="mt-2 text-sm text-neutral-500">
              Your tools stay on top, no matter what app you’re using.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-neutral-300">
              One shortcut away
            </h3>
            <p className="mt-2 text-sm text-neutral-500">
              Open any tool instantly without changing context.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-neutral-300">
              Lightweight and native
            </h3>
            <p className="mt-2 text-sm text-neutral-500">
              Fast, native macOS panels that feel like part of the system.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-10 mb-4">
        <Separator className="max-w-md bg-neutral-700" />
      </div>

      <div className="flex flex-col items-center mb-32 text-center">
        <h2 className="text-2xl font-normal text-neutral-300">
          Frequently asked questions
        </h2>

        <p className="max-w-xl mt-3 text-sm text-neutral-500">
          Everything you need to know about Orbit, pricing, and usage.
        </p>

        <Accordion className="w-full max-w-4xl mt-10 text-left">
          {faqs.map((faq, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: acceptable here
            <Accordion.Item key={index}>
              <Accordion.Heading>
                <Accordion.Trigger className="text-neutral-300">
                  {faq.icon ? (
                    <span className="mr-3 size-4 shrink-0 text-muted">
                      {faq.icon}
                    </span>
                  ) : null}
                  {faq.title}
                  <Accordion.Indicator>
                    <ChevronDown />
                  </Accordion.Indicator>
                </Accordion.Trigger>
              </Accordion.Heading>

              <Accordion.Panel>
                <Accordion.Body>{faq.content}</Accordion.Body>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </main>
  );
}
