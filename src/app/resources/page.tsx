import type { Metadata } from "next";
import { SolutionPage } from "@/components/reference/solution-page";
import { resourcesData } from "@/components/reference/data/resources-data";

export const metadata: Metadata = {
  title: "POS Guides And Resources | Aussie's POS",
  description: "Guides, product education, integration planning, onboarding help and practical POS resources.",
};

export default function ResourcesPage() {
  return <SolutionPage data={resourcesData} />;
}
