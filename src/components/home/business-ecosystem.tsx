"use client";

import Image from "next/image";
import { useState } from "react";
import { InViewReveal } from "./in-view-reveal";

type LayerIconProps = {
  type: "payments" | "software" | "hardware" | "apps";
};

function LayerIcon({ type }: LayerIconProps) {
  if (type === "payments") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-5">
        <rect x="2.5" y="5" width="19" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 10h9M6 14h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "software") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-5">
        <path d="M4 19V9m4 10V5m4 14V8m4 11V3m4 16V11M2 20.5h20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "hardware") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-5">
        <rect x="5" y="2.5" width="14" height="19" rx="1.8" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 6h8M8 10h2m2 0h2m2 0h.1M8 13.5h2m2 0h2m2 0h.1M8 17h2m2 0h2m2 0h.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-5">
      <path d="M9.2 3.2a2.8 2.8 0 1 0 5.6 0v3.1h3.1a2.8 2.8 0 1 1 0 5.6h-3.1V15a2.8 2.8 0 1 1-5.6 0v-3.1H6.1a2.8 2.8 0 1 1 0-5.6h3.1V3.2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

const layers = [
  { label: "Payments", type: "payments", className: "ecosystem-layer-payments" },
  { label: "Software", type: "software", className: "ecosystem-layer-software" },
  { label: "Hardware", type: "hardware", className: "ecosystem-layer-hardware" },
  { label: "Apps", type: "apps", className: "ecosystem-layer-apps" },
] as const;

export function BusinessEcosystem() {
  const [selectedLayer, setSelectedLayer] = useState<string | null>(null);

  return (
    <InViewReveal>
      <section
        id="business-ecosystem"
        aria-labelledby="business-ecosystem-title"
        className="relative isolate min-h-[720px] overflow-hidden bg-[#fdfdfc] text-zinc-950 sm:min-h-svh"
      >
        <div data-reveal className="relative z-10 mx-auto max-w-[1100px] px-6 pt-20 text-center sm:px-10 sm:pt-24">
          <h2 id="business-ecosystem-title" className="text-[clamp(2rem,3vw,3.15rem)] font-semibold leading-[1.1] tracking-[-0.04em] text-balance">
            Everything You Need To Run Your Business
          </h2>
          <p className="mx-auto mt-5 max-w-[760px] text-sm leading-6 text-zinc-500 sm:text-base">
            More than a payment terminal. Your POS can help manage daily operations, improve efficiency, and give you better visibility.
          </p>
        </div>

        <div data-reveal="ecosystem" className="ecosystem-stage absolute inset-x-0 bottom-0 top-[190px]">
          <div className="ecosystem-rings" aria-label="Payments, software, hardware, and apps working together">
            {layers.map((layer) => (
              <button
                key={layer.label}
                type="button"
                aria-pressed={selectedLayer === layer.label}
                data-selected={selectedLayer === layer.label ? "true" : undefined}
                onClick={() => setSelectedLayer(layer.label)}
                className={`ecosystem-layer ${layer.className}`}
              >
                <div className="ecosystem-layer-label">
                  <LayerIcon type={layer.type} />
                  <span>{layer.label}</span>
                </div>
              </button>
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
      </section>
    </InViewReveal>
  );
}
