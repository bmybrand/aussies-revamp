import Link from "next/link";
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
  "relative py-2 text-base font-normal transition-colors hover:text-[#FCFF6A] after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-[#FCFF6A] after:transition-transform hover:after:scale-x-100";

export function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 px-5 pt-4 sm:px-8 sm:pt-6 lg:px-[3.1vw]">
      <div className="mx-auto flex h-24 w-full items-center justify-between rounded-3xl border border-white/5 bg-white/[0.15] px-5 shadow-2xl shadow-black/20 backdrop-blur-xl sm:px-7">
        <BrandLogo />

        <nav aria-label="Main navigation" className="hidden items-center gap-[30px] xl:flex xl:gap-9">
          {navItems.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              className={`${navigationLinkClasses} ${
                index === 0
                  ? "text-[#FCFF6A] after:scale-x-100"
                  : "text-white/90"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#quote"
          className="hidden h-[46px] min-w-[230px] items-center justify-center rounded-[9px] bg-white px-6 text-[15px] font-medium text-zinc-950 shadow-sm transition-colors hover:bg-[#FCFF6A] md:inline-flex"
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
              <Link key={item.label} href={item.href} className="rounded-xl px-4 py-3 text-lg font-normal text-white/90 hover:bg-white/10 hover:text-[#FCFF6A]">
                {item.label}
              </Link>
            ))}
            <Link href="#quote" className="mt-2 rounded-xl bg-[#FCFF6A] px-4 py-3 text-center text-[17px] font-medium text-zinc-950 hover:bg-[#F1F45F]">
              Get A Free POS Quote
            </Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
