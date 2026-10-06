import type { Metadata } from "next";
import { InnerPage } from "@/components/inner/inner-page";
import { businessToolsData } from "@/components/inner/page-data";

export const metadata: Metadata = {
  title: "Connected Business Tools | Aussie's POS",
  description: "Connect inventory, customers, staff, reporting, ordering and integrations with your POS.",
};

export default function BusinessToolsPage() {
  return <InnerPage data={businessToolsData} />;
}
