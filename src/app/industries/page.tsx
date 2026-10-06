import type { Metadata } from "next";
import { InnerPage } from "@/components/inner/inner-page";
import { industriesData } from "@/components/inner/page-data";

export const metadata: Metadata = {
  title: "POS Solutions By Industry | Aussie's POS",
  description: "Explore POS solutions for hospitality, retail, professional services and healthcare businesses.",
};

export default function IndustriesPage() {
  return <InnerPage data={industriesData} />;
}
