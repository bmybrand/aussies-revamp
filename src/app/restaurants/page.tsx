import type { Metadata } from "next";
import { SolutionPage } from "@/components/reference/solution-page";
import { restaurantsData } from "@/components/reference/data/restaurants-data";

export const metadata: Metadata = {
  title: "Restaurant POS Solutions | Aussie's POS",
  description: "Connected restaurant POS tools for tableside service, kitchens, online orders, payments and reporting.",
};

export default function RestaurantsPage() {
  return <SolutionPage data={restaurantsData} />;
}
