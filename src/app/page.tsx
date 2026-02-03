import { Accordion, IconChevronDown, Separator } from "@heroui/react";
import { FeatureShowcase } from "@ui/components/FeatureShowcase";
import { Footer } from "@ui/components/footer/Footer";
import Hero from "@ui/sections/hero/Hero";
import Image from "next/image";
import { FAQ_ITEMS } from "@/data/faqs";

export default function Home() {
  const seed = Math.random();

  return (
    <main className="z-20 flex flex-col min-h-screen p-4 lg:p-6 sm:p-10">
      <section id="product" className="mt-24 scroll-mt-24">
        <div className="flex items-center justify-center gap-4">
          <Image src="/orbit.png" alt="Orbit" width={75} height={75} />
          <h1 className="font-semibold text-7xl ">Orbit</h1>
        </div>

        <div className="flex justify-center">
          <Separator className="max-w-lg my-4 bg-neutral-700" />
        </div>

        <Hero seed={seed} />
      </section>

      <section id="features" className="scroll-mt-24">
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
          <FeatureShowcase />
        </div>

        <div className="flex flex-col items-center gap-3 mt-4">
          <div className="text-sm text-neutral-500">
            And many more features to enhance your productivity
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-24">
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
                Your tools stay on top, no matter what app you’re using. Just
                like the ones here!
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

            <div>
              <h3 className="text-lg font-medium text-neutral-300">
                One shortcut away
              </h3>
              <p className="mt-2 text-sm text-neutral-500">
                Open any tool instantly without changing context. You can
                customize them.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-center mt-10 mb-4">
        <Separator className="max-w-md bg-neutral-700" />
      </div>

      <section id="faqs" className="scroll-mt-24">
        <div className="flex flex-col items-center mb-32 text-center">
          <h2 className="text-2xl font-normal text-neutral-300">
            Frequently asked questions
          </h2>

          <p className="max-w-xl mt-3 text-sm text-neutral-500">
            Everything you need to know about Orbit, pricing, and usage.
          </p>

          <Accordion className="w-full max-w-4xl mt-10 text-left">
            {FAQ_ITEMS.map((faq, index) => (
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
                      <IconChevronDown />
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
      </section>

      <Footer />
    </main>
  );
}
