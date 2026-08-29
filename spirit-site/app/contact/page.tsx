import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import Seal from "@/components/Seal";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez-nous directement par WhatsApp ou par e-mail pour toute question sur nos produits ou nos consultations spirituelles.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <SectionHeading
        eyebrow="Contact"
        title="Parlons de votre situation"
        subtitle="Le moyen le plus rapide de nous joindre reste WhatsApp. Nous répondons personnellement à chaque message."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        <a
          href={siteConfig.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="surface flex flex-col gap-3 p-8 transition-colors"
        >
          <Seal size={26} className="text-gold" />
          <h2 className="font-display text-xl text-ivory">WhatsApp</h2>
          <p className="text-sm text-ivory/60">Le moyen le plus rapide pour nous joindre.</p>
          <span className="mt-auto font-mono text-sm text-gold">{siteConfig.whatsappNumber}</span>
        </a>

        <a
          href={`mailto:${siteConfig.email}`}
          className="surface flex flex-col gap-3 p-8 transition-colors"
        >
          <Seal size={26} className="text-gold" />
          <h2 className="font-display text-xl text-ivory">E-mail</h2>
          <p className="text-sm text-ivory/60">Pour les demandes détaillées ou les documents.</p>
          <span className="mt-auto break-all font-mono text-sm text-gold">{siteConfig.email}</span>
        </a>
      </div>

      <div className="surface mt-10 p-8">
        <h2 className="mb-3 font-display text-lg text-ivory">Horaires</h2>
        <p className="text-sm leading-relaxed text-ivory/60">
          Nous nous efforçons de répondre à chaque message dans les meilleurs délais, en semaine
          comme le week-end. Pour toute demande urgente, WhatsApp reste le canal le plus rapide.
        </p>
      </div>

      <div className="mt-10 text-sm text-ivory/50">
        <p>Zone d&apos;intervention : {siteConfig.locality} et {siteConfig.region}.</p>
      </div>
    </div>
  );
}
