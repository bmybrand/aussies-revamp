"use client";

const heroSegments = ["Food & Beverage", "Retail", "Services"];

type HeroProgressProps = {
  activeIndex: number;
};

type HeroSegmentNavigationProps = HeroProgressProps & {
  onSelect: (index: number) => void;
};

export function HeroProgress({ activeIndex }: HeroProgressProps) {
  return (
    <div aria-hidden="true" className="grid grid-cols-3 gap-px">
      {heroSegments.map((segment, index) => (
        <span key={segment} className="h-0.5 overflow-hidden bg-white/20">
          {index < activeIndex && (
            <span className="block size-full bg-[#FCFF6A]" />
          )}
          {index === activeIndex && (
            <span
              key={activeIndex}
              className="hero-progress-fill block size-full origin-left bg-[#FCFF6A]"
            />
          )}
        </span>
      ))}
    </div>
  );
}

export function HeroSegmentNavigation({
  activeIndex,
  onSelect,
}: HeroSegmentNavigationProps) {
  return (
    <nav
      aria-label="Hero categories"
      className="grid min-h-[72px] grid-cols-3 items-center bg-transparent"
    >
      {heroSegments.map((segment, index) => (
        <button
          key={segment}
          type="button"
          aria-current={index === activeIndex ? "true" : undefined}
          onClick={() => onSelect(index)}
          className={`h-full cursor-pointer px-3 text-center text-sm font-normal transition-colors hover:text-[#FCFF6A] sm:text-lg ${
            index === activeIndex ? "text-white" : "text-white/90"
          }`}
        >
          {segment}
        </button>
      ))}
    </nav>
  );
}
