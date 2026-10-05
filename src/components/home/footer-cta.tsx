import Image from "next/image";
import Link from "next/link";
import { InViewReveal } from "./in-view-reveal";

export function FooterCta() {
  return (
    <InViewReveal>
      <section
        id="quote"
        aria-labelledby="footer-cta-title"
        className="relative isolate overflow-hidden bg-[linear-gradient(to_bottom,#008F74_0%,#005847_100%)] text-white"
      >
        <div className="relative mx-auto min-h-[430px] w-[calc(100%-2rem)] sm:w-[calc(100%-3rem)] md:min-h-[560px] lg:min-h-[674px] lg:w-[calc(100%-clamp(10rem,16vw,20rem))]">
          <div data-reveal="left" className="relative z-10 max-w-[1000px] py-16 sm:py-20 md:w-[72%] md:py-0 md:pt-[140px] lg:pt-[174px]">
            <h2
              id="footer-cta-title"
              className="text-[clamp(2.25rem,2.75vw,46px)] font-semibold leading-[1.08] tracking-[-0.04em] text-balance lg:whitespace-nowrap"
            >
              Ready To Find Your Perfect POS Solution?
            </h2>

            <p className="mt-5 max-w-[670px] text-[15px] leading-6 text-white/90 sm:text-[17px]">
              Whether you&apos;re starting a new business, upgrading your current system, or expanding locations, Aussie&apos;s POS Solution can help you find the right equipment and payment setup.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-white px-6 text-[15px] font-semibold text-[#007d69] shadow-sm transition-colors hover:bg-[#005343] hover:text-white"
              >
                Get Your Free Quote
              </Link>
              <Link
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/85 bg-transparent px-6 text-[15px] font-medium text-white transition-colors hover:bg-white hover:text-[#007d69]"
              >
                Speak With A POS Specialist
              </Link>
            </div>
          </div>

          <Image
            src="/Modern Clover POS Hardware Set 1.png"
            alt="Modern Clover point-of-sale hardware set"
            width={977}
            height={605}
            sizes="(min-width: 768px) 62vw, 135vw"
            className="relative -mb-[24%] ml-auto mt-2 h-auto w-[135%] max-w-none translate-x-[24%] object-contain object-bottom md:absolute md:-right-6 md:bottom-0 md:mb-0 md:mt-0 md:h-[440px] md:w-auto md:translate-x-0 lg:right-[calc(clamp(5rem,8vw,10rem)*-1)] lg:h-[526px]"
          />
        </div>
      </section>
    </InViewReveal>
  );
}
