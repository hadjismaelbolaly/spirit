"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";
import { whatsappOrderLink } from "@/lib/site-config";

export default function ProductCard({ product }: { product: Product }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="surface group flex flex-col overflow-hidden transition-colors">
      <Link href={`/boutique/${product.slug}`} className="block">
        <div className="relative aspect-square overflow-hidden bg-violet-deep">
          {!imgError ? (
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
              onError={() => setImgError(true)}
            />
          ) : (
            // Repli affiché tant qu'aucune photo n'existe à ce chemin :
            // dépose ton image dans /public/images/products/ avec ce nom de fichier.
            <div className="flex h-full w-full flex-col items-center justify-center gap-1 px-4 text-center">
              <span className="text-xs text-gold/40">Photo à venir</span>
              <span className="font-mono text-[10px] text-ivory/25">
                {product.image.split("/").pop()}
              </span>
            </div>
          )}
          {product.badge && (
            <span className="absolute left-3 top-3 border border-gold/50 bg-ink/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-gold">
              {product.badge}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-2 p-5 pb-3">
          <h3 className="font-display text-base text-ivory group-hover:text-gold">
            {product.name}
          </h3>
          <p className="line-clamp-2 text-sm text-ivory/60">{product.shortDescription}</p>
        </div>
      </Link>
      <div className="px-5 pb-5">
        <a
          href={whatsappOrderLink(product.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold w-full !py-2.5 !text-xs"
        >
          Commander sur WhatsApp
        </a>
      </div>
    </div>
  );
}
