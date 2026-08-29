import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site.",
  alternates: { canonical: "/mentions-legales" },
};

export default function MentionsLegalesPage() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-16">
      <SectionHeading eyebrow="Informations légales" title="Mentions légales" />

      <div className="surface mt-8 p-5 text-xs leading-relaxed text-gold/80">
        À compléter : cette page contient des informations à valeur légale. Remplace les
        champs ci-dessous par tes véritables informations (statut de l&apos;activité, adresse,
        éventuel numéro d&apos;enregistrement) avant la mise en ligne du site.
      </div>

      <div className="mt-8 flex flex-col gap-8 text-sm leading-relaxed text-ivory/70">
        <div>
          <h2 className="mb-2 font-display text-lg text-ivory">Éditeur du site</h2>
          <p>
            {siteConfig.brandName}
            <br />
            Contact : {siteConfig.email}
            <br />
            WhatsApp : {siteConfig.whatsappNumber}
            <br />
            Zone d&apos;activité : {siteConfig.locality}
          </p>
        </div>
        <div>
          <h2 className="mb-2 font-display text-lg text-ivory">Hébergement</h2>
          <p>Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA.</p>
        </div>
        <div>
          <h2 className="mb-2 font-display text-lg text-ivory">Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble des contenus présents sur ce site (textes, images, logo) est la
            propriété de {siteConfig.brandName}, sauf mention contraire, et ne peut être reproduit
            sans autorisation préalable.
          </p>
        </div>
      </div>
    </div>
  );
}
