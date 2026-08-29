"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProductImage({ src, alt }: { src: string; alt: string }) {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-2 px-6 text-center">
        <span className="text-sm text-gold/40">Photo du produit à venir</span>
        <span className="font-mono text-[11px] text-ivory/25">{src.split("/").pop()}</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover"
      sizes="(max-width: 1024px) 100vw, 50vw"
      onError={() => setImgError(true)}
      priority
    />
  );
}
