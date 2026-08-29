import Image from "next/image";
import Link from "next/link";
import Seal from "@/components/Seal";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import ServiceCard from "@/components/ServiceCard";
import { productCategories, products } from "@/lib/products";
import { services } from "@/lib/services";
import { siteConfig } from "@/lib/site-config";

const bestSellers = products.filter((p) => p.badge === "Best-seller").slice(0, 4);
const featuredServices = services.slice(0, 3);

const reassurance = [
  {
    title: "Sélection soignée",
    text: "Des produits choisis avec attention pour composer des kits cohérents et de qualité.",
  },
  {
    title: "Accompagnement personnalisé",
    text: "Des consultations individuelles adaptées à votre situation, en toute confidentialité.",
  },
  {
    title: "Contact direct",
    text: "Un échange simple et rapide par WhatsApp ou par e-mail, sans intermédiaire.",
  },
  {
    title: "Transparence",
    text: "Composition, usage et précautions clairement indiqués pour chaque produit.",
  },
];

const intentions = [
  {
    title: "Protection",
    text: "Préserver votre énergie et celle de votre foyer.",
    href: "/boutique/categorie/protection",
  },
  {
    title: "Purification",
    text: "Nettoyer l'atmosphère d'un lieu ou renouveler la vôtre.",
    href: "/boutique/categorie/purification",
  },
  {
    title: "Nouveau départ",
    text: "Accompagner symboliquement une période de changement.",
    href: "/boutique/categorie/chance-reussite",
  },
  {
    title: "Harmonie",
    text: "Créer un environnement calme et apaisé, seul ou à deux.",
    href: "/boutique/categorie/amour-harmonie",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-gold/15">
        <div className="glow-gold" />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 px-5 py-20 text-center sm:py-28">
          <Seal size={40} className="text-gold" />
          <p className="eyebrow">{siteConfig.brandTagline}</p>
          <h1 className="max-w-3xl font-display text-4xl leading-tight text-ivory sm:text-6xl">
            Retrouvez votre équilibre,
            <br />
            créez votre rituel.
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-ivory/65 sm:text-lg">
            Boutique et accompagnement spirituel autour de la protection, de la purification, de
            la chance et de l&apos;harmonie — kits, produits naturels et consultations
            personnalisées.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href="/boutique" className="btn-gold">
              Découvrir les produits
            </Link>
            <Link href="/services" className="btn-outline">
              Voir les services
            </Link>
          </div>
        </div>
      </section>

      {/* ── PORTRAIT ─────────────────────────────────────── */}
      <section className="border-b border-gold/15">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden border border-gold/30">
            <Image
              src="/images/hadj-ismael-bolaly.jpg"
              alt={siteConfig.brandName}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 90vw, 400px"
              priority
            />
          </div>
          <div className="flex flex-col gap-5">
            <p className="eyebrow">Qui je suis</p>
            <h2 className="font-display text-3xl text-ivory sm:text-4xl">{siteConfig.brandName}</h2>
            <p className="text-base leading-relaxed text-ivory/65">
              Une boutique et un accompagnement construits autour d&apos;une pratique
              transmise et respectée : la protection, la purification et l&apos;harmonie mises
              au service de votre quotidien.
            </p>
            <p className="text-base leading-relaxed text-ivory/65">
              Chaque produit est sélectionné avec attention, et chaque consultation est pensée
              comme un espace d&apos;écoute personnalisé, accessible où que vous soyez en Afrique
              francophone ou ailleurs.
            </p>
            <Link href="/a-propos" className="mt-2 font-mono text-sm uppercase tracking-widest text-gold hover:underline">
              En savoir plus →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CATEGORIES / INTENTIONS ──────────────────────── */}
      <section className="border-b border-gold/15">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <SectionHeading eyebrow="Explorez notre univers" title="Quatre intentions, un rituel" align="center" />
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
            {intentions.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="surface group flex flex-col gap-3 p-8 transition-colors"
              >
                <Seal size={24} className="text-gold/70 group-hover:text-gold" />
                <h3 className="font-display text-xl text-ivory group-hover:text-gold">{item.title}</h3>
                <p className="text-sm leading-relaxed text-ivory/60">{item.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── BEST-SELLERS ─────────────────────────────────── */}
      <section className="border-b border-gold/15">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading eyebrow="Boutique" title="Nos incontournables" />
            <Link href="/boutique" className="font-mono text-sm uppercase tracking-widest text-gold hover:underline">
              Tous les produits →
            </Link>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {bestSellers.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* ── POURQUOI NOUS CHOISIR ────────────────────────── */}
      <section className="border-b border-gold/15 bg-violet/20">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <SectionHeading eyebrow="Confiance" title="Pourquoi nous choisir" align="center" />
          <div className="mx-auto mt-12 grid max-w-4xl gap-8 sm:grid-cols-2">
            {reassurance.map((item) => (
              <div key={item.title} className="flex gap-4">
                <Seal size={22} className="mt-1 shrink-0 text-gold" />
                <div>
                  <h3 className="font-display text-lg text-ivory">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ivory/60">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────── */}
      <section className="border-b border-gold/15">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading eyebrow="Accompagnement" title="Consultations spirituelles" />
            <Link href="/services" className="font-mono text-sm uppercase tracking-widest text-gold hover:underline">
              Tous les services →
            </Link>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {featuredServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ─────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="glow-gold" />
        <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 px-5 py-24 text-center">
          <Seal size={30} className="text-gold" />
          <h2 className="font-display text-3xl text-ivory sm:text-4xl">
            Une question avant de commander ?
          </h2>
          <p className="max-w-lg text-base leading-relaxed text-ivory/65">
            Écrivez-nous directement sur WhatsApp : nous vous répondons personnellement pour vous
            orienter vers le produit ou le service adapté à votre situation.
          </p>
          <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-gold">
            Discuter sur WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
