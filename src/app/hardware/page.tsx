import type { Metadata } from "next";
import { InnerPage } from "@/components/inner/inner-page";
import { hardwareData } from "@/components/inner/page-data";

export const metadata: Metadata = {
  title: "POS Hardware | Aussie's POS",
  description: "Explore countertop, handheld, mobile, customer-facing and kitchen POS hardware for your business.",
};

export default function HardwarePage() {
  return <InnerPage data={hardwareData} />;
}
