import type { Metadata } from "next";
import { InnerPage } from "@/components/inner/inner-page";
import { paymentOptionsData } from "@/components/inner/page-data";

export const metadata: Metadata = {
  title: "Payment Options | Aussie's POS",
  description: "Explore connected in-person, mobile, contactless, invoice and recurring payment options.",
};

export default function PaymentOptionsPage() {
  return <InnerPage data={paymentOptionsData} />;
}
