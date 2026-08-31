import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import FaqAccordion from "@/components/FaqAccordion";
import { faqItems } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Questions Fréquentes (FAQ)",
  description:
    "Retrouvez les réponses aux questions les plus fréquentes sur nos produits, nos consultations, la livraison et les retours.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <SectionHeading eyebrow="FAQ" title="Questions fréquentes" />
      <div className="mt-12">
        <FaqAccordion items={faqItems} />
      </div>
    </div>
  );
}
