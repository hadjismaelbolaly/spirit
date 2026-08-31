import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { productCategories } from "@/lib/products";
import { serviceCategories } from "@/lib/services";
import Seal from "./Seal";

export default function Footer() {
  return (
    <footer className="border-t border-gold/15 bg-ink">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <Seal size={22} className="text-gold" />
            <span className="font-display text-base text-ivory">{siteConfig.brandName}</span>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-ivory/60">
            {siteConfig.brandTagline}. Produits et consultations pour accompagner vos rituels de
            protection, purification, chance et harmonie.
          </p>
        </div>

        <div>
          <h3 className="eyebrow mb-4">Produits</h3>
          <ul className="space-y-2.5">
            {productCategories.map((cat) => (
              <li key={cat.slug}>
                <Link
                  href={`/boutique/categorie/${cat.slug}`}
                  className="text-sm text-ivory/70 hover:text-gold"
                >
                  {cat.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow mb-4">Services</h3>
          <ul className="space-y-2.5">
            {serviceCategories.slice(0, 6).map((cat) => (
              <li key={cat.slug}>
                <Link href={`/services/categorie/${cat.slug}`} className="text-sm text-ivory/70 hover:text-gold">
                  {cat.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow mb-4">Informations</h3>
          <ul className="space-y-2.5">
            <li>
              <Link href="/livraison" className="text-sm text-ivory/70 hover:text-gold">
                Livraison
              </Link>
            </li>
            <li>
              <Link href="/retours-remboursements" className="text-sm text-ivory/70 hover:text-gold">
                Retours &amp; remboursements
              </Link>
            </li>
            <li>
              <Link href="/mentions-legales" className="text-sm text-ivory/70 hover:text-gold">
                Mentions légales
              </Link>
            </li>
            <li>
              <Link href="/politique-de-confidentialite" className="text-sm text-ivory/70 hover:text-gold">
                Politique de confidentialité
              </Link>
            </li>
            <li>
              <Link href="/conditions-generales-de-vente" className="text-sm text-ivory/70 hover:text-gold">
                Conditions générales de vente
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="rule-gold mx-auto max-w-6xl opacity-40" />

      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-5 py-8 text-xs text-ivory/50 sm:flex-row sm:items-center">
        <p>
          © {new Date().getFullYear()} {siteConfig.brandName}. Tous droits réservés.
        </p>
        <div className="flex gap-6">
          <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
            WhatsApp
          </a>
          <a href={`mailto:${siteConfig.email}`} className="hover:text-gold">
            {siteConfig.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
