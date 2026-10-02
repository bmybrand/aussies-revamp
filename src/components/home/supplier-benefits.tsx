"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { InViewReveal } from "./in-view-reveal";

const supplierBenefits = [
  {
    label: "Flexible Options",
    description: "Choose how you purchase your equipment.",
    image: "/supplier/flexible-solutions.png",
    alt: "Smartphone POS application used with a contactless payment terminal",
  },
  {
    label: "Business-Focused Advice",
    description:
      "We recommend solutions based on your workflow, not just hardware specifications.",
    image: "/supplier/australian-support.png",
    alt: "Retail specialist helping an Australian small-business owner",
  },
  {
    label: "Complete Solutions",
    description:
      "Hardware, payment processing, and setup support from one place.",
    image: "/supplier/complete-solutions.png",
    alt: "Complete point-of-sale hardware system on a cafe counter",
  },
  {
    label: "Simple Buying Process",
    description: "Clear options without confusing technical details.",
    image: "/supplier/ongoing-support.png",
    alt: "Cafe owner reviewing business information on a tablet",
  },
  {
    label: "Ongoing Assistance",
    description: "Support beyond your initial purchase.",
    image: "/supplier/team-training.png",
    alt: "Hospitality team receiving hands-on point-of-sale training",
  },
  {
    label: "Transparent Pricing",
    description:
      "Understand your equipment, processing, and ongoing costs before you make a decision.",
    image: "/supplier/business-insights.png",
    alt: "Cafe manager reviewing business analytics on a tablet",
  },
  {
    label: "Solutions That Scale",
    description:
      "Choose a POS setup that can grow with your business as your needs change.",
    image: "/supplier/connected-hardware.png",
    alt: "Integrated point-of-sale hardware at a modern retail checkout",
  },
  {
    label: "One Point of Contact",
    description:
      "Get help navigating hardware, payment options, and your POS setup without dealing with multiple providers.",
    image: "/supplier/business-growth.png",
    alt: "Restaurant owner standing confidently in a busy venue",
  },
];

export function SupplierBenefits() {
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sectionElement = sectionRef.current;
    const viewportElement = viewportRef.current;
    const railElement = railRef.current;

    if (!sectionElement || !viewportElement || !railElement) {
      return;
    }

    const section = sectionElement;
    const viewport = viewportElement;
    const rail = railElement;
    const desktopQuery = window.matchMedia("(min-width: 1024px)");

    let scrollDistance = 0;
    let animationFrame = 0;
    let updateQueued = false;

    function measure() {
      if (!desktopQuery.matches) {
        scrollDistance = 0;
        section.style.height = "auto";
        rail.style.transform = "none";
        return;
      }

      const endSpace = Math.min(window.innerWidth * 0.07, 120);
      scrollDistance = Math.max(
        0,
        rail.scrollWidth - viewport.clientWidth + endSpace,
      );
      section.style.height = `calc(100svh + ${scrollDistance}px)`;
      updatePosition();
    }

    function updatePosition() {
      if (!desktopQuery.matches) {
        rail.style.transform = "none";
        updateQueued = false;
        return;
      }

      const sectionTop = section.getBoundingClientRect().top;
      const progress = Math.min(scrollDistance, Math.max(0, -sectionTop));
      rail.style.transform = `translate3d(${-progress}px, 0, 0)`;
      updateQueued = false;
    }

    function queueUpdate() {
      if (!updateQueued) {
        animationFrame = window.requestAnimationFrame(updatePosition);
        updateQueued = true;
      }
    }

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(viewport);
    resizeObserver.observe(rail);
    window.addEventListener("scroll", queueUpdate, { passive: true });
    window.addEventListener("resize", measure);
    desktopQuery.addEventListener("change", measure);
    measure();

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("scroll", queueUpdate);
      window.removeEventListener("resize", measure);
      desktopQuery.removeEventListener("change", measure);
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <InViewReveal className="bg-[#fdfdfc]">
      <section
        ref={sectionRef}
        aria-labelledby="supplier-benefits-title"
        className="relative bg-[#fdfdfc] text-zinc-950"
      >
        <div className="flex items-center overflow-hidden py-16 lg:sticky lg:top-0 lg:h-svh lg:py-14">
          <div className="mx-auto w-[calc(100%-2rem)] sm:w-[calc(100%-3rem)] lg:w-[calc(100%-clamp(10rem,16vw,20rem))]">
            <div data-reveal="left" className="max-w-[760px]">
              <h2
                id="supplier-benefits-title"
                className="text-[clamp(2.2rem,3.2vw,3.75rem)] font-semibold leading-[1.08] tracking-[-0.045em] text-balance"
              >
                More Than A POS Supplier
              </h2>
              <p className="mt-4 max-w-[720px] text-sm leading-6 text-zinc-500 sm:text-base">
                We help Australian businesses choose, set up, and grow with POS solutions that work in the real world.
              </p>
            </div>

            <div
              ref={viewportRef}
              className="-mr-4 mt-8 w-[calc(100%+1rem)] snap-x snap-mandatory overflow-x-auto overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:-mr-6 sm:w-[calc(100%+1.5rem)] lg:ml-[calc(50%-50vw)] lg:mr-0 lg:mt-10 lg:w-screen lg:snap-none lg:overflow-hidden"
            >
              <div
                ref={railRef}
                className="flex w-max gap-4 pb-3 pr-4 will-change-transform sm:pr-6 lg:gap-5 lg:pl-[clamp(5rem,8vw,10rem)] lg:pr-0"
              >
                {supplierBenefits.map((benefit, index) => (
                  <article
                    key={benefit.label}
                    data-reveal="card"
                    className={`supplier-benefit-card reveal-delay-${index + 1} group relative isolate aspect-[2/3] w-[82vw] max-w-[390px] shrink-0 snap-start overflow-hidden rounded-2xl bg-zinc-200 shadow-[0_16px_38px_rgba(0,45,37,0.1)] sm:w-[45vw] lg:w-[clamp(360px,24vw,430px)] lg:max-w-none lg:[scroll-snap-align:none]`}
                  >
                    <Image
                      src={benefit.image}
                      alt={benefit.alt}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-1000 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.055]"
                    />
                    <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.18)_0%,transparent_30%,rgba(0,0,0,0.08)_100%)]" />
                    <span className="absolute right-5 top-5 inline-flex min-h-9 items-center rounded-[11px] border border-white/45 bg-[#65564f]/70 px-3.5 text-[clamp(0.7rem,0.78vw,0.875rem)] font-medium tracking-[-0.01em] text-white shadow-[0_5px_16px_rgba(0,0,0,0.18)] backdrop-blur-md transition-colors duration-500 group-hover:bg-[#554843]/78">
                      {benefit.label}
                    </span>
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/35 to-transparent transition-opacity duration-500 lg:opacity-0 lg:group-hover:opacity-100"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-6 text-white transition-[opacity,transform] duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] sm:p-7 lg:translate-y-4 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
                      <h3 className="text-xl font-semibold leading-tight tracking-[-0.025em] sm:text-2xl">
                        {benefit.label}
                      </h3>
                      <p className="mt-2 max-w-[34ch] text-sm leading-6 text-white/85">
                        {benefit.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </InViewReveal>
  );
}
