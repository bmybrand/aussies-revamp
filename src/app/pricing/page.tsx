import type { Metadata } from "next";
import { InnerPage } from "@/components/inner/inner-page";
import { pricingData } from "@/components/inner/page-data";

export const metadata: Metadata = {
  title: "POS Pricing And Options | Aussie's POS",
  description: "Compare POS purchase, lease, rental, software and payment options for your business.",
};

export default function PricingPage() {
  return <InnerPage data={pricingData} />;
}
