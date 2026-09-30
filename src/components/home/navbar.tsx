"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BrandLogo } from "./brand-logo";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "POS Systems", href: "#pos-systems" },
  { label: "Industries", href: "#industries" },
  { label: "Pricing", href: "#pricing" },
  { label: "About Us", href: "#about" },
  { label: "Support", href: "#support" },
];

const navigationLinkClasses =
  "relative py-2 text-base font-normal transition-colors hover:text-[#008F74] after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-[#008F74] after:transition-transform hover:after:scale-x-100";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    let animationFrame = 0;
    let updateQueued = false;

    function updateNavbar() {
      const currentScrollY = Math.max(window.scrollY, 0);
      const movement = currentScrollY - lastScrollY.current;

      setIsScrolled(currentScrollY > 24);

      if (currentScrollY <= 24) {
        setIsVisible(true);
      } else if (movement > 4 && currentScrollY > 120) {
        setIsVisible(false);
      } else if (movement < -4) {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
      updateQueued = false;
    }

    function handleScroll() {
      if (!updateQueued) {
        animationFrame = window.requestAnimationFrame(updateNavbar);
        updateQueued = true;
      }
    }

    lastScrollY.current = window.scrollY;
    updateNavbar();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--sticky-nav-offset",
      isVisible ? "80px" : "0px",
    );

    return () => {
      document.documentElement.style.removeProperty("--sticky-nav-offset");
    };
  }, [isVisible]);

  return (
    <header
      style={{
        transform: isVisible
          ? "translateY(0)"
          : "translateY(calc(-100% - 2px))",
      }}
      className={`fixed inset-x-0 top-0 z-50 transition-[padding,transform] duration-[420ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] will-change-[padding,transform] ${
        isVisible ? "pointer-events-auto" : "pointer-events-none"
      } ${
        isScrolled
          ? "px-0 pt-0"
          : "px-5 pt-4 sm:px-8 sm:pt-6 lg:px-[3.1vw]"
      }`}
    >
      <div
        className={`mx-auto flex w-full items-center justify-between border px-5 shadow-2xl shadow-black/20 backdrop-blur-xl transition-[height,border-radius,background-color,border-color,padding] duration-500 ease-out sm:px-7 ${
          isScrolled
            ? "h-20 rounded-none border-x-0 border-t-0 border-[#008F74]/30 bg-[#062A24]/95 shadow-[0_12px_35px_rgba(0,0,0,0.28)] lg:px-[3.1vw]"
            : "h-24 rounded-3xl border-white/5 bg-white/[0.15]"
        }`}
      >
        <div className={`origin-left transition-transform duration-500 ease-out ${isScrolled ? "scale-[0.82]" : "scale-100"}`}>
          <BrandLogo />
        </div>

        <nav aria-label="Main navigation" className="hidden items-center gap-[30px] xl:flex xl:gap-9">
          {navItems.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              className={`${navigationLinkClasses} ${
                index === 0
                  ? "text-[#008F74] after:scale-x-100"
                  : "text-white/90"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#quote"
          className={`hidden items-center justify-center rounded-[9px] bg-white px-6 text-[15px] font-medium text-zinc-950 shadow-sm transition-[height,min-width,background-color,color] duration-500 hover:bg-[#008F74] hover:text-white md:inline-flex ${
            isScrolled ? "h-10 min-w-[210px]" : "h-[46px] min-w-[230px]"
          }`}
        >
          Get A Free POS Quote
        </Link>

        <details className="group relative xl:hidden">
          <summary className="flex size-10 cursor-pointer list-none items-center justify-center rounded-xl border border-white/20 text-white transition-colors hover:bg-white/10 [&::-webkit-details-marker]:hidden">
            <span className="sr-only">Open navigation menu</span>
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-6">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </summary>

          <nav className="absolute right-0 top-14 flex w-64 flex-col rounded-2xl border border-white/10 bg-zinc-950/95 p-3 shadow-2xl backdrop-blur-xl">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} className="rounded-xl px-4 py-3 text-lg font-normal text-white/90 hover:bg-white/10 hover:text-[#008F74]">
                {item.label}
              </Link>
            ))}
            <Link href="#quote" className="mt-2 rounded-xl bg-[#008F74] px-4 py-3 text-center text-[17px] font-medium text-white hover:bg-[#005343]">
              Get A Free POS Quote
            </Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
