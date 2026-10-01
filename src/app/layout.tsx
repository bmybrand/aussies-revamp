import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "lenis/dist/lenis.css";
import { SmoothScroll } from "@/components/smooth-scroll";
import "./globals.css";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aussie's POS Solutions",
  description: "POS systems and payment solutions for Australian businesses.",
  icons: {
    icon: "/Aussie POS - favicon.png",
    shortcut: "/Aussie POS - favicon.png",
    apple: "/Aussie POS - favicon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bricolageGrotesque.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
