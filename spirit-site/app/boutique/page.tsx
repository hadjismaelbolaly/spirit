import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import { productCategories, products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Boutique — Produits Spirituels",
  description:
    "Découvrez notre boutique de produits spirituels : kits de protection, purification, chance, prospérité et harmonie. Commande directe sur WhatsApp.",
  alternates: { canonical: "/boutique" },
};

export default function BoutiquePage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <SectionHeading
        eyebrow="Boutique"
        title="Tous nos produits"
        subtitle="Des kits et produits sélectionnés pour accompagner vos rituels de protection, purification, chance et harmonie."
      />

      <div className="mt-10 flex flex-wrap gap-3">
        <Link
          href="/boutique"
          className="border border-gold bg-gold px-4 py-2 font-mono text-xs uppercase tracking-widest text-ink"
        >
          Tous les produits
        </Link>
        {productCategories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/boutique/categorie/${cat.slug}`}
            className="border border-gold/40 px-4 py-2 font-mono text-xs uppercase tracking-widest text-ivory/80 hover:border-gold hover:text-gold"
          >
            {cat.label}
          </Link>
        ))}
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
}
