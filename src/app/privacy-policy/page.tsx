import type { Metadata } from "next";
import { LegalPage } from "@/components/inner/legal-page";

export const metadata: Metadata = { title: "Privacy Policy | Aussie's POS" };

export default function PrivacyPolicyPage() {
  return <LegalPage title="Privacy Policy" introduction="This page explains how information may be collected, used and handled when you contact or interact with Aussie's POS Solution." sections={[
    { title: "Information We Receive", paragraphs: ["We may receive contact, business and enquiry details that you choose to provide, along with basic technical information generated when you use the website."] },
    { title: "How Information Is Used", paragraphs: ["Information may be used to respond to enquiries, prepare recommendations, provide requested support and improve our services and website experience."] },
    { title: "Sharing And Storage", paragraphs: ["Information is only shared where needed to provide an agreed service, meet legal obligations or work with authorized service providers under appropriate safeguards."] },
    { title: "Your Choices", paragraphs: ["You can contact us to ask about personal information associated with your enquiry or request an appropriate correction."] },
  ]} />;
}
