import type { Metadata } from "next";
import { InnerPage } from "@/components/inner/inner-page";
import { supportData } from "@/components/inner/page-data";

export const metadata: Metadata = {
  title: "POS Support And Guidance | Aussie's POS",
  description: "Find practical setup, hardware, software and payment guidance for your POS system.",
};

export default function SupportPage() {
  return <InnerPage data={supportData} />;
}
