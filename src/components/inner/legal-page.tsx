import { Footer } from "@/components/home/footer";
import { Navbar } from "@/components/home/navbar";

type LegalSection = {
  title: string;
  paragraphs: string[];
};

export function LegalPage({ title, introduction, sections }: { title: string; introduction: string; sections: LegalSection[] }) {
  return (
    <main className="bg-white text-zinc-950">
      <Navbar />
      <section className="bg-[linear-gradient(145deg,#008F74,#005343)] px-5 pb-20 pt-40 text-white sm:px-10 lg:px-[clamp(5rem,8vw,10rem)] lg:pb-24 lg:pt-48">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#8ce9d5]">Legal Information</p>
        <h1 className="mt-4 max-w-[1000px] text-[clamp(3rem,6vw,6rem)] font-semibold leading-[0.98] tracking-[-0.055em]">{title}</h1>
        <p className="mt-7 max-w-[760px] text-lg leading-8 text-white/80">{introduction}</p>
      </section>
      <article className="mx-auto max-w-[1050px] px-5 py-20 sm:px-10 lg:py-28">
        {sections.map((section) => (
          <section key={section.title} className="border-t border-zinc-200 py-9 first:border-0 first:pt-0">
            <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[#17352e] sm:text-3xl">{section.title}</h2>
            <div className="mt-4 grid gap-4 text-base leading-8 text-zinc-600">
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </section>
        ))}
      </article>
      <Footer />
    </main>
  );
}
