import type { Metadata } from "next";
import { InnerPage } from "@/components/inner/inner-page";
import { aboutData } from "@/components/inner/page-data";

export const metadata: Metadata = {
  title: "About Aussie's POS Solution",
  description: "Learn how Aussie's helps Australian businesses choose, set up and grow with connected POS solutions.",
};

export default function AboutPage() {
  return <InnerPage data={aboutData} />;
}
