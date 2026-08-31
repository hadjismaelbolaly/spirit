import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Seal from "@/components/Seal";
import { blogPosts, getBlogPostBySlug } from "@/lib/blog";
import { siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.seoTitle,
    description: post.metaDescription,
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-2xl px-5 py-16">
      <Link href="/blog" className="font-mono text-xs uppercase tracking-widest text-gold/70 hover:text-gold">
        ← Tous les articles
      </Link>

      <div className="mt-8 flex items-center gap-2">
        <Seal size={14} className="text-gold" />
        <span className="eyebrow">{post.category}</span>
      </div>

      <h1 className="mt-3 font-display text-3xl leading-tight text-ivory sm:text-4xl">{post.title}</h1>
      <p className="mt-3 text-xs text-ivory/40">
        {new Date(post.date).toLocaleDateString("fr-FR", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </p>

      <div className="mt-10 flex flex-col gap-5">
        {post.content.map((paragraph, i) => (
          <p key={i} className="text-base leading-relaxed text-ivory/70">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="surface mt-14 flex flex-col items-center gap-3 p-8 text-center">
        <Seal size={22} className="text-gold" />
        <p className="text-sm text-ivory/60">Une question sur cette pratique ?</p>
        <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-gold">
          Discuter sur WhatsApp
        </a>
      </div>
    </article>
  );
}
