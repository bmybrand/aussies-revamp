import Image from "next/image";
import { Manrope } from "next/font/google";
import type { ReactNode } from "react";

export const manrope = Manrope({ subsets: ["latin"] });

type EyebrowLabelProps = {
  children: ReactNode;
  className?: string;
};

export function EyebrowLabel({ children, className = "" }: EyebrowLabelProps) {
  return (
    <p className={`${manrope.className} flex items-center gap-3 text-xs font-medium uppercase tracking-[0.08em] sm:text-base ${className}`}>
      <Image
        src="/Aussie - FF 1 (3).png"
        alt=""
        width={128}
        height={88}
        className="h-5 w-auto shrink-0 object-contain"
        sizes="29px"
      />
      {children}
    </p>
  );
}
