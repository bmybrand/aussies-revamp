import type { Metadata } from "next";
import { SolutionPage } from "@/components/reference/solution-page";
import { productsData } from "@/components/reference/data/products-data";

export const metadata: Metadata = {
  title: "POS Products And Hardware | Aussie's POS",
  description: "Explore countertop, handheld, mobile, kitchen display and self-service POS products.",
};

export default function ProductsPage() {
  return <SolutionPage data={productsData} />;
}
