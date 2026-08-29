import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité et de traitement des données personnelles.",
  alternates: { canonical: "/politique-de-confidentialite" },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-16">
      <SectionHeading eyebrow="Informations légales" title="Politique de confidentialité" />

      <div className="mt-10 flex flex-col gap-8 text-sm leading-relaxed text-ivory/70">
        <div>
          <h2 className="mb-2 font-display text-lg text-ivory">Données collectées</h2>
          <p>
            Ce site ne collecte aucune donnée personnelle via un formulaire de commande intégré :
            toute prise de contact se fait directement via WhatsApp ou par e-mail, en dehors du
            site. Les informations que vous partagez dans ce cadre (nom, numéro, adresse) sont
            utilisées uniquement pour traiter votre demande ou votre commande.
          </p>
        </div>
        <div>
          <h2 className="mb-2 font-display text-lg text-ivory">Utilisation des données</h2>
          <p>
            Les informations transmises par WhatsApp ou par e-mail servent exclusivement à
            répondre à votre demande, traiter votre commande ou organiser votre consultation.
            Elles ne sont ni revendues ni transmises à des tiers.
          </p>
        </div>
        <div>
          <h2 className="mb-2 font-display text-lg text-ivory">Cookies</h2>
          <p>
            Ce site peut utiliser des cookies techniques nécessaires à son bon fonctionnement,
            ainsi que des outils de mesure d&apos;audience visant à améliorer l&apos;expérience de
            navigation.
          </p>
        </div>
        <div>
          <h2 className="mb-2 font-display text-lg text-ivory">Vos droits</h2>
          <p>
            Conformément aux réglementations applicables, vous disposez d&apos;un droit
            d&apos;accès, de rectification et de suppression des données vous concernant. Pour
            exercer ce droit, contactez-nous à l&apos;adresse {siteConfig.email}.
          </p>
        </div>
      </div>
    </div>
  );
}
