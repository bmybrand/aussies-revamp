"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { EyebrowLabel } from "./eyebrow-label";
import { HeroProgress, HeroSegmentNavigation } from "./hero-segments";
import { Navbar } from "./navbar";

const slideDuration = 8000;

const heroSlides = [
  {
    category: "Food & Beverage",
    eyebrow: "POS for Australian businesses",
    title:
      "From Payment To POS Hardware, Aussie's POS Solution Helps Businesses",
    media: {
      type: "video" as const,
      src: "/Header (2).mp4",
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
      type: "video" as const,
      src: "/videos/retail/header (2).mp4",
    },
    primaryCta: { label: "Explore Retail POS", href: "#retail" },
    secondaryCta: { label: "Get My POS Quote", href: "#contact" },
  },
  {
    category: "Services",
    eyebrow: "Flexible POS for service businesses",
    title: "Simple Payments And Smarter POS For Every Service Business",
    media: {
      type: "video" as const,
      src: "/videos/services/header.mp4",
    },
    primaryCta: { label: "Explore Service POS", href: "#services" },
    secondaryCta: { label: "Get My POS Quote", href: "#contact" },
  },
];

type HomeHeroProps = {
  activeIndex: number;
  timerKey: number;
  onSelect: (index: number) => void;
  timerPaused: boolean;
};

export function HomeHero({
  activeIndex,
  timerKey,
  onSelect,
  timerPaused,
}: HomeHeroProps) {
  const remainingTimeRef = useRef(slideDuration);
  const timerCycleRef = useRef(`${activeIndex}-${timerKey}`);
  const activeSlide = heroSlides[activeIndex];

  useEffect(() => {
    const timerCycle = `${activeIndex}-${timerKey}`;

    if (timerCycleRef.current !== timerCycle) {
      timerCycleRef.current = timerCycle;
      remainingTimeRef.current = slideDuration;
    }

    if (
      timerPaused ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const startedAt = performance.now();
    const timeout = window.setTimeout(() => {
      onSelect((activeIndex + 1) % heroSlides.length);
    }, remainingTimeRef.current);

    return () => {
      window.clearTimeout(timeout);
      remainingTimeRef.current = Math.max(
        0,
        remainingTimeRef.current - (performance.now() - startedAt),
      );
    };
  }, [activeIndex, onSelect, timerKey, timerPaused]);

  return (
    <>
      <Navbar />

      <section
        id="home"
        aria-labelledby="home-hero-heading"
        className="relative isolate bg-[#101010] text-white"
      >
        <div className="relative isolate flex min-h-[calc(100svh+72px)] overflow-hidden bg-zinc-600">
        <div aria-hidden="true" className="absolute inset-0 -z-30 bg-zinc-600" />

        <div key={activeSlide.category} className="hero-slide-enter absolute inset-0 -z-20">
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
        </div>

        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(0,0,0,0.15)_0%,rgba(0,0,0,0.08)_38%,rgba(0,0,0,0.82)_100%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 -z-10 h-60 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.88))]"
        />

        <div className="mx-auto flex h-svh w-[calc(100%-2rem)] shrink-0 items-end pb-16 pt-40 sm:w-[calc(100%-3rem)] sm:pb-20 lg:w-[calc(100%-clamp(10rem,16vw,20rem))] lg:pb-[66px]">
          <div
            key={`content-${activeIndex}`}
            className="hero-slide-content flex w-full flex-col gap-10 lg:flex-row lg:items-end lg:justify-between"
          >
            <div className="min-w-0 flex-1 lg:max-w-[1020px]">
              <EyebrowLabel className="mb-5 text-white/95">
                {activeSlide.eyebrow}
              </EyebrowLabel>

              <h1
                id="home-hero-heading"
                className="font-sans text-[clamp(2.45rem,3vw,3.2rem)] font-semibold leading-[1.32] tracking-[-0.035em]"
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
          <HeroProgress
            key={`${activeIndex}-${timerKey}`}
            activeIndex={activeIndex}
            paused={timerPaused}
          />
        </div>
        <div className="absolute inset-x-0 top-[100svh] z-10">
          <HeroSegmentNavigation
            activeIndex={activeIndex}
            onSelect={onSelect}
          />
        </div>
        </div>
      </section>
    </>
  );
}
