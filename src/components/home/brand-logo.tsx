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
        src="/The_Aussies_-_FF-07-removebg-preview.png"
        alt="The Aussies"
        width={1028}
        height={243}
        className="h-9 w-auto object-contain sm:h-[50px]"
        sizes="(min-width: 640px) 212px, 152px"
        preload
      />
    </Link>
  );
}
