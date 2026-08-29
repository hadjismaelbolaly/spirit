import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import { productCategories, getProductsByCategory, ProductCategory } from "@/lib/products";

export function generateStaticParams() {
  return productCategories.map((cat) => ({ slug: cat.slug }));
}

function getCategory(slug: string) {
  return productCategories.find((c) => c.slug === slug);
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const category = getCategory(params.slug);
  if (!category) return {};
  return {
    title: category.label,
    description: category.description,
    alternates: { canonical: `/boutique/categorie/${category.slug}` },
  };
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = getCategory(params.slug);
  if (!category) notFound();

  const categoryProducts = getProductsByCategory(category.slug as ProductCategory);

  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <Link href="/boutique" className="font-mono text-xs uppercase tracking-widest text-gold/70 hover:text-gold">
        ← Toute la boutique
      </Link>
      <div className="mt-6">
        <SectionHeading eyebrow="Boutique" title={category.label} subtitle={category.description} />
      </div>

      {categoryProducts.length > 0 ? (
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categoryProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <p className="mt-12 text-ivory/60">
          De nouveaux produits arrivent bientôt dans cette catégorie. Contactez-nous sur WhatsApp
          pour toute question.
        </p>
      )}
    </div>
  );
}
