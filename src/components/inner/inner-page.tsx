import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/home/footer";
import { FooterCta } from "@/components/home/footer-cta";
import { InViewReveal } from "@/components/home/in-view-reveal";
import { Navbar } from "@/components/home/navbar";

export type InnerPageData = {
  variant?: "restaurants" | "retail" | "services" | "healthcare" | "products" | "resources" | "general";
  eyebrow: string;
  title: string;
  description: string;
  heroImage: string;
  heroAlt: string;
  metrics: { value: string; label: string }[];
  sectionEyebrow: string;
  sectionTitle: string;
  sectionIntro: string;
  features: { title: string; text: string }[];
  journey: {
    eyebrow: string;
    title: string;
    text: string;
    points: string[];
    image: string;
    imageAlt: string;
  };
  capabilities: { title: string; text: string }[];
  quote?: { text: string; name: string; role: string };
  faqs: { question: string; answer: string }[];
};

type SectionName = "features" | "journey" | "capabilities" | "quote" | "faq";

const sectionOrders: Record<NonNullable<InnerPageData["variant"]>, SectionName[]> = {
  restaurants: ["features", "journey", "capabilities", "quote", "faq"],
  services: ["journey", "features", "quote", "capabilities", "faq"],
  retail: ["features", "capabilities", "journey", "faq", "quote"],
  healthcare: ["journey", "capabilities", "features", "faq", "quote"],
  products: ["features", "journey", "quote", "capabilities", "faq"],
  resources: ["faq", "features", "journey", "capabilities", "quote"],
  general: ["features", "journey", "capabilities", "quote", "faq"],
};

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-5">
      <path d="M5 12h13m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FeatureIcon({ index }: { index: number }) {
  const paths = [
    <path key="one" d="M5 19V9l7-4 7 4v10M9 19v-6h6v6M3 21h18" />,
    <path key="two" d="M4 6h16v12H4zM4 10h16M8 14h4" />,
    <path key="three" d="M5 19V9m5 10V5m5 14v-7m5 7V3M3 21h19" />,
    <path key="four" d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm8 1a3 3 0 1 0 0-6M2 21c0-4.5 2-7 6-7s6 2.5 6 7m1-6c4 0 6 2 6 6" />,
    <path key="five" d="M5 4h14v16H5zM8 8h8m-8 4h8m-8 4h5" />,
    <path key="six" d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8m0-12.8L5.6 18.4" />,
  ];

  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-7 stroke-current [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.5]">
      {paths[index % paths.length]}
    </svg>
  );
}

function PageSignature({ variant = "general" }: { variant?: InnerPageData["variant"] }) {
  if (variant === "restaurants") {
    return (
      <section className="bg-white px-5 py-20 sm:px-10 lg:px-[clamp(5rem,8vw,10rem)] lg:py-28">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#008F74]">A Service Flow That Stays In Motion</p>
        <h2 className="mt-4 max-w-[900px] text-[clamp(2.5rem,4.5vw,4.7rem)] font-semibold leading-none tracking-[-0.055em]">One Order. Four Connected Moments.</h2>
        <div className="relative mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 before:absolute before:left-[12.5%] before:right-[12.5%] before:top-12 before:hidden before:h-px before:bg-[#b9ddd5] lg:before:block">
          {["Guest Orders", "Team Confirms", "Kitchen Prepares", "Payment Closes"].map((item, index) => (
            <div key={item} className="relative z-10 flex flex-col items-center gap-5 text-center">
              <span className="grid size-24 place-items-center rounded-full border-2 border-[#b9ddd5] bg-white text-3xl font-semibold text-[#008F74]">0{index + 1}</span>
              <strong className="text-lg text-[#17352e]">{item}</strong>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (variant === "services") {
    return (
      <section className="grid gap-12 bg-[linear-gradient(135deg,#e7f7f2,#fbfdfc)] px-5 py-20 sm:px-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-24 lg:px-[clamp(5rem,8vw,10rem)] lg:py-28">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#008F74]">Today, Organized</p>
          <h2 className="mt-4 text-[clamp(2.5rem,4.5vw,4.7rem)] font-semibold leading-none tracking-[-0.055em]">See The Whole Service Day At A Glance</h2>
          <p className="mt-6 max-w-[570px] text-lg leading-8 text-zinc-600">Appointments, team availability, customer context and payment status stay close together.</p>
        </div>
        <div className="overflow-hidden rounded-3xl border border-[#005343]/10 bg-white p-4 shadow-[0_28px_70px_rgba(0,83,67,0.12)]">
          {[["09:00", "Consultation", "Confirmed"], ["10:30", "Follow-up", "Arrived"], ["13:15", "New booking", "Paid"], ["15:00", "Membership", "Confirmed"]].map((row) => (
            <div key={row[0]} className="grid min-h-20 grid-cols-[70px_1fr_auto] items-center gap-4 border-b border-zinc-100 px-4 last:border-0">
              <time className="text-sm font-semibold text-[#008F74]">{row[0]}</time>
              <span><strong className="block text-[#17352e]">{row[1]}</strong><small className="mt-1 block text-zinc-500">{row[2]}</small></span>
              <i className="size-2.5 rounded-full bg-[#64e0c4] shadow-[0_0_0_6px_rgba(100,224,196,0.15)]" />
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (variant === "retail") {
    return (
      <section className="grid gap-12 bg-[#161918] px-5 py-20 text-white sm:px-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-24 lg:px-[clamp(5rem,8vw,10rem)] lg:py-28">
        <div><p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#64e0c4]">Live Inventory Pulse</p><h2 className="mt-4 text-[clamp(2.5rem,4.5vw,4.7rem)] font-semibold leading-none tracking-[-0.055em]">Know What Is Moving Before The Shelf Looks Empty</h2><p className="mt-6 text-lg leading-8 text-white/65">Connect each checkout with the product picture your team uses to replenish and plan.</p></div>
        <div className="rounded-3xl border border-white/10 bg-[#242827] p-5 shadow-2xl">
          <div className="grid grid-cols-[1fr_70px_70px] px-4 pb-3 text-xs uppercase tracking-[0.12em] text-white/40"><span>Product</span><span>Stock</span><span>Trend</span></div>
          {[["Coastal Tee", "42", "+18%"], ["Canvas Carryall", "16", "+9%"], ["Everyday Cap", "8", "Low"], ["Studio Bottle", "31", "+12%"]].map((row) => <div key={row[0]} className="grid min-h-20 grid-cols-[1fr_70px_70px] items-center border-t border-white/10 px-4"><strong>{row[0]}</strong><span className="text-white/70">{row[1]}</span><b className="text-[#64e0c4]">{row[2]}</b></div>)}
        </div>
      </section>
    );
  }

  if (variant === "healthcare") {
    return (
      <section className="grid gap-14 bg-[#eff9f6] px-5 py-20 sm:px-10 lg:grid-cols-2 lg:items-center lg:px-[clamp(5rem,8vw,10rem)] lg:py-28">
        <div className="relative mx-auto grid aspect-square w-full max-w-[470px] place-items-center">
          {["inset-[7%]", "inset-[20%]", "inset-[34%]"].map((position) => <i key={position} className={`absolute ${position} rounded-full border border-[#008F74]/20`} />)}
          <strong className="relative z-10 grid size-32 place-items-center rounded-full bg-[#005343] text-center text-2xl font-semibold leading-none text-white">Clear<br />Checkout</strong>
          <span className="absolute left-[34%] top-[3%] rounded-full border border-[#008F74]/15 bg-white px-4 py-2 text-sm text-[#005343] shadow-lg">01 Visit</span>
          <span className="absolute bottom-[22%] right-0 rounded-full border border-[#008F74]/15 bg-white px-4 py-2 text-sm text-[#005343] shadow-lg">02 Review</span>
          <span className="absolute bottom-[15%] left-0 rounded-full border border-[#008F74]/15 bg-white px-4 py-2 text-sm text-[#005343] shadow-lg">03 Pay</span>
        </div>
        <div><p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#008F74]">A Calmer Final Step</p><h2 className="mt-4 text-[clamp(2.5rem,4.5vw,4.7rem)] font-semibold leading-none tracking-[-0.055em] text-[#17352e]">Designed To Reduce Friction Around Payment</h2><p className="mt-6 max-w-[600px] text-lg leading-8 text-zinc-600">Keep the experience clear for patients and give administrative teams a dependable view of what happens next.</p></div>
      </section>
    );
  }

  if (variant === "products") {
    return (
      <section
        className="grid min-h-[650px] gap-14 bg-[#0f1412] px-5 py-20 text-white sm:px-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center lg:px-[clamp(5rem,8vw,10rem)] lg:py-24"
        style={{ backgroundImage: "radial-gradient(circle at 75% 50%, rgba(100, 224, 196, 0.16), transparent 34%)" }}
      >
        <div><p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#64e0c4]">Build Your Setup</p><h2 className="mt-4 text-[clamp(2.5rem,4.5vw,4.7rem)] font-semibold leading-none tracking-[-0.055em]">One Platform. Different Forms.</h2><p className="mt-6 text-lg leading-8 text-white/65">Choose devices by role, location and transaction style—then connect them into one operating view.</p></div>
        <div className="flex min-h-[340px] items-end justify-center gap-5" aria-label="Aussie's device family">
          <i className="h-28 w-20 -rotate-6 rounded-[22px] border-8 border-zinc-200 bg-[#16372f] shadow-2xl" />
          <i className="h-60 w-24 rotate-3 rounded-2xl border-8 border-zinc-200 bg-[#16372f] shadow-2xl" />
          <i className="h-40 w-44 -rotate-2 rounded-2xl border-8 border-zinc-200 bg-[#16372f] shadow-2xl" />
          <i className="h-44 w-52 rotate-2 rounded-2xl border-8 border-zinc-200 bg-[#16372f] shadow-2xl" />
        </div>
      </section>
    );
  }

  if (variant === "resources") {
    return (
      <section className="grid gap-12 bg-white px-5 py-20 sm:px-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24 lg:px-[clamp(5rem,8vw,10rem)] lg:py-28">
        <div><p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#008F74]">Browse By Objective</p><h2 className="mt-4 text-[clamp(2.5rem,4.5vw,4.7rem)] font-semibold leading-none tracking-[-0.055em]">Start With The Decision In Front Of You</h2></div>
        <div className="border-t border-zinc-200">
          {[["01", "Choose A System", "Buying Guides"], ["02", "Prepare Your Team", "Setup Playbooks"], ["03", "Improve Operations", "Business Guides"], ["04", "Solve A Problem", "Help Centre"]].map((item) => <Link href="#features" key={item[0]} className="grid min-h-24 grid-cols-[46px_1fr_auto] items-center gap-4 border-b border-zinc-200 px-2 transition-colors hover:bg-[#eff8f5] hover:text-[#008F74]"><span className="text-2xl font-semibold text-[#008F74]">{item[0]}</span><strong className="text-lg">{item[1]}</strong><small className="hidden text-zinc-500 sm:block">{item[2]}</small></Link>)}
        </div>
      </section>
    );
  }

  return null;
}

export function InnerPage({ data }: { data: InnerPageData }) {
  const variant = data.variant ?? "general";
  const sectionOrder = (section: SectionName) => sectionOrders[variant].indexOf(section);

  return (
    <main className="overflow-x-clip bg-white text-zinc-950">
      <Navbar />

      <section className="relative isolate flex min-h-[760px] items-end overflow-hidden px-5 pb-20 pt-36 text-white sm:px-10 lg:min-h-[820px] lg:px-[clamp(5rem,8vw,10rem)] lg:pb-24">
        <Image src={data.heroImage} alt={data.heroAlt} fill priority sizes="100vw" className="-z-20 object-cover" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(0,35,29,0.96)_0%,rgba(0,48,40,0.78)_43%,rgba(0,29,24,0.2)_78%),linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.55))]" />

        <div className="w-full max-w-[1240px]">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.15em] text-[#62dec3]">{data.eyebrow}</p>
          <h1 className="max-w-[1220px] text-[clamp(3.05rem,5.15vw,5.8rem)] font-semibold leading-[0.96] tracking-[-0.055em] lg:text-balance">{data.title}</h1>
          <p className="mt-7 max-w-[700px] text-[17px] leading-7 text-white/82 sm:text-lg">{data.description}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/contact" className="inline-flex min-h-13 items-center gap-3 rounded-lg bg-[#008F74] px-6 text-[15px] font-semibold text-white transition-colors hover:bg-[#005343]">
              Talk To Our Team <ArrowIcon />
            </Link>
            <Link href="/products" className="inline-flex min-h-13 items-center gap-3 rounded-lg border border-white/70 bg-black/15 px-6 text-[15px] font-medium text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-[#005343]">
              Explore Products <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      <section aria-label="Solution highlights" className="grid bg-[#008F74] text-white sm:grid-cols-3 lg:px-[clamp(5rem,8vw,10rem)]">
        {data.metrics.map((metric) => (
          <div key={metric.label} className="flex min-h-32 flex-col items-center justify-center border-b border-white/20 px-5 text-center sm:border-b-0 sm:border-r last:border-0">
            <strong className="text-[clamp(1.8rem,2.5vw,2.5rem)] font-semibold leading-none tracking-[-0.04em]">{metric.value}</strong>
            <span className="mt-2 text-sm text-white/75">{metric.label}</span>
          </div>
        ))}
      </section>

      <PageSignature variant={variant} />

      <div className="flex flex-col">
      <div style={{ order: sectionOrder("features") }}>
      <InViewReveal>
        <section id="features" className="bg-[#f3f6f5] px-5 py-20 sm:px-10 lg:px-[clamp(5rem,8vw,10rem)] lg:py-28">
          <div data-reveal="left" className="grid gap-7 lg:grid-cols-[1.1fr_0.75fr] lg:items-end lg:gap-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#008F74]">{data.sectionEyebrow}</p>
              <h2 className="mt-4 max-w-[900px] text-[clamp(2.5rem,4.6vw,4.75rem)] font-semibold leading-[1] tracking-[-0.055em]">{data.sectionTitle}</h2>
            </div>
            <p className="max-w-[600px] text-base leading-7 text-zinc-600 sm:text-lg">{data.sectionIntro}</p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {data.features.map((feature, index) => (
              <article id={feature.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")} key={feature.title} data-reveal="card" className={`reveal-delay-${(index % 5) + 1} group relative min-h-[315px] scroll-mt-24 overflow-hidden rounded-2xl border border-[#dce5e2] bg-white p-7 transition-[border-color,transform] duration-500 hover:-translate-y-2 hover:border-[#008F74]/45`}>
                <span className="grid size-14 place-items-center rounded-2xl bg-[#dff4ee] text-[#008F74]"><FeatureIcon index={index} /></span>
                <span className="absolute right-7 top-7 text-4xl font-semibold text-[#d8e3df]">0{index + 1}</span>
                <h3 className="mt-16 text-2xl font-semibold tracking-[-0.035em] text-[#17352e]">{feature.title}</h3>
                <p className="mt-3 text-[15px] leading-7 text-zinc-500">{feature.text}</p>
              </article>
            ))}
          </div>
        </section>
      </InViewReveal>
      </div>

      <div style={{ order: sectionOrder("journey") }}>
      <InViewReveal>
        <section className="grid bg-white lg:grid-cols-2">
          <div data-reveal="left" className="relative min-h-[430px] overflow-hidden lg:min-h-[720px]">
            <Image src={data.journey.image} alt={data.journey.imageAlt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
          <div data-reveal="right" className="flex flex-col justify-center px-5 py-16 sm:px-10 lg:px-[clamp(4rem,7vw,8rem)] lg:py-24">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#008F74]">{data.journey.eyebrow}</p>
            <h2 className="mt-4 text-[clamp(2.45rem,4.2vw,4.5rem)] font-semibold leading-[1] tracking-[-0.055em]">{data.journey.title}</h2>
            <p className="mt-6 max-w-[620px] text-base leading-7 text-zinc-600 sm:text-lg">{data.journey.text}</p>
            <ul className="mt-8 grid gap-4">
              {data.journey.points.map((point) => (
                <li key={point} className="flex items-center gap-3 text-[15px] text-zinc-700">
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[#dff4ee] font-semibold text-[#008F74]">✓</span>{point}
                </li>
              ))}
            </ul>
            <Link href="/contact" className="mt-9 inline-flex min-h-12 w-fit items-center gap-3 rounded-lg bg-[#008F74] px-6 text-[15px] font-semibold text-white transition-colors hover:bg-[#005343]">Build Your Solution <ArrowIcon /></Link>
          </div>
        </section>
      </InViewReveal>
      </div>

      <div style={{ order: sectionOrder("capabilities") }}>
      <InViewReveal>
        <section
          id="capabilities"
          className="bg-[#005343] px-5 py-20 text-white sm:px-10 lg:px-[clamp(5rem,8vw,10rem)] lg:py-28"
          style={{ backgroundImage: "radial-gradient(circle at 90% 10%, rgba(100, 224, 196, 0.15), transparent 28%)" }}
        >
          <div data-reveal="left" className="max-w-[830px]">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#64e0c4]">Built Around Your Day</p>
            <h2 className="mt-4 text-[clamp(2.5rem,4.6vw,4.75rem)] font-semibold leading-[1] tracking-[-0.055em]">More Control. Less Friction.</h2>
          </div>
          <div className="mt-14 grid border-l border-t border-white/20 md:grid-cols-3">
            {data.capabilities.map((item, index) => (
              <article key={item.title} data-reveal="card" className={`reveal-delay-${index + 1} min-h-[290px] border-b border-r border-white/20 p-7 transition-colors hover:bg-white/[0.07]`}>
                <span className="text-sm font-semibold tracking-[0.14em] text-[#64e0c4]">0{index + 1}</span>
                <h3 className="mt-20 text-2xl font-semibold tracking-[-0.03em]">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-7 text-white/70">{item.text}</p>
              </article>
            ))}
          </div>
        </section>
      </InViewReveal>
      </div>

      {data.quote ? (
        <div style={{ order: sectionOrder("quote") }}>
        <InViewReveal>
          <section className="relative overflow-hidden bg-[#64e0c4] px-5 py-20 text-center text-[#005343] sm:px-10 lg:px-[clamp(5rem,8vw,10rem)] lg:py-28">
            <div data-reveal="card" className="mx-auto max-w-[1120px]">
              <span className="font-serif text-7xl font-bold leading-none">“</span>
              <blockquote className="mt-2 text-[clamp(2.2rem,4.2vw,4.4rem)] font-semibold leading-[1.04] tracking-[-0.05em]">{data.quote.text}</blockquote>
              <p className="mt-8 flex flex-col gap-1 text-sm"><strong>{data.quote.name}</strong><span className="text-[#005343]/65">{data.quote.role}</span></p>
            </div>
          </section>
        </InViewReveal>
        </div>
      ) : null}

      <div style={{ order: sectionOrder("faq") }}>
      <InViewReveal>
        <section id="faq" className="grid scroll-mt-20 gap-12 bg-[#f7faf9] px-5 py-20 sm:px-10 lg:grid-cols-[0.72fr_1.28fr] lg:px-[clamp(5rem,8vw,10rem)] lg:py-28">
          <div data-reveal="left">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#008F74]">Questions, Answered</p>
            <h2 className="mt-4 text-[clamp(2.5rem,4.5vw,4.65rem)] font-semibold leading-[1] tracking-[-0.055em]">What Businesses Ask Us</h2>
          </div>
          <div data-reveal="right" className="border-t border-zinc-300">
            {data.faqs.map((faq) => (
              <details key={faq.question} className="group border-b border-zinc-300">
                <summary className="flex min-h-20 cursor-pointer list-none items-center justify-between gap-6 py-5 text-lg font-semibold text-[#17352e] [&::-webkit-details-marker]:hidden">
                  {faq.question}<span className="text-2xl font-normal text-[#008F74] transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="max-w-[760px] pb-6 pr-8 text-[15px] leading-7 text-zinc-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </InViewReveal>
      </div>
      </div>

      <FooterCta />
      <Footer />
    </main>
  );
}
