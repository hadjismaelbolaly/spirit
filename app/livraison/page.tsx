import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Livraison",
  description: "Zones desservies, délais et modalités de livraison de nos produits spirituels.",
  alternates: { canonical: "/livraison" },
};

export default function LivraisonPage() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-16">
      <SectionHeading eyebrow="Informations" title="Livraison" />

      <div className="mt-10 flex flex-col gap-8 text-sm leading-relaxed text-ivory/70">
        <div>
          <h2 className="mb-2 font-display text-lg text-ivory">Zones desservies</h2>
          <p>
            Nous livrons actuellement au Bénin et pouvons étudier les demandes de livraison vers
            d&apos;autres pays d&apos;Afrique francophone. Contactez-nous sur WhatsApp pour
            confirmer la disponibilité de la livraison dans votre zone.
          </p>
        </div>
        <div>
          <h2 className="mb-2 font-display text-lg text-ivory">Délais</h2>
          <p>
            Les délais de livraison varient selon votre localisation et sont communiqués au
            moment de la confirmation de votre commande.
          </p>
        </div>
        <div>
          <h2 className="mb-2 font-display text-lg text-ivory">Frais de livraison</h2>
          <p>
            Les frais de livraison dépendent de votre zone géographique et vous sont indiqués
            avant la validation finale de la commande.
          </p>
        </div>
        <div>
          <h2 className="mb-2 font-display text-lg text-ivory">Suivi de commande</h2>
          <p>
            Une fois votre commande expédiée, nous vous tenons informé(e) directement par
            WhatsApp ou par e-mail.
          </p>
        </div>
        <div>
          <h2 className="mb-2 font-display text-lg text-ivory">Retard ou colis endommagé</h2>
          <p>
            En cas de retard important ou de colis endommagé à la réception, contactez-nous dans
            les plus brefs délais sur WhatsApp ou par e-mail afin que nous puissions étudier votre
            situation.
          </p>
        </div>
      </div>
    </div>
  );
}
