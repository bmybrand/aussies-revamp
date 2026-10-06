import type { Metadata } from "next";
import { InnerPage } from "@/components/inner/inner-page";
import { contactData } from "@/components/inner/page-data";

export const metadata: Metadata = {
  title: "Contact Aussie's POS Solution",
  description: "Request a quote, demonstration, system review or support from Aussie's POS Solution.",
};

export default function ContactPage() {
  return <InnerPage data={contactData} />;
}
