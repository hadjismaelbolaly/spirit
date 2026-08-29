import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import Seal from "@/components/Seal";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Le Guide du Bien-Être Spirituel",
  description:
    "Articles et guides pratiques sur la purification, la protection spirituelle et les pratiques traditionnelles en Afrique de l'Ouest.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-16">
      <SectionHeading
        eyebrow="Blog"
        title="Le guide du bien-être spirituel"
        subtitle="Des articles pratiques pour comprendre et accompagner vos rituels personnels."
      />

      <div className="mt-12 flex flex-col divide-y divide-gold/10">
        {blogPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex flex-col gap-2 py-8">
            <div className="flex items-center gap-2">
              <Seal size={14} className="text-gold/70" />
              <span className="eyebrow">{post.category}</span>
              <span className="text-xs text-ivory/40">
                {new Date(post.date).toLocaleDateString("fr-FR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>
            <h2 className="font-display text-2xl text-ivory group-hover:text-gold">{post.title}</h2>
            <p className="text-sm leading-relaxed text-ivory/60">{post.excerpt}</p>
            <span className="mt-1 font-mono text-xs uppercase tracking-widest text-gold/80">
              Lire l&apos;article →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
