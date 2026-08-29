import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Conditions générales de vente",
  description: "Conditions générales de vente applicables aux produits et services proposés.",
  alternates: { canonical: "/conditions-generales-de-vente" },
};

export default function CGVPage() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-16">
      <SectionHeading eyebrow="Informations légales" title="Conditions générales de vente" />

      <div className="mt-10 flex flex-col gap-8 text-sm leading-relaxed text-ivory/70">
        <div>
          <h2 className="mb-2 font-display text-lg text-ivory">Commandes</h2>
          <p>
            Toute commande passée via WhatsApp ou par e-mail fait l&apos;objet d&apos;une
            confirmation avant expédition ou avant la tenue d&apos;une consultation.
          </p>
        </div>
        <div>
          <h2 className="mb-2 font-display text-lg text-ivory">Prix</h2>
          <p>
            Les prix affichés sur le site sont exprimés en Francs CFA (FCFA) et peuvent être
            ajustés sans préavis. Le prix applicable est celui confirmé au moment de la commande.
          </p>
        </div>
        <div>
          <h2 className="mb-2 font-display text-lg text-ivory">Paiement</h2>
          <p>
            Les moyens de paiement acceptés sont communiqués lors de la prise de commande, selon
            les options disponibles dans votre pays.
          </p>
        </div>
        <div>
          <h2 className="mb-2 font-display text-lg text-ivory">Nature des produits et services</h2>
          <p>
            Les produits et consultations proposés relèvent d&apos;une démarche symbolique et
            traditionnelle. Ils ne constituent ni un avis médical, ni un avis juridique, ni un
            avis financier, et ne sauraient se substituer à l&apos;accompagnement d&apos;un
            professionnel qualifié lorsque la situation le requiert.
          </p>
        </div>
        <div>
          <h2 className="mb-2 font-display text-lg text-ivory">Contact</h2>
          <p>
            Pour toute question relative à ces conditions, contactez-nous à l&apos;adresse{" "}
            {siteConfig.email}.
          </p>
        </div>
      </div>
    </div>
  );
}
