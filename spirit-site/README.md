# Hadj Ismaël Bolaly — Site spirituel (Next.js)

## Démarrage rapide

```bash
npm install
npm run dev
```

Puis ouvre http://localhost:3000

## Avant la mise en ligne

1. **Photos produits** : ajoute tes vraies photos dans `public/images/products/`
   et remplace les placeholders dans `components/ProductCard.tsx` et
   `app/boutique/[slug]/page.tsx` par de vraies balises `<Image>` (comme dans
   `app/page.tsx` pour ta photo).
2. **Nom de domaine** : mets à jour `siteUrl` dans `lib/site-config.ts` avec ton
   vrai nom de domaine une fois acheté.
3. **Mentions légales** : complète `app/mentions-legales/page.tsx` avec tes
   informations exactes (statut d'activité, adresse).
4. **Google Search Console** : une fois en ligne, connecte le domaine et
   soumets `/sitemap.xml`.

## Déploiement

Le plus simple : [Vercel](https://vercel.com) — connecte ton repo GitHub, ou
utilise `npx vercel` depuis ce dossier.

## Modifier les produits, services ou articles

Tout le contenu est dans le dossier `lib/` :
- `lib/products.ts` — catalogue produits
- `lib/services.ts` — consultations
- `lib/blog.ts` — articles
- `lib/faq.ts` — questions fréquentes
- `lib/site-config.ts` — nom de marque, WhatsApp, e-mail

Ajouter un produit ou un service = ajouter un objet dans le tableau
correspondant. Les pages et le sitemap se génèrent automatiquement.
