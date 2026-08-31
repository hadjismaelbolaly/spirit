import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Seal from "@/components/Seal";
import ServiceCard from "@/components/ServiceCard";
import { services, getServiceBySlug, getServicesByCategory, serviceCategories } from "@/lib/services";
import { siteConfig, whatsappOrderLink, mailtoLink } from "@/lib/site-config";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};
  return {
    title: service.seoTitle,
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  const categoryLabel = serviceCategories.find((c) => c.slug === service.category)?.label;
  const related = getServicesByCategory(service.category)
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <Link href="/services" className="font-mono text-xs uppercase tracking-widest text-gold/70 hover:text-gold">
        ← Tous les services
      </Link>

      <div className="mt-8 flex items-center gap-2">
        <Seal size={16} className="text-gold" />
        <span className="eyebrow">{categoryLabel}</span>
      </div>

      <h1 className="mt-3 font-display text-3xl text-ivory sm:text-4xl">{service.title}</h1>
      <p className="mt-2 font-mono text-xs uppercase tracking-widest text-gold/80">{service.format}</p>

      <p className="mt-8 text-base leading-relaxed text-ivory/70">{service.description}</p>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <a
          href={whatsappOrderLink(service.title)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold"
        >
          Réserver sur WhatsApp
        </a>
        <a href={mailtoLink(service.title)} className="btn-outline">
          Demander par e-mail
        </a>
      </div>

      <div className="surface mt-12 p-6 text-sm leading-relaxed text-ivory/60">
        Cette consultation constitue un accompagnement symbolique et personnalisé. Elle ne
        remplace en aucun cas un avis médical, juridique ou financier professionnel.
      </div>

      {related.length > 0 && (
        <div className="mt-16 border-t border-gold/15 pt-12">
          <h2 className="mb-8 font-display text-xl text-ivory">Autres services associés</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {related.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
