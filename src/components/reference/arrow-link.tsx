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
  fill?: "green" | "white";
  tone?: "dark" | "light";
};

export function ArrowLink({
  children,
  className = "",
  dark = false,
  href = "#contact",
  icon = "arrow",
  fill = "green",
  tone,
}: ArrowLinkProps) {
  return (
    <AnimatedCta
      href={href}
      icon={icon}
      fill={fill}
      tone={tone ?? (dark ? "dark" : "light")}
      className={`detail-cta${className ? ` ${className}` : ""}`}
    >
      {children}
    </AnimatedCta>
  );
}
