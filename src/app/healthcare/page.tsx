import type { Metadata } from "next";
import { SolutionPage } from "@/components/reference/solution-page";
import { healthcareData } from "@/components/reference/data/healthcare-data";

export const metadata: Metadata = {
  title: "Healthcare Payment Solutions | Aussie's POS",
  description: "Clear payment, invoicing, remote transaction and reporting tools for care-focused businesses.",
};

export default function HealthcarePage() {
  return <SolutionPage data={healthcareData} />;
}
