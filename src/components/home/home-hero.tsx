"use client";

import Image from "next/image";
import { Manrope } from "next/font/google";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HeroProgress, HeroSegmentNavigation } from "./hero-segments";
import { Navbar } from "./navbar";

const manrope = Manrope({ subsets: ["latin"] });
const slideDuration = 8000;

const heroSlides = [
  {
    category: "Food & Beverage",
    eyebrow: "POS for Australian businesses",
    title:
      "From Payment To POS Hardware, Aussie's POS Solution Helps Businesses",
    media: {
      type: "video" as const,
      src: "/6005605_Hotel_Entrance_1920x1080.mp4",
    },
    primaryCta: { label: "Get My POS Quote", href: "#contact" },
    secondaryCta: {
      label: "Explore Clover Systems",
      href: "#pos-systems",
    },
  },
  {
    category: "Retail",
    eyebrow: "POS systems built for modern retail",
    title: "Powerful POS Solutions Built To Keep Australian Retail Moving",
    media: {
      type: "image" as const,
      src: "/hero/retail-pos.png",
      alt: "Modern point-of-sale system in a premium retail store",
    },
    primaryCta: { label: "Explore Retail POS", href: "#retail" },
    secondaryCta: { label: "Get My POS Quote", href: "#contact" },
  },
  {
    category: "Services",
    eyebrow: "Flexible POS for service businesses",
    title: "Simple Payments And Smarter POS For Every Service Business",
    media: {
      type: "image" as const,
      src: "/hero/services-pos.png",
      alt: "Modern point-of-sale system at a premium service reception",
    },
    primaryCta: { label: "Explore Service POS", href: "#services" },
    secondaryCta: { label: "Get My POS Quote", href: "#contact" },
  },
];

export function HomeHero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = heroSlides[activeIndex];

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const timeout = window.setTimeout(() => {
      setActiveIndex((current) => (current + 1) % heroSlides.length);
    }, slideDuration);

    return () => window.clearTimeout(timeout);
  }, [activeIndex]);

  return (
    <section
      id="home"
      aria-labelledby="home-hero-heading"
      className="relative isolate bg-[#101010] text-white"
    >
      <div className="relative isolate flex min-h-[calc(100svh+72px)] overflow-hidden bg-zinc-600">
        <div aria-hidden="true" className="absolute inset-0 -z-30 bg-zinc-600" />

        <div key={activeSlide.category} className="hero-slide-enter absolute inset-0 -z-20">
          {activeSlide.media.type === "video" ? (
            <video
              aria-hidden="true"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              tabIndex={-1}
              className="size-full object-cover"
            >
              <source src={activeSlide.media.src} type="video/mp4" />
            </video>
          ) : (
            <Image
              src={activeSlide.media.src}
              alt={activeSlide.media.alt}
              fill
              sizes="100vw"
              className="object-cover"
            />
          )}
        </div>

        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(0,0,0,0.15)_0%,rgba(0,0,0,0.08)_38%,rgba(0,0,0,0.82)_100%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 -z-10 h-60 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.88))]"
        />

        <Navbar />

        <div className="mx-auto flex h-svh w-full max-w-[1440px] shrink-0 items-end px-6 pb-16 pt-40 sm:px-10 sm:pb-20 lg:px-5 lg:pb-[66px]">
          <div
            key={`content-${activeIndex}`}
            className="hero-slide-content flex w-full flex-col gap-10 lg:flex-row lg:items-end lg:justify-between"
          >
            <div className="max-w-4xl">
              <p
                className={`${manrope.className} mb-5 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.08em] text-white/95 sm:text-base`}
              >
                <Image
                  src="/Aussie - FF 1 (3).png"
                  alt=""
                  width={128}
                  height={88}
                  className="h-5 w-auto shrink-0 object-contain"
                  sizes="29px"
                />
                {activeSlide.eyebrow}
              </p>

              <h1
                id="home-hero-heading"
                className="max-w-[950px] font-sans text-[clamp(2.25rem,2.75vw,2.9rem)] font-semibold leading-[1.4] tracking-[-0.035em] text-balance"
              >
                {activeSlide.title}
              </h1>
            </div>

            <div
              id="quote"
              className="flex shrink-0 flex-col gap-3 font-sans sm:flex-row lg:pb-1"
            >
              <Link
                href={activeSlide.primaryCta.href}
                className="inline-flex min-h-[53px] items-center justify-center rounded-lg bg-[#008F74] px-6 text-base font-medium text-white shadow-lg shadow-black/10 transition-colors hover:bg-[#005343]"
              >
                {activeSlide.primaryCta.label}
              </Link>
              <Link
                href={activeSlide.secondaryCta.href}
                className="inline-flex min-h-[53px] items-center justify-center rounded-lg border border-white/80 bg-black/10 px-6 text-base font-medium text-white transition-colors hover:bg-white hover:text-zinc-950"
              >
                {activeSlide.secondaryCta.label}
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 top-[calc(100svh-2px)] z-10">
          <HeroProgress activeIndex={activeIndex} />
        </div>
        <div className="absolute inset-x-0 top-[100svh] z-10">
          <HeroSegmentNavigation
            activeIndex={activeIndex}
            onSelect={setActiveIndex}
          />
        </div>
      </div>
    </section>
  );
}
