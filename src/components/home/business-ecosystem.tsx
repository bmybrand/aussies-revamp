"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import { InViewReveal } from "./in-view-reveal";

type LayerIconProps = {
  type: "payments" | "software" | "hardware" | "apps";
};

const layerIconPaths: Record<LayerIconProps["type"], string> = {
  payments: "/Vector.svg",
  software: "/Vector-1.svg",
  hardware: "/Vector-2.svg",
  apps: "/Vector-3.svg",
};

function LayerIcon({ type }: LayerIconProps) {
  return (
    <Image
      src={layerIconPaths[type]}
      alt=""
      width={26}
      height={26}
      className="h-5 w-6 shrink-0 object-contain"
    />
  );
}

const layers = [
  {
    label: "Payments",
    type: "payments",
    className: "ecosystem-layer-payments",
    title: "Accept Payments with Ease",
    description: "Process secure card and contactless payments with a setup built for your business.",
  },
  {
    label: "Software",
    type: "software",
    className: "ecosystem-layer-software",
    title: "Powerful Tools, One System",
    description: "Bring sales, customers, reporting, and daily operations together in one simple system.",
  },
  {
    label: "Hardware",
    type: "hardware",
    className: "ecosystem-layer-hardware",
    title: "POS Hardware That Fits",
    description: "Choose reliable hardware shaped around your counter, team, and way of working.",
  },
  {
    label: "Apps",
    type: "apps",
    className: "ecosystem-layer-apps",
    title: "Extend What Your POS Can Do",
    description: "Connect useful apps that add the capabilities your growing business needs.",
  },
] as const;

export function BusinessEcosystem() {
  const [hoveredLayer, setHoveredLayer] = useState<string | null>(null);
  const [lastHoveredLayer, setLastHoveredLayer] = useState<string | null>(null);
  const accordionRef = useRef<HTMLDivElement>(null);
  const targetPositionRef = useRef<{ left: number; top: number } | null>(null);
  const currentPositionRef = useRef<{ left: number; top: number } | null>(null);
  const followFrameRef = useRef<number | null>(null);
  const displayedLayer = hoveredLayer ?? lastHoveredLayer
    ? layers.find((layer) => layer.label === (hoveredLayer ?? lastHoveredLayer))
    : undefined;

  useEffect(() => {
    return () => {
      if (followFrameRef.current !== null) {
        window.cancelAnimationFrame(followFrameRef.current);
      }
    };
  }, []);

  function hoverLayer(label: string) {
    setHoveredLayer(label);
    setLastHoveredLayer(label);
  }

  function animateAccordion() {
    const accordion = accordionRef.current;
    const target = targetPositionRef.current;
    const current = currentPositionRef.current;

    if (!accordion || !target || !current) {
      followFrameRef.current = null;
      return;
    }

    const easing = 0.085;
    current.left += (target.left - current.left) * easing;
    current.top += (target.top - current.top) * easing;

    accordion.style.left = `${current.left}px`;
    accordion.style.top = `${current.top}px`;
    accordion.style.transform = "none";

    if (
      Math.abs(target.left - current.left) > 0.25 ||
      Math.abs(target.top - current.top) > 0.25
    ) {
      followFrameRef.current = window.requestAnimationFrame(animateAccordion);
    } else {
      current.left = target.left;
      current.top = target.top;
      accordion.style.left = `${target.left}px`;
      accordion.style.top = `${target.top}px`;
      followFrameRef.current = null;
    }
  }

  function followPointer(event: ReactPointerEvent<HTMLDivElement>) {
    if (event.pointerType === "touch") {
      return;
    }

    const accordion = accordionRef.current;

    if (!accordion) {
      return;
    }

    const stage = event.currentTarget.getBoundingClientRect();
    const panel = accordion.getBoundingClientRect();
    const gap = 22;
    const edge = 12;
    const pointerX = event.clientX - stage.left;
    const isRightHalf = pointerX >= stage.width / 2;
    let left = isRightHalf
      ? pointerX + gap
      : pointerX - panel.width - gap;
    let top = event.clientY - stage.top - 48;

    left = Math.max(edge, Math.min(left, stage.width - panel.width - edge));
    top = Math.max(edge, Math.min(top, stage.height - panel.height - edge));

    targetPositionRef.current = { left, top };

    if (!currentPositionRef.current) {
      currentPositionRef.current = {
        left: accordion.offsetLeft,
        top: accordion.offsetTop,
      };
    }

    if (followFrameRef.current === null) {
      followFrameRef.current = window.requestAnimationFrame(animateAccordion);
    }
  }

  return (
    <InViewReveal>
      <section
        id="business-ecosystem"
        aria-labelledby="business-ecosystem-title"
        className="relative isolate flex min-h-[max(720px,100svh)] items-center overflow-hidden bg-[#fdfdfc] text-zinc-950"
      >
        <div className="relative h-[1320px] w-full sm:h-[1120px] lg:h-[720px] lg:-translate-y-[72px]">
        <div data-reveal className="relative z-10 mx-auto max-w-[1400px] px-6 pt-20 text-center sm:px-10 sm:pt-24">
          <h2 id="business-ecosystem-title" className="text-[clamp(2.2rem,3.25vw,3.45rem)] font-semibold leading-[1.1] tracking-[-0.04em] text-balance lg:whitespace-nowrap">
            Everything You Need To Run Your Business
          </h2>
          <p className="mx-auto mt-5 max-w-[760px] text-sm leading-6 text-zinc-500 sm:text-base">
            More than a payment terminal. Your POS can help manage daily operations, improve efficiency, and give you better visibility.
          </p>
        </div>

        <div className="ecosystem-mobile-cards">
          {layers.map((layer, index) => (
            <article key={layer.label} data-reveal="card" className={`ecosystem-mobile-card reveal-delay-${index + 1}`}>
              <span className="ecosystem-mobile-card-badge">{layer.label}</span>
              <h3>{layer.title}</h3>
              <p>{layer.description}</p>
            </article>
          ))}
        </div>

        <div
          data-reveal="ecosystem"
          className="ecosystem-stage absolute inset-x-0 bottom-0 top-[190px]"
          onPointerMove={followPointer}
        >
          <div
            ref={accordionRef}
            className="ecosystem-accordion"
            data-visible={hoveredLayer ? "true" : undefined}
            data-rendered={displayedLayer ? "true" : undefined}
          >
            {displayedLayer && (
              <article
                key={displayedLayer.label}
                data-highlighted="true"
                data-open="true"
                className="ecosystem-accordion-item ecosystem-accordion-current"
              >
                <div className="ecosystem-accordion-trigger">
                  <span>
                    <span className="ecosystem-accordion-badge">{displayedLayer.label}</span>
                    <span className="ecosystem-accordion-title">{displayedLayer.title}</span>
                  </span>
                </div>
                <div className="ecosystem-accordion-panel">
                  <p>{displayedLayer.description}</p>
                </div>
              </article>
            )}
          </div>

          <div className="ecosystem-rings" aria-label="Payments, software, hardware, and apps working together">
            {layers.map((layer) => (
              <div
                key={layer.label}
                data-highlighted={hoveredLayer === layer.label ? "true" : undefined}
                onMouseEnter={() => hoverLayer(layer.label)}
                onMouseLeave={() => setHoveredLayer(null)}
                onFocus={() => hoverLayer(layer.label)}
                onBlur={() => setHoveredLayer(null)}
                tabIndex={0}
                className={`ecosystem-layer ${layer.className}`}
              >
                <div className="ecosystem-layer-label">
                  <LayerIcon type={layer.type} />
                  <span>{layer.label}</span>
                </div>
              </div>
            ))}

            <div className="ecosystem-lower-fade" aria-hidden="true" />

            <div className="ecosystem-logo" aria-hidden="true">
              <Image
                src="/Aussie - FF 1 (3).png"
                alt=""
                width={52}
                height={36}
                className="h-auto w-[42px] brightness-0 invert"
              />
            </div>
          </div>
        </div>
        </div>
      </section>
    </InViewReveal>
  );
}
