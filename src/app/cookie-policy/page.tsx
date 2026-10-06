import type { Metadata } from "next";
import { LegalPage } from "@/components/inner/legal-page";

export const metadata: Metadata = { title: "Cookie Policy | Aussie's POS" };

export default function CookiePolicyPage() {
  return <LegalPage title="Cookie Policy" introduction="This page outlines how cookies and similar browser technologies may support website functionality, measurement and experience." sections={[
    { title: "Essential Cookies", paragraphs: ["Some browser storage may be required for security, navigation and features that allow the website to operate correctly."] },
    { title: "Measurement", paragraphs: ["Where enabled, analytics may help us understand aggregate website usage and identify areas that could be improved."] },
    { title: "Your Browser Controls", paragraphs: ["Most browsers allow you to review, block or remove cookies. Restricting essential storage may affect some website functionality."] },
    { title: "Updates", paragraphs: ["This policy may be updated when the website, service providers or applicable requirements change."] },
  ]} />;
}
