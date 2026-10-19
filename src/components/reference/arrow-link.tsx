import {
  AnimatedCta,
  type CtaIcon,
} from "@/components/animated-cta";
import type { ReactNode } from "react";

type ArrowLinkProps = {
  children: ReactNode;
  className?: string;
  dark?: boolean;
  href?: string;
  icon?: CtaIcon;
  tone?: "dark" | "light";
};

export function ArrowLink({
  children,
  className = "",
  dark = false,
  href = "#contact",
  icon = "arrow",
  tone,
}: ArrowLinkProps) {
  return (
    <AnimatedCta
      href={href}
      icon={icon}
      tone={tone ?? (dark ? "dark" : "light")}
      className={`detail-cta${className ? ` ${className}` : ""}`}
    >
      {children}
    </AnimatedCta>
  );
}
