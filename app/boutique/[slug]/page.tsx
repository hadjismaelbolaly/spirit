import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Seal from "@/components/Seal";
import ProductCard from "@/components/ProductCard";
import ProductImage from "@/components/ProductImage";
import { products, getProductBySlug, getProductsByCategory } from "@/lib/products";
import { whatsappOrderLink, mailtoLink } from "@/lib/site-config";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = getProductBySlug(params.slug);
  if (!product) return {};
  return {
    title: product.seoTitle,
    description: product.metaDescription,
    alternates: { canonical: `/boutique/${product.slug}` },
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const related = getProductsByCategory(product.category)
    .filter((p) => p.slug !== product.slug)
    .slice(0, 3);

  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <Link href="/boutique" className="font-mono text-xs uppercase tracking-widest text-gold/70 hover:text-gold">
        ← Retour à la boutique
      </Link>

      <div className="mt-8 grid gap-12 lg:grid-cols-2">
        <div className="relative aspect-square border border-gold/25 bg-violet-deep">
          <ProductImage src={product.image} alt={product.name} />
          {product.badge && (
            <span className="absolute left-4 top-4 border border-gold/50 bg-ink/80 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-gold">
              {product.badge}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <div className="flex items-center gap-2">
              <Seal size={16} className="text-gold" />
              <span className="eyebrow">
                {product.category.replace("-", " & ").replace(/-/g, " ")}
              </span>
            </div>
            <h1 className="mt-3 font-display text-3xl text-ivory sm:text-4xl">{product.name}</h1>
          </div>

          <p className="text-base leading-relaxed text-ivory/70">{product.description}</p>

          {product.contents && (
            <div>
              <h2 className="mb-3 font-display text-lg text-ivory">Contenu du kit</h2>
              <ul className="space-y-2">
                {product.contents.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-ivory/70">
                    <Seal size={14} className="mt-1 shrink-0 text-gold/70" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappOrderLink(product.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              Commander sur WhatsApp
            </a>
            <a href={mailtoLink(product.name)} className="btn-outline">
              Commander par e-mail
            </a>
          </div>
        </div>
      </div>

      <div className="mt-16 grid gap-10 border-t border-gold/15 pt-12 lg:grid-cols-2">
        <div>
          <h2 className="mb-3 font-display text-lg text-ivory">Comment l&apos;utiliser ?</h2>
          <p className="text-sm leading-relaxed text-ivory/65">{product.howToUse}</p>
        </div>
        <div>
          <h2 className="mb-3 font-display text-lg text-ivory">Précautions d&apos;utilisation</h2>
          <p className="text-sm leading-relaxed text-ivory/65">{product.precautions}</p>
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-20">
          <h2 className="mb-8 font-display text-2xl text-ivory">Vous pourriez aussi aimer</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
