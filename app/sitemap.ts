import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { products, productCategories } from "@/lib/products";
import { services, serviceCategories } from "@/lib/services";
import { blogPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.siteUrl;

  const staticRoutes = [
    "",
    "/boutique",
    "/services",
    "/blog",
    "/a-propos",
    "/faq",
    "/contact",
    "/livraison",
    "/retours-remboursements",
    "/mentions-legales",
    "/politique-de-confidentialite",
    "/conditions-generales-de-vente",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));

  const productCategoryRoutes = productCategories.map((cat) => ({
    url: `${base}/boutique/categorie/${cat.slug}`,
    lastModified: new Date(),
  }));

  const productRoutes = products.map((p) => ({
    url: `${base}/boutique/${p.slug}`,
    lastModified: new Date(),
  }));

  const serviceCategoryRoutes = serviceCategories.map((cat) => ({
    url: `${base}/services/categorie/${cat.slug}`,
    lastModified: new Date(),
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: new Date(),
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [
    ...staticRoutes,
    ...productCategoryRoutes,
    ...productRoutes,
    ...serviceCategoryRoutes,
    ...serviceRoutes,
    ...blogRoutes,
  ];
}
