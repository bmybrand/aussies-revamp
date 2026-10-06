import Image from "next/image";
import Link from "next/link";

const businessLinks = [
  {
    label: "Food & Beverage",
    description: "Cafés, restaurants, takeaways & hospitality",
    href: "/restaurants",
  },
  {
    label: "Retail",
    description: "Shops, boutiques & specialty stores",
    href: "/retail",
  },
  {
    label: "Services",
    description: "Salons, professional & service businesses",
    href: "/services",
  },
];

const exploreLinks = [
  { label: "POS Systems", href: "/products" },
  { label: "Hardware", href: "/hardware" },
  { label: "Payment Options", href: "/payment-options" },
  { label: "Buy, Lease & Rent", href: "/pricing" },
  { label: "Business Tools", href: "/business-tools" },
  { label: "FAQs", href: "/support#faq" },
];

const contactLinks = [
  { label: "Get a POS Quote", href: "/contact#request-a-quote" },
  { label: "Find Your POS Setup", href: "/industries" },
  { label: "Contact Sales", href: "/contact" },
  { label: "Request a Demonstration", href: "/contact#book-a-demonstration" },
  { label: "Support", href: "/support" },
];

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/", icon: "/Symbol.svg?v=2" },
  { label: "X", href: "https://x.com/", icon: "/Symbol-1.svg?v=2" },
  { label: "LinkedIn", href: "https://www.linkedin.com/", icon: "/Symbol-2.svg?v=2" },
  { label: "Instagram", href: "https://www.instagram.com/", icon: "/Symbol-3.svg?v=2" },
  { label: "YouTube", href: "https://www.youtube.com/", icon: "/yt.svg?v=2" },
] as const;

function AssuranceIcon({ type }: { type: "secure" | "flexible" | "support" }) {
  if (type === "flexible") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-[18px] shrink-0">
        <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M3 10h18" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    );
  }

  if (type === "support") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-[18px] shrink-0">
        <path d="M5 18v-2a7 7 0 0 1 14 0v2M7 17H5a2 2 0 0 0-2 2v1h4v-3Zm10 0h2a2 2 0 0 1 2 2v1h-4v-3ZM9 21h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-[18px] shrink-0">
      <path d="m12 3 7 3v5c0 4.5-2.7 7.8-7 10-4.3-2.2-7-5.5-7-10V6l7-3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer id="contact" className="border-t border-zinc-200/80 bg-[#fdfdfc] text-zinc-700">
      <div className="px-6 sm:px-10 lg:px-[clamp(5rem,8vw,10rem)]">
        <div className="grid gap-12 py-14 sm:py-16 lg:grid-cols-[1.35fr_1.1fr_0.65fr_0.7fr] lg:gap-20 lg:py-16">
          <div className="max-w-[330px]">
            <Link href="/" aria-label="Aussie's POS Solution home" className="inline-flex">
              <Image
                src="/aussies-logo-scrolled-text-black.png"
                alt="Aussie's POS Solution"
                width={3744}
                height={790}
                sizes="190px"
                className="h-auto w-[190px] object-contain object-left"
              />
            </Link>
            <p className="mt-5 max-w-[330px] text-[15px] leading-7 text-zinc-500">
              Helping Australian businesses find the right POS setup, payment arrangement and business tools for the way they work.
            </p>
          </div>

          <nav aria-label="Business types">
            <h3 className="relative pb-3 text-[20px] font-semibold text-zinc-950 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-8 after:bg-[#008F74]">Business Types</h3>
            <div className="mt-4 space-y-4">
              {businessLinks.map((link) => (
                <Link key={link.label} href={link.href} className="group block">
                  <span className="block text-[15px] font-medium text-zinc-800 transition-colors group-hover:text-[#008F74]">{link.label}</span>
                  <span className="mt-1 block text-[13px] leading-5 text-zinc-500">{link.description}</span>
                </Link>
              ))}
            </div>
          </nav>

          <nav aria-label="Explore">
            <h3 className="relative pb-3 text-[20px] font-semibold text-zinc-950 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-8 after:bg-[#008F74]">Explore</h3>
            <div className="mt-4 flex flex-col gap-3">
              {exploreLinks.map((link) => (
                <Link key={link.label} href={link.href} className="text-[14px] text-zinc-500 transition-colors hover:text-[#008F74]">
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          <nav aria-label="Talk to Aussie's">
            <h3 className="relative pb-3 text-[20px] font-semibold text-zinc-950 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-8 after:bg-[#008F74]">Talk To Aussie&apos;s</h3>
            <div className="mt-4 flex flex-col gap-3">
              {contactLinks.map((link) => (
                <Link key={link.label} href={link.href} className="text-[14px] text-zinc-500 transition-colors hover:text-[#008F74]">
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>

      <div className="border-y border-zinc-200/80 px-6 sm:px-10 lg:px-[clamp(5rem,8vw,10rem)]">
        <div className="grid gap-5 py-5 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
          <p className="text-[14px] text-zinc-500">Payments, hardware and support – connected.</p>

          <nav aria-label="Footer policies" className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[13px] text-zinc-500">
            <Link href="/privacy-policy" className="hover:text-[#008F74]">Privacy Policy</Link>
            <span aria-hidden="true">|</span>
            <Link href="/terms" className="hover:text-[#008F74]">Terms &amp; Conditions</Link>
            <span aria-hidden="true">|</span>
            <Link href="/cookie-policy" className="hover:text-[#008F74]">Cookie Policy</Link>
          </nav>

          <div className="flex items-center gap-2 sm:justify-end" aria-label="Social media links">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="group flex size-8 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-500 transition-colors hover:border-[#008F74] hover:bg-[#008F74]"
              >
                <span
                  aria-hidden="true"
                  className="h-4 w-[18px] bg-zinc-500 transition-colors [mask-mode:alpha] [mask-position:center] [mask-repeat:no-repeat] [mask-size:contain] group-hover:bg-white"
                  style={{
                    maskImage: `url("${social.icon}")`,
                    WebkitMaskImage: `url("${social.icon}")`,
                  }}
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="px-6 sm:px-10 lg:px-[clamp(5rem,8vw,10rem)]">
        <div className="grid gap-10 py-10 sm:py-12 lg:grid-cols-[1fr_auto] lg:items-start">
          <div className="max-w-[720px]">
            <p className="text-[14px] font-semibold text-zinc-900">© 2026 Aussie&apos;s POS Solution. All rights reserved.</p>
            <p className="mt-4 text-[13px] leading-6 text-zinc-500">
              Product, pricing, features and service availability may vary by plan, hardware, provider and location. Images and interface examples are shown for demonstration purposes only.
            </p>
          </div>

          <ul className="grid gap-4 text-[14px] text-zinc-500 sm:grid-cols-3 lg:grid-cols-1">
            <li className="flex items-center gap-3"><span className="text-[#008F74]"><AssuranceIcon type="secure" /></span>Secure Payments</li>
            <li className="flex items-center gap-3"><span className="text-[#008F74]"><AssuranceIcon type="flexible" /></span>Flexible POS Options</li>
            <li className="flex items-center gap-3"><span className="text-[#008F74]"><AssuranceIcon type="support" /></span>Australian Business Support</li>
          </ul>
        </div>
      </div>

      <div aria-hidden="true" className="overflow-hidden px-4 sm:px-8 lg:px-[clamp(4rem,7vw,8rem)]">
        <Image
          src="/Aussie's POS.svg"
          alt=""
          width={1603}
          height={198}
          sizes="100vw"
          className="h-auto w-full opacity-30 [mask-image:linear-gradient(to_bottom,black_0%,black_58%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_58%,transparent_100%)]"
        />
      </div>
    </footer>
  );
}
