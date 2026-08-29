import type { Metadata } from "next";
import Image from "next/image";
import Seal from "@/components/Seal";
import SectionHeading from "@/components/SectionHeading";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Découvrez l'histoire et les valeurs derrière la boutique et l'accompagnement spirituel de Hadj Ismaël Bolaly.",
  alternates: { canonical: "/a-propos" },
};

const values = [
  {
    title: "Transmission",
    text: "Une pratique fondée sur des traditions transmises de génération en génération.",
  },
  {
    title: "Écoute",
    text: "Chaque échange est pris au sérieux, dans le respect de la situation de chacun.",
  },
  {
    title: "Transparence",
    text: "Composition, usage et précautions clairement indiqués sur chaque produit.",
  },
  {
    title: "Exigence",
    text: "Une sélection rigoureuse des produits proposés en boutique.",
  },
];

export default function AProposPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-16">
      <SectionHeading eyebrow="À propos" title="Une pratique transmise, un accompagnement sincère" />

      <div className="mt-12 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden border border-gold/30">
          <Image
            src="/images/hadj-ismael-bolaly.jpg"
            alt={siteConfig.brandName}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 90vw, 400px"
          />
        </div>

        <div className="flex flex-col gap-5 text-base leading-relaxed text-ivory/70">
          <p>
            Cette boutique et cet accompagnement sont nés d&apos;une volonté simple : rendre
            accessibles des produits et des consultations spirituelles de qualité, dans le respect
            des pratiques traditionnelles transmises depuis plusieurs générations.
          </p>
          <p>
            Chaque kit est composé avec attention, chaque produit est choisi pour sa cohérence
            avec l&apos;intention qu&apos;il accompagne : protection, purification, chance,
            prospérité ou harmonie.
          </p>
          <p>
            Les consultations, elles, sont pensées comme un espace d&apos;écoute personnalisé.
            Elles s&apos;adressent à toute personne souhaitant un accompagnement symbolique dans
            une période de sa vie, au Burkina Faso comme dans le reste de l&apos;Afrique francophone, et
            au-delà grâce aux consultations à distance.
          </p>
        </div>
      </div>

      <div className="mt-20">
        <h2 className="mb-8 font-display text-2xl text-ivory">Nos valeurs</h2>
        <div className="grid gap-8 sm:grid-cols-2">
          {values.map((v) => (
            <div key={v.title} className="flex gap-4">
              <Seal size={22} className="mt-1 shrink-0 text-gold" />
              <div>
                <h3 className="font-display text-lg text-ivory">{v.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ivory/60">{v.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
