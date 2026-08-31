import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import Seal from "@/components/Seal";
import { serviceCategories } from "@/lib/services";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Services & Consultations Spirituelles",
  description:
    "Consultations spirituelles personnalisées : protection, purification, chance, prospérité, amour et relations. Accompagnement à distance par WhatsApp.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <SectionHeading
        eyebrow="Accompagnement"
        title="Nos consultations spirituelles"
        subtitle="Un accompagnement personnalisé, organisé autour de six grandes intentions. Chaque consultation se déroule à distance, par téléphone ou par WhatsApp."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {serviceCategories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/services/categorie/${cat.slug}`}
            className="surface group flex flex-col gap-3 p-7 transition-colors"
          >
            <Seal size={24} className="text-gold/70 group-hover:text-gold" />
            <h2 className="font-display text-xl text-ivory group-hover:text-gold">{cat.label}</h2>
            <p className="text-sm leading-relaxed text-ivory/60">{cat.description}</p>
          </Link>
        ))}
      </div>

      <div className="surface mt-16 flex flex-col items-center gap-4 p-10 text-center">
        <Seal size={26} className="text-gold" />
        <h2 className="font-display text-2xl text-ivory">Vous ne savez pas par où commencer ?</h2>
        <p className="max-w-lg text-sm leading-relaxed text-ivory/60">
          Écrivez-nous directement : nous prenons le temps de comprendre votre situation avant de
          vous orienter vers la consultation la plus adaptée.
        </p>
        <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-gold">
          Discuter sur WhatsApp
        </a>
      </div>
    </div>
  );
}
