"use client";

import Image from "next/image";
import { useState } from "react";

const productImages: Record<string, string> = {
  Mini: "/showcase/products/mini.png",
  Flex: "/showcase/products/flex.png",
  "Station Duo": "/showcase/products/station-duo.png",
  "Kitchen Display": "/showcase/products/kitchen-display.png",
  "Inventory Hub": "/showcase/products/kitchen-display.png",
  "Booking Hub": "/showcase/products/kitchen-display.png",
  "Station Solo": "/showcase/products/station-solo.png",
};

const showcaseCategories = [
  {
    label: "Food & beverage",
    icon: "food",
    image: "/showcase/restaurant-pos.png",
    imageAlt: "Point-of-sale system in a modern restaurant kitchen",
    headline: "A Restaurant POS That Works As Hard As Your Team",
    products: [
      {
        name: "Mini",
        description: "A small, efficient system made for countertops.",
      },
      {
        name: "Flex",
        description: "Take payments and manage orders from anywhere.",
      },
      {
        name: "Station Duo",
        description: "A complete counter setup for faster service.",
      },
      {
        name: "Kitchen Display",
        description: "Keep every order clear, organised, and on time.",
      },
      {
        name: "Station Solo",
        description: "One powerful screen for everyday operations.",
      },
    ],
  },
  {
    label: "Retail",
    icon: "retail",
    image: "/hero/retail-pos.png",
    imageAlt: "Point-of-sale system in a premium retail store",
    headline: "A Retail POS Built To Keep Every Sale Moving",
    products: [
      {
        name: "Mini",
        description: "Compact checkout power for smaller counters.",
      },
      {
        name: "Flex",
        description: "Serve customers and take payments on the floor.",
      },
      {
        name: "Station Duo",
        description: "A customer-facing checkout built for busy stores.",
      },
      {
        name: "Inventory Hub",
        description: "Keep products and stock easier to manage.",
      },
      {
        name: "Station Solo",
        description: "A simple, reliable home for every transaction.",
      },
    ],
  },
  {
    label: "Services",
    icon: "services",
    image: "/hero/services-pos.png",
    imageAlt: "Point-of-sale system at a premium service reception",
    headline: "A Service POS That Makes Every Appointment Simpler",
    products: [
      {
        name: "Mini",
        description: "A polished payment setup for reception desks.",
      },
      {
        name: "Flex",
        description: "Take secure payments wherever the work happens.",
      },
      {
        name: "Station Duo",
        description: "Give clients a clear, confident checkout.",
      },
      {
        name: "Booking Hub",
        description: "Connect appointments, staff, and payments.",
      },
      {
        name: "Station Solo",
        description: "Run the day from one streamlined system.",
      },
    ],
  },
];

function CategoryIcon({ type }: { type: string }) {
  if (type === "retail") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-[18px]">
        <path d="M4 9v10h16V9M3 9l2-5h14l2 5M8 9v3m4-3v3m4-3v3M8 19v-4h8v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === "services") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-[18px]">
        <path d="M4 8h16v11H4V8Zm5 0V5h6v3m-3 4v2m-8-3c5 2 11 2 16 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-[18px]">
      <path d="M7 3v8m-3-8v5c0 2 1.3 3 3 3s3-1 3-3V3m-3 8v10M16 3c2 2 3 5 3 8h-4V3m4 8v10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function BusinessShowcase() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [activeProductIndex, setActiveProductIndex] = useState(0);
  const activeCategory = showcaseCategories[activeCategoryIndex];
  const activeProduct = activeCategory.products[activeProductIndex];

  function selectCategory(index: number) {
    setActiveCategoryIndex(index);
    setActiveProductIndex(0);
  }

  return (
    <section id="industries" aria-labelledby="business-showcase-title" className="flex h-svh min-h-[640px] flex-col bg-zinc-950 text-white">
      <header className="shrink-0 bg-[#008F74] text-white">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-3 px-6 py-3 sm:px-10 lg:h-[60px] lg:flex-row lg:items-center lg:justify-between lg:px-5 lg:py-0">
          <nav aria-label="Business types" className="flex gap-3 overflow-x-auto">
            {showcaseCategories.map((category, index) => (
              <button
                key={category.label}
                type="button"
                onClick={() => selectCategory(index)}
                aria-pressed={index === activeCategoryIndex}
                className={`inline-flex h-11 shrink-0 items-center justify-center gap-2.5 rounded-lg border px-5 text-xs font-medium transition-colors ${
                  index === activeCategoryIndex
                    ? "border-white bg-transparent text-white ring-1 ring-inset ring-white"
                    : "border-black/10 bg-white/90 text-zinc-800 hover:bg-white"
                }`}
              >
                <CategoryIcon type={category.icon} />
                {category.label}
              </button>
            ))}
          </nav>

          <h2 id="business-showcase-title" className="text-xl font-semibold tracking-[-0.02em] lg:text-right lg:text-[22px]">
            One POS. Every Kind Of Business.
          </h2>
        </div>
      </header>

      <div className="relative isolate min-h-0 flex-1 overflow-hidden">
        <Image
          key={activeCategory.image}
          src={activeCategory.image}
          alt={activeCategory.imageAlt}
          fill
          sizes="100vw"
          className="hero-slide-enter -z-20 object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(0,0,0,0.62)_0%,rgba(0,0,0,0.1)_58%,rgba(0,0,0,0.35)_100%)]" />
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.64))]" />

        <div className="relative mx-auto flex h-full w-full max-w-[1440px] flex-col justify-between px-6 py-10 sm:px-10 lg:px-5 lg:py-12">
          <h3 key={activeCategory.headline} className="hero-slide-content max-w-[720px] text-[clamp(2rem,3vw,3.25rem)] font-semibold leading-[1.18] tracking-[-0.04em] text-balance">
            {activeCategory.headline}
          </h3>

          <div className="max-w-xl pb-2 lg:pb-0">
            <div key={`${activeCategory.label}-${activeProduct.name}`} className="hero-slide-content">
              <p className="text-2xl font-semibold uppercase sm:text-3xl">
                {activeProduct.name}
              </p>
              <p className="mt-2 text-base text-white/90 sm:text-lg">
                {activeProduct.description}
              </p>
            </div>

            <div className="mt-8 flex gap-3 overflow-x-auto pb-2 lg:hidden">
              {activeCategory.products.map((product, index) => (
                <ProductCard
                  key={product.name}
                  product={product}
                  active={index === activeProductIndex}
                  onClick={() => setActiveProductIndex(index)}
                />
              ))}
            </div>
          </div>

        </div>

        <aside aria-label={`${activeCategory.label} products`} className="absolute right-[3vw] top-1/2 hidden -translate-y-1/2 flex-col gap-2.5 lg:flex">
          {activeCategory.products.map((product, index) => (
            <ProductCard
              key={product.name}
              product={product}
              active={index === activeProductIndex}
              onClick={() => setActiveProductIndex(index)}
            />
          ))}
        </aside>
      </div>
    </section>
  );
}

type ProductCardProps = {
  product: { name: string; description: string };
  active: boolean;
  onClick: () => void;
};

function ProductCard({ product, active, onClick }: ProductCardProps) {
  const productImage = productImages[product.name] ?? productImages.Mini;

  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      aria-label={`View ${product.name}`}
      className={`relative flex w-[clamp(96px,11vh,120px)] shrink-0 flex-col overflow-hidden rounded-lg border-2 text-left transition-[height,border-color,transform] duration-500 ease-out hover:-translate-y-0.5 ${
        active
          ? "h-[calc(clamp(96px,11vh,120px)+28px)] border-[#008F74] bg-[#008F74]"
          : "h-[clamp(96px,11vh,120px)] border-transparent"
      }`}
    >
      <span
        aria-hidden={!active}
        className={`flex shrink-0 items-center justify-center overflow-hidden bg-[#008F74] px-1 text-center text-[10px] font-medium whitespace-nowrap text-white transition-[height,opacity] duration-500 ease-out sm:text-[11px] ${
          active ? "h-7 opacity-100" : "h-0 opacity-0"
        }`}
      >
        {product.name}
      </span>
      <span className="relative block min-h-0 w-full flex-1 overflow-hidden rounded-[6px]">
        <Image
          src={productImage}
          alt=""
          fill
          sizes="120px"
          className={`object-cover transition-transform duration-500 ease-out ${
            active ? "scale-[1.02]" : "scale-100"
          }`}
        />
      </span>
    </button>
  );
}
