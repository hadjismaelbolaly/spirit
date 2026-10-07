// ─────────────────────────────────────────────────────────────
// CONFIGURATION CENTRALE DU SITE
// Modifie ces valeurs ici : elles sont utilisées sur tout le site.
// ─────────────────────────────────────────────────────────────

export const siteConfig = {
  // Nom de marque — à ajuster si besoin (placeholder cohérent avec ton univers)
  brandName: "Hadj Ismaël Bolaly",
  brandTagline: "Boutique & accompagnement spirituel",

  // Utilisé pour les balises <title> par défaut et le SEO
  defaultTitleSuffix: "Hadj Ismaël Bolaly — Produits & Consultations Spirituelles",
  defaultMetaDescription:
    "Boutique et accompagnement spirituel : kits de protection, purification, chance et prospérité. Consultations spirituelles personnalisées, contact direct sur WhatsApp.",

  // Domaine du site (à remplacer par le vrai nom de domaine une fois acheté)
  siteUrl: "https://www.hadjismaelbolaly.com",

  // Contacts
 whatsappNumber: "+22604469454",
whatsappLink: "https://wa.me/message/7ZPNT4WUNBYGI1",
  email: "hadjismaelbolaly@gmail.com",

  // Zone géographique ciblée pour le SEO local
  locality: "Ouagadougou, Burkina Faso",
  region: "Afrique francophone",
};

// Génère un lien WhatsApp avec message prérempli pour un produit ou service donné
export function whatsappOrderLink(itemName: string, price?: string) {
  const priceText = price ? ` à ${price}` : "";
  const message = `Bonjour, je suis intéressé(e) par "${itemName}"${priceText}. Je voudrais avoir plus d'informations.`;
  return `https://wa.me/${siteConfig.whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(
    message
  )}`;
}

export function mailtoLink(itemName: string) {
  const subject = `Demande d'information — ${itemName}`;
  const body = `Bonjour,\n\nJe souhaiterais avoir plus d'informations concernant : ${itemName}.\n\nMerci d'avance.`;
  return `mailto:${siteConfig.email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
}
