import type { Metadata } from "next";
import { LegalPage } from "@/components/inner/legal-page";

export const metadata: Metadata = { title: "Terms And Conditions | Aussie's POS" };

export default function TermsPage() {
  return <LegalPage title="Terms & Conditions" introduction="These general website terms describe the basis on which information from Aussie's POS Solution is presented and used." sections={[
    { title: "Website Information", paragraphs: ["Website content is general information and does not replace a tailored quotation, product agreement or advice based on your specific circumstances."] },
    { title: "Products And Availability", paragraphs: ["Products, features, pricing, payment arrangements and service availability may vary by provider, plan, location and eligibility."] },
    { title: "Intellectual Property", paragraphs: ["Website content, branding and original materials may not be reproduced or used commercially without appropriate permission."] },
    { title: "Changes", paragraphs: ["These terms and website content may be updated as products, services and legal requirements change."] },
  ]} />;
}
