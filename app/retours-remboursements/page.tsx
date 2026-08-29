import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Retours & Remboursements",
  description: "Conditions de retour et de remboursement applicables à nos produits.",
  alternates: { canonical: "/retours-remboursements" },
};

export default function RetoursPage() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-16">
      <SectionHeading eyebrow="Informations" title="Retours & remboursements" />

      <div className="mt-10 flex flex-col gap-8 text-sm leading-relaxed text-ivory/70">
        <div>
          <h2 className="mb-2 font-display text-lg text-ivory">Produits éligibles au retour</h2>
          <p>
            Les produits non ouverts et dans leur emballage d&apos;origine peuvent faire l&apos;objet
            d&apos;une demande de retour, sous réserve du respect du délai indiqué ci-dessous.
          </p>
        </div>
        <div>
          <h2 className="mb-2 font-display text-lg text-ivory">Délai</h2>
          <p>
            Toute demande de retour doit être formulée dans un délai de 7 jours à compter de la
            réception du produit, en nous contactant directement sur WhatsApp ou par e-mail.
          </p>
        </div>
        <div>
          <h2 className="mb-2 font-display text-lg text-ivory">Produits non retournables</h2>
          <p>
            Pour des raisons d&apos;hygiène, les produits ouverts, entamés ou utilisés (huiles,
            parfums, encens, bougies) ne peuvent pas être repris.
          </p>
        </div>
        <div>
          <h2 className="mb-2 font-display text-lg text-ivory">Procédure</h2>
          <p>
            Contactez-nous en indiquant votre numéro de commande et le motif de votre demande.
            Nous vous accompagnons ensuite dans les étapes suivantes.
          </p>
        </div>
      </div>
    </div>
  );
}
