import Link from "next/link";
import type { ReactNode } from "react";

export type CtaIcon =
  | "arrow"
  | "build"
  | "compare"
  | "contact"
  | "products"
  | "quote";

type AnimatedCtaProps = {
  children: ReactNode;
  href: string;
  icon?: CtaIcon;
  tone?: "dark" | "light";
  compact?: boolean;
  className?: string;
};

function CtaArtwork({ icon }: { icon: CtaIcon }) {
  const sharedProps = {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.8,
  };

  return (
    <svg
      aria-hidden="true"
      className={`animated-cta__icon animated-cta__icon--${icon}`}
      viewBox="0 0 24 24"
      {...sharedProps}
    >
      {icon === "quote" ? (
        <>
          <g className="animated-cta__icon-part animated-cta__icon-part--one">
            <rect x="3.5" y="5" width="14" height="15" rx="2.5" />
            <path d="M7 9h7M7 13h4" />
          </g>
          <g className="animated-cta__icon-part animated-cta__icon-part--two">
            <path d="m18.5 2 .65 1.85L21 4.5l-1.85.65L18.5 7l-.65-1.85L16 4.5l1.85-.65L18.5 2Z" />
          </g>
        </>
      ) : icon === "contact" ? (
        <>
          <g className="animated-cta__icon-part animated-cta__icon-part--one">
            <path d="M4 5.5h16v11H9l-5 4v-15Z" />
          </g>
          <g className="animated-cta__icon-part animated-cta__icon-part--two">
            <circle cx="8.5" cy="11" r=".8" fill="currentColor" stroke="none" />
            <circle cx="12" cy="11" r=".8" fill="currentColor" stroke="none" />
            <circle cx="15.5" cy="11" r=".8" fill="currentColor" stroke="none" />
          </g>
        </>
      ) : icon === "products" ? (
        <>
          <g className="animated-cta__icon-part animated-cta__icon-part--one">
            <rect x="3.5" y="4" width="7" height="7" rx="1.5" />
            <rect x="3.5" y="14" width="7" height="6" rx="1.5" />
            <rect x="13.5" y="4" width="7" height="7" rx="1.5" />
          </g>
          <g className="animated-cta__icon-part animated-cta__icon-part--two">
            <path d="M14 17h6m-2.5-2.5L20 17l-2.5 2.5" />
          </g>
        </>
      ) : icon === "compare" ? (
        <>
          <g className="animated-cta__icon-part animated-cta__icon-part--one">
            <rect x="3" y="4" width="7" height="16" rx="2" />
            <rect x="14" y="4" width="7" height="16" rx="2" />
          </g>
          <g className="animated-cta__icon-part animated-cta__icon-part--two">
            <path d="M8 9h8m-2-2 2 2-2 2M16 15H8m2 2-2-2 2-2" />
          </g>
        </>
      ) : icon === "build" ? (
        <>
          <g className="animated-cta__icon-part animated-cta__icon-part--one">
            <path d="M4 13h7v7H4zM13 4h7v7h-7zM4 4h7v7H4z" />
          </g>
          <g className="animated-cta__icon-part animated-cta__icon-part--two">
            <path d="m13.5 16.5 2 2 4.5-5" />
          </g>
        </>
      ) : (
        <>
          <g className="animated-cta__icon-part animated-cta__icon-part--one">
            <path d="M4 12h14" />
          </g>
          <g className="animated-cta__icon-part animated-cta__icon-part--two">
            <path d="m14 7 5 5-5 5" />
          </g>
        </>
      )}
    </svg>
  );
}

export function AnimatedCta({
  children,
  href,
  icon = "arrow",
  tone = "dark",
  compact = false,
  className = "",
}: AnimatedCtaProps) {
  return (
    <Link
      href={href}
      className={`animated-cta animated-cta--${tone}${compact ? " animated-cta--compact" : ""}${className ? ` ${className}` : ""}`}
    >
      <span className="animated-cta__fill" aria-hidden="true" />
      <span className="animated-cta__content">
        <span className="animated-cta__label">{children}</span>
        <CtaArtwork icon={icon} />
      </span>
    </Link>
  );
}
