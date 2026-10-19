"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatedCta } from "@/components/animated-cta";
import { BrandLogo } from "./brand-logo";

const navItems = [
  { label: "Home", href: "/" },
  { label: "POS Systems", href: "/products" },
  { label: "Industries", href: "/industries" },
  { label: "Pricing", href: "/pricing" },
  { label: "About Us", href: "/about" },
  { label: "Support", href: "/support" },
];

const navigationLinkClasses =
  "relative py-2 text-base font-normal transition-colors hover:text-[#00C09C] after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-[#008F74] after:transition-transform hover:after:scale-x-100";

export function Navbar() {
  const pathname = usePathname();
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
            ? "h-20 rounded-none border-x-0 border-t-0 border-zinc-200/90 bg-white/95 shadow-[0_12px_35px_rgba(0,70,58,0.12)] lg:px-[3.1vw]"
            : "h-24 rounded-3xl border-white/5 bg-white/[0.15]"
        }`}
      >
        <div className={`origin-left transition-transform duration-500 ease-out ${isScrolled ? "scale-[0.82]" : "scale-100"}`}>
          <BrandLogo isScrolled={isScrolled} />
        </div>

        <nav aria-label="Main navigation" className="hidden items-center gap-[30px] xl:flex xl:gap-9">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`${navigationLinkClasses} ${
                pathname === item.href
                  ? "text-[#00C09C] after:scale-x-100"
                  : isScrolled
                    ? "text-zinc-700"
                    : "text-white/90"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <AnimatedCta
          href="/contact"
          icon="quote"
          tone={isScrolled ? "light" : "dark"}
          compact
          className={`hidden min-w-[210px] md:inline-flex ${isScrolled ? "h-10" : "h-[46px] min-w-[230px]"}`}
        >
          Get A Free POS Quote
        </AnimatedCta>

        <details className="group relative xl:hidden">
          <summary className={`flex size-10 cursor-pointer list-none items-center justify-center rounded-xl border transition-colors [&::-webkit-details-marker]:hidden ${
            isScrolled
              ? "border-zinc-300 text-zinc-800 hover:bg-zinc-100"
              : "border-white/20 text-white hover:bg-white/10"
          }`}>
            <span className="sr-only">Open navigation menu</span>
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-6">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </summary>

          <nav className={`absolute right-0 top-14 flex w-64 flex-col rounded-2xl border p-3 shadow-2xl backdrop-blur-xl ${
            isScrolled
              ? "border-zinc-200 bg-white/95"
              : "border-white/10 bg-zinc-950/95"
          }`}>
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} className={`rounded-xl px-4 py-3 text-lg font-normal hover:text-[#008F74] ${
                pathname === item.href
                  ? "bg-[#008F74]/10 text-[#00C09C]"
                  : isScrolled
                  ? "text-zinc-700 hover:bg-zinc-100"
                  : "text-white/90 hover:bg-white/10"
              }`}>
                {item.label}
              </Link>
            ))}
            <AnimatedCta href="/contact" icon="quote" tone={isScrolled ? "light" : "dark"} compact className="mt-2 w-full">
              Get A Free POS Quote
            </AnimatedCta>
          </nav>
        </details>
      </div>
    </header>
  );
}
