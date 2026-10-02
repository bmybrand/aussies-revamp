import Image from "next/image";
import Link from "next/link";

type BrandLogoProps = {
  isScrolled?: boolean;
};

export function BrandLogo({ isScrolled = false }: BrandLogoProps) {
  return (
    <Link
      href="/"
      aria-label="Aussie's POS Solutions home"
      className="relative inline-flex h-9 w-[171px] shrink-0 items-center sm:h-[50px] sm:w-[237px]"
    >
      <Image
        src="/aussies-logo.png"
        alt="Aussie's POS Solution"
        width={3744}
        height={790}
        className={`absolute inset-0 size-full object-contain object-left transition-opacity duration-500 ease-out ${
          isScrolled ? "opacity-0" : "opacity-100"
        }`}
        sizes="(min-width: 640px) 237px, 171px"
        preload
      />
      <Image
        src="/aussies-logo-scrolled-text-black.png"
        alt=""
        width={3744}
        height={790}
        className={`absolute inset-0 size-full object-contain object-left transition-opacity duration-500 ease-out ${
          isScrolled ? "opacity-100" : "opacity-0"
        }`}
        sizes="(min-width: 640px) 237px, 171px"
      />
    </Link>
  );
}
