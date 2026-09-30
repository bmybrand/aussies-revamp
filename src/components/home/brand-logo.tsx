import Image from "next/image";
import Link from "next/link";

export function BrandLogo() {
  return (
    <Link
      href="/"
      aria-label="Aussie's POS Solutions home"
      className="inline-flex shrink-0 items-center"
    >
      <Image
        src="/aussies-logo.png"
        alt="Aussie's POS Solution"
        width={3744}
        height={790}
        className="h-9 w-auto object-contain sm:h-[50px]"
        sizes="(min-width: 640px) 237px, 171px"
        preload
      />
    </Link>
  );
}
