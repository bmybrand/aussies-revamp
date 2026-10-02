import Image from "next/image";
import Link from "next/link";
import { manrope } from "./eyebrow-label";
import { InViewReveal } from "./in-view-reveal";

const equipmentOptions = [
  {
    badge: "Buyout",
    title: "Own Your Equipment",
    description: "Purchase your POS hardware upfront and have full ownership of your equipment.",
    bestFor: ["Established Businesses", "Long-Term Use", "Businesses Wanting Ownership"],
  },
  {
    badge: "Lease",
    title: "Spread Your Payments",
    description: "Get the equipment you need with predictable monthly payments through an agreed lease arrangement.",
    bestFor: ["Businesses Managing Cash Flow", "Growing Companies", "New Locations"],
  },
  {
    badge: "Rental",
    title: "Flexible POS Rental",
    description: "Use professional POS equipment without purchasing hardware upfront.",
    bestFor: ["Temporary Businesses", "Events", "Businesses Wanting Flexibility"],
  },
];

const revealDelays = ["reveal-delay-2", "reveal-delay-3", "reveal-delay-4"];

export function EquipmentOptions() {
  return (
    <InViewReveal className="bg-[#006b59]">
      <section
        id="pricing"
        aria-labelledby="equipment-options-title"
        className="flex min-h-svh items-center overflow-hidden bg-[linear-gradient(180deg,#009279_0%,#00725f_52%,#005343_100%)] px-4 py-20 text-white sm:px-6 lg:px-[clamp(5rem,8vw,10rem)] lg:py-24"
      >
        <div className="mx-auto w-full">
          <div className="flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
            <div data-reveal="left">
              <p className={`${manrope.className} mb-5 text-xs font-medium uppercase tracking-[0.08em] text-white/90 sm:text-base`}>
                Flexible equipment options
              </p>
              <h2
                id="equipment-options-title"
                className="max-w-[660px] text-[clamp(2.15rem,3.3vw,3.8rem)] font-semibold leading-[1.08] tracking-[-0.045em] text-balance"
              >
                Get Your POS Your Way
              </h2>
            </div>

            <div className="relative z-10 w-fit shrink-0">
              <Link
                href="#quote"
                className="inline-flex min-h-[53px] w-fit items-center justify-center rounded-lg bg-white px-6 text-base font-medium text-[#008F74] shadow-lg shadow-black/10 transition-colors duration-500 hover:bg-[#008F74] hover:text-white"
              >
                Compare POS Options
              </Link>
            </div>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 2xl:grid-cols-3">
            {equipmentOptions.map((option, index) => (
              <article
                key={option.badge}
                data-reveal="card"
                className={`equipment-option ${revealDelays[index]}`}
              >
                <div className="equipment-card-shell relative aspect-[1/1.245] overflow-hidden rounded-2xl bg-[#fbfbfa] px-7 pb-8 pt-8 text-zinc-950 shadow-[0_18px_45px_rgba(0,47,39,0.12)] lg:min-h-[500px] 2xl:min-h-0">
                  <Image
                    src="/Group.png"
                    alt=""
                    width={2400}
                    height={1656}
                    className="equipment-card-watermark pointer-events-none absolute -bottom-[24%] -left-[24%] w-[114%] max-w-none opacity-[0.12]"
                    sizes="(min-width: 1024px) 34vw, 100vw"
                  />

                  <div className="equipment-card-content relative z-10">
                    <span className="equipment-card-badge inline-flex h-7 min-w-20 items-center justify-center rounded-full bg-[linear-gradient(90deg,#005343_0%,#00977d_100%)] px-4 text-xs font-semibold uppercase leading-none tracking-[0.07em] text-white shadow-sm">
                      {option.badge}
                    </span>

                    <h3 className="equipment-card-title mt-4 text-[clamp(1.5rem,2vw,2rem)] font-semibold leading-[1.15] tracking-[-0.035em]">
                      {option.title}
                    </h3>

                    <p className="equipment-card-description mt-3 max-w-[94%] text-sm leading-6 text-zinc-500 lg:text-[15px]">
                      {option.description}
                    </p>

                    <div className="equipment-card-list mt-8 text-sm leading-7 text-zinc-500 lg:text-[15px]">
                      <p>Best For:</p>
                      <ul>
                        {option.bestFor.map((item) => (
                          <li key={item} className="flex items-start gap-1.5">
                            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="mt-1.5 size-3 shrink-0 text-zinc-500">
                              <path d="m3 8 3 3 7-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </InViewReveal>
  );
}
