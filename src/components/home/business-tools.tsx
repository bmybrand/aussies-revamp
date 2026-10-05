import Image from "next/image";
import { EyebrowLabel, manrope } from "./eyebrow-label";
import { InViewReveal } from "./in-view-reveal";

const salesBars = [
  { label: "Mon", height: 47, fill: 49 },
  { label: "Tue", height: 59, fill: 52 },
  { label: "Wed", height: 68, fill: 56 },
  { label: "Thu", height: 75, fill: 60 },
  { label: "Fri", height: 82, fill: 64 },
  { label: "Sat", height: 90, fill: 68 },
  { label: "Sun", height: 98, fill: 100 },
];

const salesStats = [
  { value: "145", label: "Orders", icon: "orders" },
  { value: "312", label: "Customers", icon: "customers" },
  { value: "+24%", label: "Growth", icon: "growth" },
];

const inventoryItems = [
  { name: "Coffee Beans", sku: "SKU 1001", stock: 32, image: "/inventory/coffee-beans.png" },
  { name: "Salad Bowl", sku: "SKU 1002", stock: 18, image: "/inventory/salad-bowl.png" },
  { name: "T-Shirt", sku: "SKU 1003", stock: 56, image: "/inventory/t-shirt.png" },
  { name: "Water Bottle", sku: "SKU 1004", stock: 24, image: "/inventory/water-bottle.png" },
];

const securityFeatures = [
  { icon: "shield", lines: ["Secure", "Payments"] },
  { icon: "bolt", lines: ["Fast", "Transactions"] },
  { icon: "wifi", lines: ["Reliable", "Performance"] },
  { icon: "lock", lines: ["Your Data", "Protected"] },
];

function CheckIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      <path d="m3.5 10 4.3 4.2 8.7-8.7" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PaymentCardGraphic() {
  return (
    <svg viewBox="0 0 317 430" fill="none" aria-hidden="true" className="pointer-events-none absolute inset-0 size-full">
      <defs>
        <linearGradient id="payment-card-gradient" x1="62" y1="132" x2="282" y2="252" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0CDBB5" />
          <stop offset="0.55" stopColor="#06C7A5" />
          <stop offset="1" stopColor="#00A98D" />
        </linearGradient>
        <filter id="payment-card-shadow" x="30" y="82" width="290" height="215" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="9" stdDeviation="9" floodColor="#002B24" floodOpacity="0.24" />
        </filter>
        <filter id="confirmation-shadow" x="233" y="77" width="78" height="78" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#003E34" floodOpacity="0.25" />
        </filter>
      </defs>

      <g className="payment-plastic" filter="url(#payment-card-shadow)">
        <rect x="55" y="117" width="236" height="141" rx="12" fill="url(#payment-card-gradient)" />

        <g transform="translate(76 166)">
          <rect width="31" height="25" rx="5" fill="#F6F8E9" />
          <path d="M10.4 0v25M20.7 0v25M0 8.3h10.4m10.3 0H31M0 16.7h10.4m10.3 0H31M10.4 12.5h10.3" stroke="#D1C692" strokeWidth="1.25" />
        </g>

        <g stroke="white" strokeWidth="2.7" strokeLinecap="round">
          <path d="M117 169c5 3.8 5 11.2 0 15" />
          <path d="M123 165c9 6.2 9 16.8 0 23" />
        </g>

        <g stroke="white" strokeWidth="3.1" strokeLinecap="round">
          <path d="M257 189c6 5 6 13 0 18" />
          <path d="M264 183c11 8 11 22 0 30" />
        </g>
      </g>

      <g className="payment-confirmation" filter="url(#confirmation-shadow)">
        <circle cx="272" cy="115" r="28" fill="#05B99D" />
        <circle cx="272" cy="115" r="27.5" stroke="#25D8BC" />
        <path d="m259.5 115.5 8 7.5 16.5-17" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}

function SecurityFeatureIcon({ type }: { type: string }) {
  if (type === "bolt") {
    return (
      <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true" className="size-[58%]">
        <path d="M18.1 2.5 6.6 18.1c-.7.9-.1 2.2 1.1 2.2h6.1l-1.1 9.2c-.2 1.4 1.7 2 2.4.8l10.4-16.1c.6-.9-.1-2.1-1.2-2.1h-5.7l1.9-8.6c.3-1.4-1.6-2.1-2.4-1Z" />
      </svg>
    );
  }

  if (type === "wifi") {
    return (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className="size-[62%]">
        <path d="M3.2 12.2a19.5 19.5 0 0 1 25.6 0M7.8 17a12.9 12.9 0 0 1 16.4 0M12.4 21.7a6.4 6.4 0 0 1 7.2 0" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" />
        <circle cx="16" cy="26" r="2.1" fill="currentColor" />
      </svg>
    );
  }

  if (type === "lock") {
    return (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className="size-[58%]">
        <rect x="7" y="13" width="18" height="15" rx="2.5" fill="currentColor" />
        <path d="M11 13V9a5 5 0 0 1 10 0v4" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
        <circle cx="16" cy="20" r="1.8" fill="#075046" />
        <path d="M16 21v3" stroke="#075046" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className="size-[62%]">
      <path d="M16 2.8 5.5 7v7.5c0 7 4.2 12 10.5 14.7 6.3-2.7 10.5-7.7 10.5-14.7V7L16 2.8Z" fill="currentColor" />
      <path d="M16 7.2v17.5c3.9-2.4 6.1-5.7 6.1-10.2V9.9L16 7.2Z" fill="#075046" />
    </svg>
  );
}

function SalesStatIcon({ type }: { type: string }) {
  if (type === "customers") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-5">
        <circle cx="9" cy="8" r="3" fill="currentColor" />
        <circle cx="17" cy="9" r="2.5" fill="currentColor" opacity=".8" />
        <path d="M3.5 18c.4-3.2 2.3-5 5.5-5s5.1 1.8 5.5 5H3.5Zm11.5 0c-.1-1.7-.7-3-1.8-4 3.9-1.3 6.7.3 7.3 4H15Z" fill="currentColor" />
      </svg>
    );
  }

  if (type === "growth") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-5">
        <rect x="3" y="12" width="3" height="8" rx="1" />
        <rect x="8.5" y="8" width="3" height="12" rx="1" />
        <rect x="14" y="3" width="3" height="17" rx="1" />
        <rect x="19.5" y="10" width="2" height="10" rx="1" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-5">
      <path d="M3 5h2l2 10h10.5l2-7H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="9" cy="19" r="1.5" fill="currentColor" />
      <circle cx="17" cy="19" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function BusinessTools() {
  return (
    <InViewReveal className="bg-white">
      <section id="pos-systems" aria-labelledby="business-tools-title" className="bg-white px-4 py-20 text-zinc-950 sm:px-6 lg:px-[clamp(5rem,8vw,10rem)] lg:py-24">
      <div className="mx-auto w-full">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center lg:gap-16">
          <div data-reveal="left">
            <EyebrowLabel className="mb-5 text-[#005f50]">
              Everything you need to run your business
            </EyebrowLabel>
            <h2 id="business-tools-title" className="max-w-[850px] text-[clamp(2.35rem,3.55vw,4.1rem)] font-semibold leading-[1.08] tracking-[-0.045em] text-balance">
              <span className="xl:whitespace-nowrap">Powerful POS Tools. Built</span>{" "}
              <span className="xl:block xl:whitespace-nowrap">Around Your Business.</span>
            </h2>
          </div>

          <p data-reveal="right" className="reveal-delay-1 max-w-[610px] text-sm leading-7 text-zinc-600 md:justify-self-end lg:text-[17px]">
            From taking payments and managing products to tracking performance and supporting your team, bring the essential tools for your business together in one simple, connected POS system.
          </p>
        </div>

        <div className="mt-12 grid gap-x-4 gap-y-9 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          <article data-reveal="card" className="tools-card tools-card-image reveal-delay-2">
            <div className="tools-card-shell relative aspect-[3/4] overflow-hidden rounded-2xl border border-zinc-200 bg-[#dffbf1]">
              <Image
                src="/Rectangle 10.png"
                alt="Flexible point-of-sale system for every business"
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="tools-image object-cover"
              />
            </div>
            <h3 className="mt-4 text-[clamp(0.78rem,1.05vw,1.05rem)] font-semibold">Built For Your Business</h3>
          </article>

          <article data-reveal="card" className="tools-card tools-card-sales reveal-delay-3">
            <div className="tools-card-shell flex aspect-[3/4] flex-col overflow-hidden rounded-2xl bg-[#003c33] px-2.5 pb-7 pt-5 text-white shadow-sm">
              <div className="flex min-h-0 flex-1 flex-col rounded-xl bg-[radial-gradient(circle_at_78%_10%,rgba(10,103,87,0.68),transparent_44%),linear-gradient(180deg,#06483e_0%,#05443a_100%)] px-[15px] pb-3 pt-6">
                <div className="sales-header flex items-start justify-between gap-3">
                  <p className="text-base font-semibold tracking-[-0.02em] text-white/95">Today&apos;s Sales</p>
                  <span className="-mt-1 inline-flex items-center gap-1.5 rounded-lg bg-[#0b5a4e] px-3 py-2 text-xs text-white/80">
                    This Week
                    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="size-3">
                      <path d="m4 6 4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>

                <div className="sales-total mt-3 flex items-end gap-2">
                  <p className={`${manrope.className} text-[clamp(2.35rem,3.2vw,3.05rem)] font-semibold leading-none tracking-[-0.045em]`}>$2,817</p>
                  <span className={`${manrope.className} mb-1 inline-flex items-center text-sm font-semibold text-[#08e6ba]`}>
                    <svg viewBox="0 0 16 18" fill="none" aria-hidden="true" className="mr-0.5 h-4 w-3">
                      <path d="M8 16V3m0 0L3.5 7.5M8 3l4.5 4.5" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    12%
                  </span>
                </div>

                <div aria-hidden="true" className="relative mt-auto h-[52%]">
                  <span className="absolute inset-x-0 bottom-[22px] border-b border-white/10" />
                  <div className="absolute inset-x-0 bottom-[22px] top-0 grid grid-cols-7 items-end gap-2">
                    {salesBars.map((bar) => (
                      <span key={bar.label} className="sales-bar-column flex w-[76%] max-w-6 justify-self-center overflow-hidden rounded-t-md bg-[#0a5a4e]" style={{ height: `${bar.height}%` }}>
                        <span
                          className="sales-bar-fill mt-auto block w-full rounded-t-md bg-gradient-to-b from-[#08edc0] to-[#02dbae]"
                          style={{ height: `${bar.fill}%`, transitionDelay: `${520 + salesBars.indexOf(bar) * 55}ms` }}
                        />
                      </span>
                    ))}
                  </div>
                  <div className="absolute inset-x-0 bottom-0 grid grid-cols-7 gap-2 text-center">
                    {salesBars.map((bar) => (
                      <span key={bar.label} className="text-[11px] text-white/65">{bar.label}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-3 grid h-[19%] shrink-0 grid-cols-3 gap-2.5">
                {salesStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="sales-stat flex min-w-0 flex-col items-center justify-center rounded-xl bg-[#06483e] px-2 text-center"
                    style={{ transitionDelay: `${760 + salesStats.indexOf(stat) * 85}ms` }}
                  >
                    <div className="flex items-center gap-1.5 text-[#08e6ba]">
                      <SalesStatIcon type={stat.icon} />
                      <span className={`${manrope.className} text-[clamp(1.1rem,1.62vw,1.38rem)] font-semibold leading-none text-white`}>{stat.value}</span>
                    </div>
                    <span className="mt-2 text-[11px] text-white/60">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <h3 className="mt-4 text-[clamp(0.78rem,1.05vw,1.05rem)] font-semibold">Real-Time Business Insights</h3>
          </article>

          <article data-reveal="card" className="tools-card tools-card-inventory reveal-delay-4">
            <div className="tools-card-shell relative aspect-[3/4] overflow-hidden rounded-2xl border border-zinc-200 bg-white">
              <div aria-hidden="true" className="inventory-back absolute bottom-[14%] left-[12%] right-[11%] top-[7%] rounded-2xl bg-[#4eddb7]" />
              <div aria-hidden="true" className="inventory-side absolute bottom-[14%] left-[3.2%] top-[17%] w-[78.5%] rounded-2xl bg-[#55deb9]" />

              <div className="inventory-panel absolute inset-y-[11%] left-[7%] right-[3%] overflow-hidden rounded-2xl border border-zinc-200/80 bg-white py-[4%] shadow-[0_14px_28px_rgba(24,64,54,0.07)]">
                <div className="inventory-header flex h-[14%] items-center justify-between pl-[6%] pr-[7%]">
                  <span className="text-[clamp(1.1rem,1.62vw,1.42rem)] font-semibold tracking-[-0.03em]">Products</span>
                  <span className="flex h-8 w-16 items-center justify-center rounded-lg bg-zinc-100 text-zinc-400">
                    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="size-[18px]">
                      <circle cx="8.5" cy="8.5" r="4.75" stroke="currentColor" strokeWidth="1.6" />
                      <path d="m12 12 4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                    </svg>
                  </span>
                </div>

                <div className="h-[86%] divide-y divide-zinc-100 px-[6%]">
                  {inventoryItems.map((item) => (
                    <div
                      key={item.name}
                      className="inventory-row flex h-1/4 items-center gap-4"
                      style={{ transitionDelay: `${500 + inventoryItems.indexOf(item) * 65}ms` }}
                    >
                      <span className="inventory-thumb relative flex aspect-square h-[76%] shrink-0 items-center justify-center overflow-hidden rounded-lg bg-zinc-100">
                        <Image
                          src={item.image}
                          alt=""
                          fill
                          sizes="64px"
                          className="object-contain p-1.5"
                        />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-[clamp(0.78rem,1.08vw,1rem)] font-semibold tracking-[-0.02em]">{item.name}</span>
                        <span className={`${manrope.className} mt-0.5 block text-[clamp(0.65rem,0.88vw,0.78rem)] text-zinc-400`}>{item.sku}</span>
                      </span>
                      <span className={`${manrope.className} inventory-stock flex h-10 min-w-11 items-center justify-center rounded-lg bg-[#c9faea] px-2 text-sm font-semibold text-[#008F74]`}>{item.stock}</span>
                      <svg viewBox="0 0 16 24" fill="none" aria-hidden="true" className="h-5 w-3 shrink-0 text-zinc-400">
                        <path d="m5 4 6 8-6 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <h3 className="mt-4 text-[clamp(0.78rem,1.05vw,1.05rem)] font-semibold">Simple Inventory Management</h3>
          </article>

          <article data-reveal="card" className="tools-card tools-card-payment reveal-delay-5">
            <div className="tools-card-shell relative aspect-[3/4] overflow-hidden rounded-2xl bg-[radial-gradient(circle_at_78%_5%,#075248_0%,#003f36_42%,#00372f_100%)] text-white">
              <div className="payment-notification absolute left-[4.5%] top-[12%] z-20 flex h-[16%] w-[66%] items-center gap-[2.5%] rounded-[13px] bg-[#f9fbfa] px-[7%] text-zinc-900 shadow-[0_7px_18px_rgba(0,31,26,0.14)]">
                <span className="flex aspect-square w-[17%] shrink-0 items-center justify-center rounded-full bg-[#08cfaa] text-white">
                  <CheckIcon className="size-[62%]" />
                </span>
                <span>
                  <span className="block whitespace-nowrap text-[clamp(0.65rem,1.02vw,1.15rem)] font-semibold leading-tight tracking-[-0.025em] 2xl:text-sm">Payment Successful</span>
                  <span className={`${manrope.className} mt-1 block whitespace-nowrap text-[clamp(0.52rem,0.78vw,0.9rem)] leading-none text-zinc-500 2xl:text-[12px]`}>Approved in 1.2s</span>
                </span>
              </div>

              <PaymentCardGraphic />

              <div className="absolute inset-x-[3%] top-[69%] grid grid-cols-4 gap-[4%]">
                {securityFeatures.map((feature) => (
                  <div
                    key={feature.icon}
                    className="payment-feature min-w-0 text-center"
                    style={{ transitionDelay: `${680 + securityFeatures.indexOf(feature) * 75}ms` }}
                  >
                    <span className="mx-auto flex aspect-square w-full items-center justify-center rounded-[11px] bg-[#075046] text-[#08e4c0]">
                      <SecurityFeatureIcon type={feature.icon} />
                    </span>
                    <span className="mt-[9%] block text-[clamp(0.5rem,0.76vw,0.9rem)] font-medium leading-[1.4] text-white/95 2xl:text-[12px]">
                      <span className="block whitespace-nowrap">{feature.lines[0]}</span>
                      <span className="block whitespace-nowrap">{feature.lines[1]}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <h3 className="mt-4 text-[clamp(0.78rem,1.05vw,1.05rem)] font-semibold">Fast, Secure &amp; Reliable</h3>
          </article>
        </div>
      </div>
      </section>
    </InViewReveal>
  );
}
