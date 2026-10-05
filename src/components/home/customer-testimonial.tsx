import Image from "next/image";
import { InViewReveal } from "./in-view-reveal";

function QuoteMark() {
  return (
    <svg viewBox="0 0 52 40" fill="currentColor" aria-hidden="true" className="testimonial-quote-mark h-10 w-[52px] text-[#00b896]">
      <path d="M4 4h18v15H12c0 6 3.5 10.5 9 13l-4.5 5C8 33 4 26.5 4 17V4Zm27 0h18v15H39c0 6 3.5 10.5 9 13l-4.5 5C35 33 31 26.5 31 17V4Z" />
    </svg>
  );
}

export function CustomerTestimonial() {
  return (
    <InViewReveal className="bg-zinc-950">
      <section
        aria-labelledby="customer-testimonial-quote"
        className="relative isolate flex min-h-svh overflow-hidden text-white"
      >
        <Image
          data-reveal="media"
          src="/showcase/restaurant-pos.png"
          alt="Point-of-sale terminal on a restaurant counter"
          fill
          sizes="100vw"
          className="testimonial-media -z-30 object-cover object-center"
        />
        <div aria-hidden="true" className="absolute inset-0 -z-20 bg-black/25" />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(2,18,15,0.64)_0%,rgba(2,18,15,0.48)_42%,rgba(2,18,15,0.18)_72%,rgba(2,18,15,0.3)_100%)]"
        />

        <div className="mx-auto flex min-h-svh w-[calc(100%-2rem)] flex-col justify-between py-20 sm:w-[calc(100%-3rem)] lg:w-[calc(100%-clamp(10rem,16vw,20rem))] lg:py-24">
          <div data-reveal="left" className="testimonial-quote-block max-w-[760px]">
            <QuoteMark />
            <blockquote
              id="customer-testimonial-quote"
              className="testimonial-quote mt-6 text-[clamp(1.72rem,2.8vw,3rem)] font-semibold leading-[1.35] tracking-[-0.035em] text-balance"
            >
              We Wanted Something Simple For The Team But Powerful Enough To Handle The Busy Periods. The Setup Gives Us A Much Clearer View Of Sales And Makes Taking Payments Much Easier.
            </blockquote>
          </div>

          <div data-reveal="left" className="testimonial-owner reveal-delay-2 w-fit rounded-lg bg-[#00483d]/95 p-2.5 pr-5 shadow-xl backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <span className="flex size-11 items-center justify-center overflow-hidden rounded-md bg-[linear-gradient(145deg,#d9f3ec,#72bea9)] text-[#005343]">
                <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className="size-8">
                  <circle cx="16" cy="11" r="6" fill="currentColor" opacity=".8" />
                  <path d="M5 29c.7-7.5 4.4-11 11-11s10.3 3.5 11 11H5Z" fill="currentColor" />
                </svg>
              </span>
              <span>
                <span className="block text-sm font-medium text-white">Café / Restaurant Owner</span>
                <span className="mt-0.5 block text-[12px] text-[#54d8bd]">Aussie&apos;s POS customer</span>
              </span>
            </div>
          </div>
        </div>
      </section>
    </InViewReveal>
  );
}
